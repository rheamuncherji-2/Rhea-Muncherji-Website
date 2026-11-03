// Footer year
const yr = document.getElementById('yr');
if (yr) yr.textContent = new Date().getFullYear();

// Mobile menu
const btn = document.querySelector('.menu-btn');
const nav = document.getElementById('nav');
if (btn && nav) {
  btn.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    btn.setAttribute('aria-expanded', String(open));
  });
}

// Project filters
const filterBtns = document.querySelectorAll('.filters button');
const projects = document.querySelectorAll('.project');
filterBtns.forEach(b => b.addEventListener('click', () => {
  filterBtns.forEach(x => x.setAttribute('aria-pressed', String(x === b)));
  const f = b.dataset.filter;
  projects.forEach(p => { p.hidden = !(f === 'all' || p.dataset.area === f); });
}));

// Contact form: opens the visitor's email app (works on any static host).
// To receive messages directly instead, swap this for a Formspree/Netlify form.
const form = document.getElementById('contact-form');
if (form) {
  form.addEventListener('submit', e => {
    e.preventDefault();
    const note = document.getElementById('form-note');
    const name = form.name.value.trim(), email = form.email.value.trim(), msg = form.message.value.trim();
    if (!name || !email || !msg) { note.textContent = 'Please fill in your name, email and message.'; return; }
    const subject = encodeURIComponent('Message from ' + name + ' via your portfolio');
    const body = encodeURIComponent(msg + '\n\n' + name + '\n' + email);
    window.location.href = 'mailto:rhea.muncherji@outlook.com?subject=' + subject + '&body=' + body;
    note.textContent = 'Opening your email app. If nothing opens, write to rhea.muncherji@outlook.com.';
  });
}
