function import_CSS(path){
link=document.createElement('link');
link.rel="stylesheet";
link.href=path
document.head.appendChild(link);
return true;
}
import_CSS("story.css")
import_CSS("admin.css")

async function import_stories(online){
    let output;
    if(online){
   await fetch(backend_url).then(res=>res.json())
    .then(data=>{
        output=data;
        localStorage.setItem(cache_key,JSON.stringify(output));
    });
    }
    else{
        output=JSON.parse(localStorage.getItem(cache_key));
    }
    return output;
}
const story_menu=document.querySelector('.story_menu');
const delete_menu=document.querySelector('.delete_menu-container');
async function load_stories(){
    let stories;
    stories=await import_stories(false);
story_menu.appendChild(plus());
    stories.forEach(story=>{
        story_menu.appendChild(storyItem(story));
    });
    stories=await import_stories(true);
    
    story_menu.innerHTML="";
story_menu.appendChild(plus());
    stories.forEach(story=>{
        story_menu.appendChild(storyItem(story));
    });

}
async function deletePost(id){
fetch(backend_url,
    {
        method:"post",
        mode:"no-cors",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({
            id:id,
            req:"delete"
        })
    })
}
let id_to_del="";
function showDeleteMenu(){
delete_menu.classList.remove("hidden");
}
function hideDeleteMenu(){
delete_menu.classList.add("hidden");
}
const cancelDelete=document.querySelector('.cancel');
const confirmDelete=document.querySelector('.delete');
cancelDelete.onclick=()=>{hideDeleteMenu()};
confirmDelete.onclick=async()=>{
    await deletePost(id_to_del)
    console.log(id_to_del);
    hideDeleteMenu();
    window.alert("Post is deleted!");
}
const story_to_del=document.querySelector(".story_to_del");
function storyItem(story){
    
    const item=document.createElement('div');
    item.classList.add('story_item');
    const delete_button=document.createElement('div');
    delete_button.classList.add("delete_button");
    delete_button.textContent="-";
    delete_button.onclick=async (e)=>{
        story_to_del.textContent=`Delete "${story.title}"?`
       showDeleteMenu();
       id_to_del=story.id;
       e.stopPropagation();
    };
    item.appendChild(delete_button);
    
    const img=document.createElement('img');
    img.src=story.img;
    const str=document.createElement('strong');
    str.textContent=story.title;
    const i=document.createElement('i');
    i.textContent=story.description;
    const p=document.createElement('p');
    p.textContent=story.content.slice(0,60)+"...";
    item.appendChild(img);
    item.appendChild(str);
    item.appendChild(i);
    item.appendChild(p);
    item.id=story.id;
        item.onclick=()=>{
        localStorage.setItem("reading",JSON.stringify(story));
        window.location.href="edit.html";
    };
    return item;
}
load_stories();




const plus=()=>{
    const ele=document.createElement('div');
    ele.classList.add("story_item");
    ele.classList.add('plus');
    const img=document.createElement('img');
    img.src=`https://th.bing.com/th/id/R.67256754656a0f19564dcd39e226e860?rik=rIUSFcrtqFsqag&pid=ImgRaw&r=0`;
    ele.appendChild(img);
    ele.onclick=()=>{
        window.location.href="add.html";
    }
    return ele;
}
