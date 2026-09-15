const dialog=document.querySelector('#project-dialog');
function renderProjects(items,target){
const grid=document.querySelector(target);
items.forEach((project,index)=>{
 const button=document.createElement('button');button.className='project';
 button.innerHTML=`<div class="project-visual"><img src="${project.image}" alt="${project.alt}" loading="lazy"><span aria-hidden="true">↗</span></div><h3>${project.title}</h3><p>${project.category} · ${project.year}${project.company ? " · " + project.company : ""}</p>`;
 button.addEventListener('click',()=>{document.querySelector('#detail-image').src=project.image;document.querySelector('#detail-image').alt=project.alt;document.querySelector('#detail-title').textContent=project.title;document.querySelector('#detail-role').textContent=project.category+' · '+project.year+(project.company?' · '+project.company:'');document.querySelector('#detail-note').textContent=project.note;document.querySelector('#detail-source').href=project.source;const gallery=document.querySelector('#detail-gallery');gallery.replaceChildren();(project.gallery||[]).forEach((src,i)=>{const img=document.createElement('img');img.src=src;img.alt=project.title+' — production still '+(i+2);img.loading='lazy';gallery.appendChild(img);});dialog.showModal();dialog.scrollTop=0;});grid.appendChild(button);
});
}
renderProjects(projects,'#projects');
renderProjects(animationProjects,'#animation-projects');
document.querySelector('#close-dialog').addEventListener('click',()=>dialog.close());
dialog.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close();}});
document.querySelector('#year').textContent=new Date().getFullYear();

// Silent background montage. Honour reduced motion and data-saving preferences.
const heroVideo=document.querySelector('#hero-video');
const motionButton=document.querySelector('#hero-motion');
const reducedMotion=window.matchMedia('(prefers-reduced-motion: reduce)');
let motionPaused=false;
function startHero(){
 if(reducedMotion.matches || navigator.connection?.saveData)return;
 heroVideo.muted=true;
 if(!heroVideo.getAttribute('src'))heroVideo.src=heroVideo.dataset.src;
 motionButton.hidden=false;
 heroVideo.play().then(()=>{motionButton.textContent='Pause motion Ⅱ';motionButton.setAttribute('aria-label','Pause background video');}).catch(()=>{motionButton.textContent='Play motion ▶';motionButton.setAttribute('aria-label','Play background video');});
}
motionButton.addEventListener('click',()=>{
 if(heroVideo.paused){motionPaused=false;startHero();}
 else{motionPaused=true;heroVideo.pause();motionButton.textContent='Play motion ▶';motionButton.setAttribute('aria-label','Play background video');}
});
reducedMotion.addEventListener('change',()=>{if(reducedMotion.matches){heroVideo.pause();motionButton.hidden=true;}else if(!motionPaused)startHero();});
new IntersectionObserver(entries=>{if(!entries[0].isIntersecting)heroVideo.pause();else if(!motionPaused)startHero();},{threshold:0.05}).observe(heroVideo);
document.addEventListener('visibilitychange',()=>{if(document.hidden)heroVideo.pause();else if(!motionPaused&&heroVideo.getBoundingClientRect().bottom>0)startHero();});