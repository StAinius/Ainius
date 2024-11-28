const translations = {
    "lt": {
        "header-title": "AINIUS STONKUS",
        "intro-title": "Trumpai apie mane:",
        "intro-text": "Kauno kolegijoje baigiau ir įgavau kompiuterinių tinklų administravimo bakalauro laipsnį, taip pat baigiau duomenų analitikos kursus. Esu pradedantysis programuotojas, turiu SQL patirties. Mėgėjiškai užsiimu svetainių kūrimu, grafikos ir interjero dizainu, braižau 3D dizainus su \"SketchUp\" programa.",
        "download-cv": "Atsisiųsti CV",
        "home-nav": "Pagrindinis",
        "skills-nav": "Įgūdžiai",
        "services-nav": "Paslaugos",
        "gallery-nav": "Galerija",
        "contacts-nav": "Kontaktai"
    },
    "en": {
        "header-title": "AINIUS STONKUS",
        "intro-title": "About me:",
        "intro-text": "I graduated from Kaunas College with a Bachelor's degree in Computer Network Administration, and also completed courses in Data Analytics. I am a beginner programmer with experience in SQL. I have a hobby of web development, graphic and interior design, and I create 3D designs using SketchUp.",
        "download-cv": "Download CV",
        "home-nav": "Home",
        "skills-nav": "Skills",
        "services-nav": "Services",
        "gallery-nav": "Gallery",
        "contacts-nav": "Contact"
    },
    "es": {
        "header-title": "AINIUS STONKUS",
        "intro-title": "Un poco sobre mí:",
        "intro-text": "Me gradué de la Universidad de Kaunas con una licenciatura en Administración de Redes de Computadoras, y también completé cursos de Análisis de Datos. Soy un programador principiante con experiencia en SQL. Tengo el pasatiempo de desarrollar sitios web, diseño gráfico y de interiores, y creo diseños 3D usando SketchUp.",
        "download-cv": "Descargar CV",
        "home-nav": "Inicio",
        "skills-nav": "Habilidades",
        "services-nav": "Servicios",
        "gallery-nav": "Galería",
        "contacts-nav": "Contacto"
    }
};

function changeLanguage(language) {

    document.querySelector('.header-title').textContent = translations[language]["header-title"];
    document.querySelector('.intro h1').textContent = translations[language]["intro-title"];
    document.querySelector('.intro p').textContent = translations[language]["intro-text"];
    document.querySelector('.download-btn').textContent = translations[language]["download-cv"];
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





