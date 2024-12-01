const translations = {
    "lt": {
        "gallery-category-1": "Grafinis Dizainas",
        "gallery-category-2": "Svetainės",
        "gallery-category-3": "Interjero ir eksterjero dizainai",
        "home-nav": "Pagrindinis",
        "skills-nav": "Įgūdžiai",
        "services-nav": "Paslaugos",
        "gallery-nav": "Galerija",
        "contacts-nav": "Kontaktai",
        "page-title": "Galerija"
    },
    "en": {
        "gallery-category-1": "Graphic Design",
        "gallery-category-2": "Websites",
        "gallery-category-3": "Interior and Exterior Designs",
        "home-nav": "Home",
        "skills-nav": "Skills",
        "services-nav": "Services",
        "gallery-nav": "Gallery",
        "contacts-nav": "Contact",
        "page-title": "Gallery"
    },
    "es": {
        "gallery-category-1": "Diseño Gráfico",
        "gallery-category-2": "Sitios Web",
        "gallery-category-3": "Diseños de Interiores y Exteriores",
        "home-nav": "Inicio",
        "skills-nav": "Habilidades",
        "services-nav": "Servicios",
        "gallery-nav": "Galería",
        "contacts-nav": "Contacto",
        "page-title": "Galería"
    }
};

function changeLanguage(language) {
    const translation = translations[language];
    if (!translation) {
        console.error("Translation for the selected language not found!");
        return;
    }

    for (const key in translation) {
        const element = document.getElementById(key);
        if (element) {
            element.textContent = translation[key];
        }
    }

    document.querySelectorAll('.gallery-category').forEach((category, index) => {
        const categoryKey = `gallery-category-${index + 1}`;
        if (translation[categoryKey]) {
            category.querySelector('h2').textContent = translation[categoryKey];
        }
    });

    document.title = translation["page-title"];
    document.documentElement.lang = language;
}

document.addEventListener("DOMContentLoaded", () => {
    const preferredLanguage = localStorage.getItem("preferredLanguage") || "en";
    changeLanguage(preferredLanguage);
});

function saveLanguagePreference(language) {
    localStorage.setItem("preferredLanguage", language);
    changeLanguage(language);
}

document.querySelectorAll('.flag-icon').forEach(img => {
    img.addEventListener('click', () => {
        const selectedLang = img.getAttribute('data-lang');
        saveLanguagePreference(selectedLang);
    });
});
