// Core4U Static Site (single page)
const btn = document.getElementById('menuBtn');
const nav = document.querySelector('.nav');
if (btn && nav) {
  btn.addEventListener('click', () => {
    const open = nav.style.display === 'flex';
    nav.style.display = open ? 'none' : 'flex';
    nav.style.flexDirection = 'column';
    nav.style.position = 'absolute';
    nav.style.right = '16px';
    nav.style.top = '64px';
    nav.style.padding = '12px';
    nav.style.background = 'rgba(5,10,20,.95)';
    nav.style.border = '1px solid rgba(255,255,255,.10)';
    nav.style.borderRadius = '14px';
    nav.style.gap = '10px';
    btn.setAttribute('aria-expanded', String(!open));
  });
}
const y = document.getElementById('year');
if (y) y.textContent = new Date().getFullYear();
