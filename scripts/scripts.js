    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'G-NJKZ0BXJPS');


    document.addEventListener('DOMContentLoaded', () => {
        const navToggle = document.querySelector('.nav-toggle');
        const navList = document.querySelector('.nav-list');
    
        navToggle.addEventListener('click', () => {
            navToggle.classList.toggle('active');
            navList.classList.toggle('active');
        });
    
        // Optional: Close menu when clicking outside or on a nav link
        document.addEventListener('click', (event) => {
            const isClickInsideNavbar = event.target.closest('.navbar');
            if (!isClickInsideNavbar) {
                navToggle.classList.remove('active');
                navList.classList.remove('active');
            }
        });
    
        navList.addEventListener('click', (event) => {
            if (event.target.tagName === 'A') {
                navToggle.classList.remove('active');
                navList.classList.remove('active');
            }
        });
    });
