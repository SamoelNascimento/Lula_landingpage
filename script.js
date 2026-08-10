// Preloader
window.addEventListener('load', () => {
  const preloader = document.getElementById('preloader');
  if (preloader) {
    // Add a slight delay for effect
    setTimeout(() => {
      preloader.classList.add('is-hidden');
    }, 500); // 500ms delay so the user can see the pulse animation
  }
});

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

// Intersection Observer for scroll animations
const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.15
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-animated');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

document.querySelectorAll('.animate').forEach(el => {
  observer.observe(el);
});
