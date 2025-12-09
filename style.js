// ===== Smooth Scroll for Nav Links =====
const navLinks = document.querySelectorAll('.navbar-nav a[href^="#"]');
navLinks.forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const targetId = link.getAttribute();
        if (targetId) {
            document.querySelector(targetId).scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// ===== Toggle Objective Section =====
const objective = document.querySelector('.objectiveinfo');
objective.addEventListener('click', () => {
    objective.classList.toggle('hidden'); // Make sure to add .hidden in CSS
});

// ===== Hover Animation for Social SVGs =====
const socialIcons = document.querySelectorAll('.icon-grid svg');
socialIcons.forEach(icon => {
    icon.addEventListener('mouseenter', () => icon.style.transform = 'scale(1.2)');
    icon.addEventListener('mouseleave', () => icon.style.transform = 'scale(1)');
    icon.style.transition = 'transform 0.3s ease';
    icon.style.cursor = 'pointer';
});

// ===== Scroll-triggered Animation for Articles & Sections =====
const sections = document.querySelectorAll('.main-article, .ExperienceInfo, .Eduinfo, .skills\\.info, .languageinfo, .refinfo, .certinfo');
window.addEventListener('scroll', () => {
    sections.forEach(section => {
        const top = section.getBoundingClientRect().top;
        if (top < window.innerHeight - 100) {
            section.classList.add('show'); // Add .show in CSS for fade/slide effect
        }
    });
});

// ===== Click to Copy Email =====
const emailSpan = document.querySelector('.Informationlist span:first-child');
emailSpan.addEventListener('click', () => {
    const email = emailSpan.textContent.trim();
    navigator.clipboard.writeText(email)
        .then(() => alert('Email copied to clipboard!'))
        .catch(() => alert('Failed to copy email'));
});
