document.addEventListener("DOMContentLoaded", function() {
    const skillsSection = document.getElementById('Skills');
    const skills = document.querySelectorAll('.skill');

    const options = {
        root: null,
        threshold: 0.1
    };

    const callback = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                skills.forEach((skill, index) => {
                    setTimeout(() => {
                        skill.classList.add('visible');
                    }, index * 200);
                });
            }
        });
    };

    const observer = new IntersectionObserver(callback, options);
    observer.observe(skillsSection);
});

let menuIcon = document.querySelector('#menu_icon');
let navbar = document.querySelector('.navbar');
let header = document.querySelector('header');

// Toggle the menu for small screens
menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
};

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
            });
            document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
        }
    });

    // Toggle sticky header on scroll
    header.classList.toggle('sticky', window.scrollY > 100);

    // Close the navbar when scrolling
    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');
};

// ✅ Ensure Home section is shown after refresh
window.onload = function () {
    setTimeout(() => {
        window.scrollTo(0, 0); // Scrolls to the Home section
    }, 0);
};

let resume_btn = document.getElementById('btn');
resume_btn.addEventListener('click', () => {
    const resumePath = 'DhavalSiddhpuraResume.pdf';

    const link = document.createElement('a');
    link.href = resumePath;
    link.download = 'DhavalSiddhpuraResume.pdf'; // Set the name you want user to see

    link.click();
    link.remove();
});

// ✅ NEW: Contact form submit using AJAX + FormSubmit
document.getElementById('contact-form').addEventListener('submit', async function(e) {
    e.preventDefault();

    if (!validateForm()) {
        return;
    }

    const form = e.target;
    const formData = new FormData(form);

    try {
        const response = await fetch('https://formsubmit.co/saidhaval22@gmail.com', {
            method: 'POST',
            body: formData
        });

        if (response.ok) {
            alert('Thank you for contacting us! We will get back to you soon.');
            form.reset();
        } else {
            alert('Oops! Something went wrong. Please try again.');
        }
    } catch (error) {
        alert('Error! Please check your connection and try again.');
    }
});

// ✅ Keep validateForm()
function validateForm() {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !message) {
        alert('Please fill in all fields');
        return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address');
        return false;
    }

    return true;
}

document.addEventListener("DOMContentLoaded", function () {
    const typed = new Typed('.multiple_text', {
        strings: ['Backend Developer', 'Frontend Developer', 'App Developer'],
        typeSpeed: 80,
        backSpeed: 80,
        backDelay: 1000,
        loop: true
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const sr = ScrollReveal({
        distance: '40px',
        duration: 1200,
        delay: 300,
        reset: false
    });

    sr.reveal('.Home, .header', { origin: 'top', delay: 300 });
    sr.reveal('.About, .skills', { origin: 'left', delay: 400 });
    sr.reveal('.projects', { origin: 'left', delay: 500 });
    sr.reveal('.contact form', { origin: 'bottom', delay: 500 });
    sr.reveal('.Education', { origin: 'left', delay: 500 });
});
