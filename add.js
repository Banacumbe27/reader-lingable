const submit=document.querySelector(".submit");
const title=document.querySelector(".title");
const description=document.querySelector(".description");
const content=document.querySelector(".content");
const img=document.querySelector("img");
const url=document.querySelector(".url")

function wordCount(){
    submit.value=`SUBMIT (${content.value.length}/2000)`
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

async function addPost(e){
    e.preventDefault();
    e.target.style.pointerEvents="none";
    await fetch(backend_url,{method:"post",
        headers:{"Content-Type":"application/json"},
        mode:"no-cors",
        body:JSON.stringify({
            title:title.value,
            description:description.value,
            content:content.value,
            req:"post",
            url:url.value
        })
    })
    window.alert("Story successfully uploaded to the database!");
    window.location.href="admin.html";
}
