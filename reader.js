// Get story data from localStorage
const story_toLoad=JSON.parse(localStorage.getItem("reading"));

if(!story_toLoad) {
    window.location.href="index.html";
}

// Smooth reveal animations
const coverimg=document.querySelector(".cover img");
coverimg.src=story_toLoad.img;
coverimg.alt=story_toLoad.title;

const title=document.querySelector(".title");
title.textContent=story_toLoad.title;

const description=document.querySelector(".description");
description.textContent=story_toLoad.description;

const storycontent=document.querySelector('.story-content');
storycontent.textContent=story_toLoad.content;

// Add back button with smooth animation
const backButton = document.createElement('button');
backButton.textContent = '← Back';
backButton.style.cssText = `
    position: fixed;
    top: 1.5rem;
    left: 1.5rem;
    padding: 0.75rem 1.5rem;
    background: rgba(255, 255, 255, 0.7);
    backdrop-filter: blur(20px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 12px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    z-index: 50;
    font-size: 0.95rem;
    color: #0071E3;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
    animation: slideInLeft 0.6s ease-out;
`;

backButton.onmouseover = () => {
    backButton.style.background = 'rgba(255, 255, 255, 0.9)';
    backButton.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.12)';
    backButton.style.transform = 'translateY(-2px)';
};

backButton.onmouseout = () => {
    backButton.style.background = 'rgba(255, 255, 255, 0.7)';
    backButton.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.08)';
    backButton.style.transform = 'translateY(0)';
};

backButton.onclick = () => {
    backButton.style.animation = 'fadeInUp 0.3s ease-out reverse';
    setTimeout(() => {
        window.history.back();
    }, 150);
};

document.body.appendChild(backButton);

// Add scroll progress indicator
const progressBar = document.createElement('div');
progressBar.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    height: 3px;
    background: linear-gradient(90deg, #0071E3, #0077ED);
    z-index: 100;
    animation: slideInRight 0.8s ease-out;
`;
document.body.appendChild(progressBar);

window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    progressBar.style.width = scrollPercent + '%';
});
