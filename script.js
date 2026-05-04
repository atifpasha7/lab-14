// ============================================
//  PORTFOLIO WEBSITE – script.js
// ============================================

// ── Mobile nav toggle ──
const menuToggle = document.getElementById('menuToggle');
const navLinks   = document.querySelector('.nav-links');

if (menuToggle) {
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });
}

// ── Contact form mock submit ──
const sendBtn     = document.getElementById('sendBtn');
const formSuccess = document.getElementById('formSuccess');

if (sendBtn) {
  sendBtn.addEventListener('click', () => {
    const name    = document.getElementById('nameInput').value.trim();
    const email   = document.getElementById('emailInput').value.trim();
    const message = document.getElementById('messageInput').value.trim();

    if (!name || !email || !message) {
      alert('Please fill in all fields before sending.');
      return;
    }

    sendBtn.textContent = 'Sending…';
    sendBtn.disabled = true;

    setTimeout(() => {
      formSuccess.style.display = 'block';
      sendBtn.textContent = 'Send Message';
      sendBtn.disabled = false;
      document.getElementById('nameInput').value    = '';
      document.getElementById('emailInput').value   = '';
      document.getElementById('messageInput').value = '';
    }, 1200);
  });
}

// ── Animate skill bars when in view (About page) ──
const barFills = document.querySelectorAll('.bar-fill');
if (barFills.length) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.width = entry.target.getAttribute('style').match(/width:\s*(\d+%)/)[1];
      }
    });
  }, { threshold: 0.3 });

  barFills.forEach(bar => {
    const finalWidth = bar.style.width;
    bar.style.width = '0';
    bar.setAttribute('data-width', finalWidth);
    observer.observe(bar);
  });
}

// ── Scroll fade-in for cards ──
const cards = document.querySelectorAll('.skill-card, .project-card');
const cardObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.15 });

cards.forEach(card => {
  card.style.opacity   = '0';
  card.style.transform = 'translateY(30px)';
  card.style.transition = 'opacity .5s ease, transform .5s ease';
  cardObserver.observe(card);
});

console.log('Portfolio site loaded ✔');
