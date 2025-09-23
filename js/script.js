// ===== Smooth scrolling for nav links =====
document.querySelectorAll('.nav-links a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// ===== Dark/Light Mode Toggle =====
const toggleBtn = document.getElementById('darkModeToggle');
toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  // Ganti icon sesuai mode
  if(document.body.classList.contains('dark')){
    toggleBtn.textContent = '☀️';
  } else {
    toggleBtn.textContent = '🌙';
  }
});

// ===== Animate Skill Bars on Scroll =====
const skillLevels = document.querySelectorAll('.skill-level');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const el = entry.target;
      const width = el.getAttribute('data-skill');
      el.style.width = width; // isi progress bar
      observer.unobserve(el); // jalankan hanya sekali
    }
  });
}, {
  threshold: 0.4 // saat 40% elemen terlihat
});

// observe setiap skill bar
skillLevels.forEach(bar => observer.observe(bar));