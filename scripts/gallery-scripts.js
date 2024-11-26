const translations = {
    "lt": {
        "home-nav": "Pagrindinis",
        "skills-nav": "Įgūdžiai",
        "services-nav": "Paslaugos",
        "gallery-nav": "Galerija",
        "contacts-nav": "Kontaktai"
    },
    "en": {
        "home-nav": "Home",
        "skills-nav": "Skills",
        "services-nav": "Services",
        "gallery-nav": "Gallery",
        "contacts-nav": "Contact"
    },
    "es": {
        "home-nav": "Inicio",
        "skills-nav": "Habilidades",
        "services-nav": "Servicios",
        "gallery-nav": "Galería",
        "contacts-nav": "Contacto"
    }
};

function changeLanguage(language) {

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



