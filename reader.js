const story_toLoad=JSON.parse(localStorage.getItem("reading"));

const coverimg=document.querySelector(".cover img");
coverimg.src=story_toLoad.img;
const title=document.querySelector(".title");
title.textContent=story_toLoad.title;
const description=document.querySelector(".description");
description.textContent=story_toLoad.description;

const storycontent=document.querySelector('.story-content');
storycontent.textContent=story_toLoad.content;

// const
