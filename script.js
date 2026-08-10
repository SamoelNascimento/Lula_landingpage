document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click',e=>{
    const el=document.querySelector(a.getAttribute('href'));
    if(el){e.preventDefault();el.scrollIntoView({behavior:'smooth',block:'start'});}
  });
});
const year=document.querySelector('.year');
year?.addEventListener('click',()=>alert('Filtro por ano: interface pronta para conectar aos dados.'));
document.querySelector('.newsletter form')?.addEventListener('submit',e=>{
  e.preventDefault();
  alert('Cadastro demonstrativo enviado.');
});
document.querySelector('.mobile-menu')?.addEventListener('click',()=>{
  document.querySelector('.nav').classList.toggle('nav--open');
});
