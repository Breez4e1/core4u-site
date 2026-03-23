// Core4U static site shared behavior
const menuButton = document.getElementById('menuBtn');

if (menuButton) {
  menuButton.addEventListener('click', () => {
    const willOpen = !document.body.classList.contains('nav-open');
    document.body.classList.toggle('nav-open', willOpen);
    menuButton.setAttribute('aria-expanded', String(willOpen));
  });
}

const yearNode = document.getElementById('year');
if (yearNode) {
  yearNode.textContent = String(new Date().getFullYear());
}

// Smooth page transition for local page-to-page navigation.
document.querySelectorAll('a[href]').forEach(link => {
  const href = link.getAttribute('href');
  if (!href || href.startsWith('#') || href.startsWith('mailto:') || href.startsWith('http')) {
    return;
  }

  link.addEventListener('click', event => {
    event.preventDefault();
    document.body.classList.add('fade-out');

    window.setTimeout(() => {
      window.location.href = href;
    }, 350);
  });
});
