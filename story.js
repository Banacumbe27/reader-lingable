function import_CSS(path){
link=document.createElement('link');
link.rel="stylesheet";
link.href=path
document.head.appendChild(link);
return true
}
import_CSS("story.css")


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
async function load_stories(){
    let stories;
    stories=await import_stories(false);
    if(stories){
    stories.forEach(story=>{
        story_menu.appendChild(storyItem(story));
    });
}
    stories=await import_stories(true);

    story_menu.innerHTML="";
    stories.forEach(story=>{
        story_menu.appendChild(storyItem(story));
    });
}
function storyItem(story){
    const item=document.createElement('div');
    item.classList.add('story_item');
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
        window.location.href="reader.html";
    };
    return item;
}
load_stories();

