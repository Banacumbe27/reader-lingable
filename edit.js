const story_data=JSON.parse(localStorage.getItem('reading'));

const submit=document.querySelector(".submit");
const title=document.querySelector(".title");
title.value=story_data.title;
const description=document.querySelector(".description");
description.value=story_data.description;
const content=document.querySelector(".content");
content.value=story_data.content;
const img=document.querySelector("img");
const url=document.querySelector(".url")
url.value=story_data.img;
updateImg();

function wordCount(){
    submit.value=`EDIT (${content.value.length}/2000)`
}
function updateImg(){
    img.src=url.value;
}

function randomImg(){
    let randomsrc;
    fetch("https://random.imagecdn.app/v1/image?width=300&height=300").then(res=>{
        url.value=res.url;
        img.src=res.url;
        console.log(res);
    });
}

async function editPost(e){
    e.preventDefault();
    e.target.style.pointerEvents="none";
    await fetch(backend_url,{method:"post",
        headers:{"Content-Type":"application/json"},
        mode:"no-cors",
        body:JSON.stringify({
            id:story_data.id,
            title:title.value,
            description:description.value,
            content:content.value,
            req:"edit",
            url:url.value
        })
    })
    window.alert("Story successfully uploaded to the database!");
    window.location.href="admin.html";
}


wordCount();
