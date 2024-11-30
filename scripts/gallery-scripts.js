const translations = {
    "lt": {
        "gallery-category-1": "Grafinis Dizainas",
        "gallery-category-2": "Svetainės",
        "gallery-category-3": "Interjero ir eksterjero dizainai",
        "home-nav": "Pagrindinis",
        "skills-nav": "Įgūdžiai",
        "services-nav": "Paslaugos",
        "gallery-nav": "Galerija",
        "contacts-nav": "Kontaktai"
    },
    "en": {
        "gallery-category-1": "Graphic Design",
        "gallery-category-2": "Websites",
        "gallery-category-3": "Interior and Exterior Designs",
        "home-nav": "Home",
        "skills-nav": "Skills",
        "services-nav": "Services",
        "gallery-nav": "Gallery",
        "contacts-nav": "Contact"
    },
    "es": {
        "gallery-category-1": "Diseño Gráfico",
        "gallery-category-2": "Sitios Web",
        "gallery-category-3": "Diseños de Interiores y Exteriores",
        "home-nav": "Inicio",
        "skills-nav": "Habilidades",
        "services-nav": "Servicios",
        "gallery-nav": "Galería",
        "contacts-nav": "Contacto"
    }
};

function changeLanguage(language) {
    document.querySelector('.h1').textContent = translations[language]["header-title"];
    document.querySelectorAll('.gallery-category')[0].querySelector('h2').textContent = translations[language]["gallery-category-1"];
    document.querySelectorAll('.gallery-category')[1].querySelector('h2').textContent = translations[language]["gallery-category-2"];
    document.querySelectorAll('.gallery-category')[2].querySelector('h2').textContent = translations[language]["gallery-category-3"];

    document.getElementById('home-nav').textContent = translations[language]["home-nav"];
    document.getElementById('skills-nav').textContent = translations[language]["skills-nav"];
    document.getElementById('services-nav').textContent = translations[language]["services-nav"];
    document.getElementById('gallery-nav').textContent = translations[language]["gallery-nav"];
    document.getElementById('contacts-nav').textContent = translations[language]["contacts-nav"];
    
    document.documentElement.lang = language;

    localStorage.setItem("preferredLanguage", language);
}

document.addEventListener("DOMContentLoaded", () => {
    const preferredLanguage = localStorage.getItem("preferredLanguage") || "en";
    changeLanguage(preferredLanguage);
});

document.querySelectorAll('.flag-icon').forEach(img => {
    img.addEventListener('click', () => {
        const selectedLang = img.getAttribute('data-lang');
        changeLanguage(selectedLang);
    });
});
