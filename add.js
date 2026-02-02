const submit=document.querySelector(".submit");
const title=document.querySelector(".title");
const description=document.querySelector(".description");
const content=document.querySelector(".content");
const img=document.querySelector("img");
const url=document.querySelector(".url")

// Add smooth animations to inputs
document.querySelectorAll('input, textarea').forEach((element, index) => {
    element.style.animation = `slideInLeft 0.6s ease-out ${index * 0.1}s backwards`;
});

function wordCount(){
    const percentage = (content.value.length / 2000) * 100;
    submit.value=`✨ PUBLISH (${content.value.length}/2000)`;
    
    // Add smooth color change based on progress
    if(percentage < 30) {
        submit.style.background = 'linear-gradient(135deg, #0071E3, #0077ED)';
    } else if(percentage < 70) {
        submit.style.background = 'linear-gradient(135deg, #0071E3, #0077ED)';
    } else if(percentage < 100) {
        submit.style.background = 'linear-gradient(135deg, #0071E3, #0077ED)';
    } else {
        submit.style.background = 'linear-gradient(135deg, #34D399, #10B981)';
    }
}

function updateImg(){
    img.style.animation = 'none';
    setTimeout(() => {
        img.src=url.value;
        img.style.animation = 'fadeInUp 0.4s ease-out';
    }, 10);
}

function randomImg(){
    submit.disabled = true;
    submit.style.opacity = '0.6';
    
    fetch("https://random.imagecdn.app/v1/image?width=400&height=300").then(res=>{
        url.value=res.url;
        img.src=res.url;
        img.style.animation = 'soft-pop 0.4s ease-out';
        
        submit.disabled = false;
        submit.style.opacity = '1';
    }).catch(err => {
        console.error('Failed to load random image:', err);
        submit.disabled = false;
        submit.style.opacity = '1';
    });
}

async function addPost(e){
    e.preventDefault();
    
    // Validate inputs
    if(!title.value.trim() || !description.value.trim() || !content.value.trim() || !url.value.trim()) {
        alert('Please fill in all fields');
        return;
    }
    
    submit.disabled = true;
    submit.style.opacity = '0.6';
    submit.style.pointerEvents = "none";
    submit.value = '⏳ Publishing...';
    
    try {
        await fetch(backend_url, {
            method: "post",
            headers: {"Content-Type": "application/json"},
            mode: "no-cors",
            body: JSON.stringify({
                title: title.value,
                description: description.value,
                content: content.value,
                req: "post",
                url: url.value
            })
        });
        
        // Success animation
        submit.value = '✅ Published!';
        submit.style.background = 'linear-gradient(135deg, #34D399, #10B981)';
        
        setTimeout(() => {
            window.location.href = "admin.html";
        }, 1500);
    } catch(error) {
        console.error('Error publishing:', error);
        submit.disabled = false;
        submit.style.opacity = '1';
        submit.style.pointerEvents = "auto";
        submit.value = '✨ PUBLISH (0/2000)';
        alert('Error publishing the story. Please try again.');
    }
}
