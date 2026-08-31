const menuBtn=document.querySelector('.menu-btn');
const navLinks=document.querySelector('.nav-links');
if(menuBtn&&navLinks){menuBtn.addEventListener('click',()=>navLinks.classList.toggle('open'));navLinks.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>navLinks.classList.remove('open')))}

document.querySelectorAll('[data-lightbox]').forEach(el=>{
  el.addEventListener('click',e=>{
    e.preventDefault();
    const src=el.getAttribute('href')||el.querySelector('img')?.src;
    if(!src)return;
    let box=document.querySelector('.lightbox');
    if(!box){box=document.createElement('div');box.className='lightbox';box.innerHTML='<button class="lightbox-close" aria-label="Close image">×</button><img alt="Expanded project image">';document.body.appendChild(box);box.querySelector('.lightbox-close').addEventListener('click',()=>box.classList.remove('open'));box.addEventListener('click',evt=>{if(evt.target===box)box.classList.remove('open')});document.addEventListener('keydown',evt=>{if(evt.key==='Escape')box.classList.remove('open')})}
    box.querySelector('img').src=src;box.classList.add('open');
  })
});

document.querySelectorAll('[data-year]').forEach(el=>el.textContent=new Date().getFullYear());
