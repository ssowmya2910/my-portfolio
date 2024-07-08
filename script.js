document.addEventListener("DOMContentLoaded", function() {
    // Smooth scrolling effect for navigation links
    const navLinks = document.querySelectorAll('.navbar a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            document.querySelector(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Text animation for home section
    const textAnimation = document.querySelector('.text-animation span');
    const words = ['Web Developer', 'DSA Enthusiast', 'Tech Enthusiast'];
    let wordIndex = 0;
    let letterIndex = 0;

    function type() {
        if (letterIndex < words[wordIndex].length) {
            textAnimation.textContent += words[wordIndex].charAt(letterIndex);
            letterIndex++;
            setTimeout(type, 100);
        } else {
            setTimeout(erase, 2000);
        }
    }

    function erase() {
        if (letterIndex > 0) {
            textAnimation.textContent = words[wordIndex].substring(0, letterIndex - 1);
            letterIndex--;
            setTimeout(erase, 50);
        } else {
            wordIndex = (wordIndex + 1) % words.length;
            setTimeout(type, 100);
        }
    }

    setTimeout(type, 1500);

    // Linking social icons
    const linkedinIcon = document.querySelector('.bx-linkedin-square');
    const githubIcon = document.querySelector('.bx-github');
    const gmailIcon = document.querySelector('.bx-gmail');
    const resumeLink = document.querySelector('.btn[href="#resume"]');

    linkedinIcon.addEventListener('click', function() {
        window.open('http://www.linkedin.com/in/sowmya-s-343436258', '_blank');
    });

    githubIcon.addEventListener('click', function() {
        window.open('https://github.com/ssowmya2910', '_blank'); 
    });

    gmailIcon.addEventListener('click', function() {
        window.open('mailto:ssowmya2910@gmail.com'); 
    });

    // Resume link
    resumeLink.addEventListener('click', function() {
        window.open('https://drive.google.com/file/d/1qBN9JarGpI668lL0VJF77TmjbYBdLY0J/view?usp=drive_link', '_blank'); 
    });

    
    const form = document.querySelector('form');
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Form submitted!');
        form.reset(); 
    });
});

