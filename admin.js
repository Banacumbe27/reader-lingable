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
    story_menu.innerHTML = '';
    story_menu.appendChild(plus());
    
    stories=await import_stories(false);
    stories.forEach((story, index) => {
        setTimeout(() => {
            story_menu.appendChild(storyItem(story));
        }, index * 50);
    });
    
    stories=await import_stories(true);
    story_menu.innerHTML="";
    story_menu.appendChild(plus());
    
    stories.forEach((story, index) => {
        setTimeout(() => {
            story_menu.appendChild(storyItem(story));
        }, index * 50);
    });
}

async function deletePost(id){
    fetch(backend_url, {
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
    // Add scale-in animation
    const modal = delete_menu.querySelector('.delete_menu');
    modal.style.animation = 'soft-pop 0.4s ease-out';
}

function hideDeleteMenu(){
    const modal = delete_menu.querySelector('.delete_menu');
    modal.style.animation = 'soft-pop 0.3s ease-out reverse';
    setTimeout(() => {
        delete_menu.classList.add("hidden");
    }, 200);
}

const cancelDelete=document.querySelector('.cancel');
const confirmDelete=document.querySelector('.delete');

cancelDelete.onclick=()=>{ hideDeleteMenu() };

confirmDelete.onclick=async()=>{
    confirmDelete.style.opacity = '0.6';
    confirmDelete.style.pointerEvents = 'none';
    await deletePost(id_to_del)
    hideDeleteMenu();
    
    // Animate the deleted item out
    const deletedItem = document.getElementById(id_to_del);
    if(deletedItem) {
        deletedItem.style.animation = 'fadeInUp 0.3s ease-out reverse';
        setTimeout(() => {
            deletedItem.remove();
        }, 300);
    }
    
    window.alert("Post deleted successfully! 🗑️");
    confirmDelete.style.opacity = '1';
    confirmDelete.style.pointerEvents = 'auto';
}

const story_to_del=document.querySelector(".story_to_del");

function storyItem(story){
    const item=document.createElement('div');
    item.classList.add('story_item');
    
    const delete_button=document.createElement('div');
    delete_button.classList.add("delete_button");
    delete_button.textContent="−";
    delete_button.title = "Delete this article";
    
    delete_button.onclick=async (e)=>{
        story_to_del.textContent=`Delete "${story.title}"?`
        showDeleteMenu();
        id_to_del=story.id;
        e.stopPropagation();
    };
    
    item.appendChild(delete_button);
    
    // Create content wrapper
    const contentWrapper = document.createElement('div');
    contentWrapper.style.width = '100%';
    contentWrapper.style.display = 'flex';
    contentWrapper.style.flexDirection = 'column';
    contentWrapper.style.gap = '0';
    
    const img=document.createElement('img');
    img.src=story.img;
    img.alt=story.title;
    img.loading='lazy';
    
    const str=document.createElement('strong');
    str.textContent=story.title;
    
    const i=document.createElement('i');
    i.textContent=story.description;
    
    const p=document.createElement('p');
    p.textContent=story.content.slice(0,60)+"...";
    
    item.appendChild(img);
    contentWrapper.appendChild(str);
    contentWrapper.appendChild(i);
    contentWrapper.appendChild(p);
    item.appendChild(contentWrapper);
    item.id=story.id;
    
    item.onclick=()=>{
        item.style.animation = 'soft-pop 0.3s ease-out';
        setTimeout(() => {
            localStorage.setItem("reading",JSON.stringify(story));
            window.location.href="edit.html";
        }, 150);
    };
    
    return item;
}

const plus=()=>{
    const ele=document.createElement('div');
    ele.classList.add("story_item");
    ele.classList.add('plus');
    
    const img=document.createElement('img');
    img.src=`https://th.bing.com/th/id/R.67256754656a0f19564dcd39e226e860?rik=rIUSFcrtqFsqag&pid=ImgRaw&r=0`;
    img.alt = "Create new article";
    
    const overlay = document.createElement('div');
    overlay.style.cssText = `
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        background: rgba(0, 113, 227, 0.9);
        border-radius: 20px;
        opacity: 0;
        transition: opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        font-size: 3rem;
    `;
    overlay.textContent = '➕';
    
    ele.appendChild(img);
    ele.appendChild(overlay);
    
    ele.style.position = 'relative';
    
    ele.onmouseover = () => {
        overlay.style.opacity = '1';
        ele.style.transform = 'translateY(-12px)';
    };
    
    ele.onmouseout = () => {
        overlay.style.opacity = '0';
        ele.style.transform = 'translateY(0)';
    };
    
    ele.onclick=()=>{
        ele.style.animation = 'soft-pop 0.3s ease-out';
        setTimeout(() => {
            window.location.href="add.html";
        }, 150);
    }
    
    return ele;
}

// Initialize
load_stories();
