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
    
    // Show loading skeleton
    showLoadingSkeletons();
    
    stories=await import_stories(false);
    if(stories){
        stories.forEach((story, index)=>{
            setTimeout(() => {
                story_menu.appendChild(storyItem(story));
            }, index * 50);
        });
    }
    
    stories=await import_stories(true);
    story_menu.innerHTML="";
    stories.forEach((story, index)=>{
        setTimeout(() => {
            story_menu.appendChild(storyItem(story));
        }, index * 50);
    });
}

function showLoadingSkeletons() {
    story_menu.innerHTML = "";
    for(let i = 0; i < 6; i++) {
        const skeleton = document.createElement('div');
        skeleton.classList.add('story_item', 'loading');
        story_menu.appendChild(skeleton);
    }
}

function storyItem(story){
    const item=document.createElement('div');
    item.classList.add('story_item');
    
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

    // Add smooth interaction
    item.addEventListener('click', ()=>{
        // Add ripple effect
        const ripple = document.createElement('span');
        ripple.style.position = 'absolute';
        ripple.style.borderRadius = '50%';
        ripple.style.background = 'rgba(0, 113, 227, 0.3)';
        ripple.style.width = '20px';
        ripple.style.height = '20px';
        ripple.style.animation = 'pulse 0.6s ease-out';
        
        localStorage.setItem("reading",JSON.stringify(story));
        
        // Smooth transition
        item.style.animation = 'soft-pop 0.3s ease-out';
        setTimeout(() => {
            window.location.href="reader.html";
        }, 150);
    });
    
    // Add hover sound feedback (optional - visual feedback)
    item.addEventListener('mouseenter', () => {
        item.style.animation = 'none';
    });
    
    return item;
}

// Add scroll animation for items entering viewport
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.6s ease-out forwards';
        }
    });
}, { threshold: 0.1 });

document.addEventListener('DOMContentLoaded', () => {
    load_stories();
    
    setTimeout(() => {
        document.querySelectorAll('.story_item').forEach(item => {
            observer.observe(item);
        });
    }, 500);
});

