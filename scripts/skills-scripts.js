const translations = {
    "lt": {
        "page-title": "Įgūdžiai",
        "home-nav": "Pagrindinis",
        "skills-nav": "Įgūdžiai",
        "services-nav": "Paslaugos",
        "gallery-nav": "Galerija",
        "contacts-nav": "Kontaktai",
        "skills-title": "Mano įgūdžiai",
        "programming-title": "Programavimas",
        "networking-title": "Tinklų administravimas",
        "design-title": "Dizainas",
        "education-title": "Išsilavinimas ir kursai",
        "timeline-1-date": "2017 - 2020",
        "timeline-1-institution": "Kauno kolegija",
        "timeline-1-degree": "Kompiuterinių tinklų administravimo bakalauras",
        "timeline-2-date": "2024",
        "timeline-2-course": "Duomenų analitikos kursai",
        "timeline-2-description": "SQL ir duomenų analizės įgūdžių tobulinimas",
        "programming-list": ["SQL duomenų bazių valdymas", "HTML & CSS", "Pradedantysis JavaScript", "Pradedantysis Python", "Duomenų analitika"],
        "networking-list": ["Kompiuterinių tinklų projektavimas", "Tinklų saugumo užtikrinimas", "Serverių priežiūra", "Sistemos administravimas"],
        "design-list": ["Svetainių dizainas", "Interjero dizainas", "3D modeliavimas su SketchUp", "Grafinis dizainas"]
    },
    "en": {
        "page-title": "Skills",
        "home-nav": "Home",
        "skills-nav": "Skills",
        "services-nav": "Services",
        "gallery-nav": "Gallery",
        "contacts-nav": "Contacts",
        "skills-title": "My Skills",
        "programming-title": "Programming",
        "networking-title": "Network Administration",
        "design-title": "Design",
        "education-title": "Education and Courses",
        "timeline-1-date": "2017 - 2020",
        "timeline-1-institution": "Kaunas College",
        "timeline-1-degree": "Bachelor's Degree in Computer Network Administration",
        "timeline-2-date": "2024",
        "timeline-2-course": "Data Analytics Courses",
        "timeline-2-description": "Improvement of SQL and Data Analysis Skills",
        "programming-list": ["SQL Database Management", "HTML & CSS", "Beginner JavaScript", "Beginner Python", "Data Analytics"],
        "networking-list": ["Computer Network Design", "Network Security", "Server Maintenance", "System Administration"],
        "design-list": ["Web Design", "Interior Design", "3D Modeling with SketchUp", "Graphic Design"]
    },
    "es": {
        "page-title": "Habilidades",
        "home-nav": "Inicio",
        "skills-nav": "Habilidades",
        "services-nav": "Servicios",
        "gallery-nav": "Galería",
        "contacts-nav": "Contactos",
        "skills-title": "Mis habilidades",
        "programming-title": "Programación",
        "networking-title": "Administración de redes",
        "design-title": "Diseño",
        "education-title": "Educación y cursos",
        "timeline-1-date": "2017 - 2020",
        "timeline-1-institution": "Kaunas College",
        "timeline-1-degree": "Licenciatura en Administración de Redes",
        "timeline-2-date": "2024",
        "timeline-2-course": "Cursos de Análisis de Datos",
        "timeline-2-description": "Mejora de habilidades en SQL y análisis de datos",
        "programming-list": ["Gestión de bases de datos SQL", "HTML y CSS", "JavaScript principiante", "Python principiante", "Análisis de datos"],
        "networking-list": ["Diseño de redes", "Seguridad de redes", "Mantenimiento de servidores", "Administración de sistemas"],
        "design-list": ["Diseño web", "Diseño de interiores", "Modelado 3D con SketchUp", "Diseño gráfico"]
    }
};


function changeLanguage(language) {
    document.title = translations[language]["page-title"];
    document.getElementById("home-nav").textContent = translations[language]["home-nav"];
    document.getElementById("skills-nav").textContent = translations[language]["skills-nav"];
    document.getElementById("services-nav").textContent = translations[language]["services-nav"];
    document.getElementById("contacts-nav").textContent = translations[language]["contacts-nav"];
    document.getElementById("gallery-nav").textContent = translations[language]["gallery-nav"];
    document.getElementById("skills-title").textContent = translations[language]["skills-title"];
    document.getElementById("programming-title").textContent = translations[language]["programming-title"];
    document.getElementById("networking-title").textContent = translations[language]["networking-title"];
    document.getElementById("design-title").textContent = translations[language]["design-title"];
    document.getElementById("education-title").textContent = translations[language]["education-title"];
    document.getElementById("timeline-1-date").textContent = translations[language]["timeline-1-date"];
    document.getElementById("timeline-1-institution").textContent = translations[language]["timeline-1-institution"];
    document.getElementById("timeline-1-degree").textContent = translations[language]["timeline-1-degree"];
    document.getElementById("timeline-2-date").textContent = translations[language]["timeline-2-date"];
    document.getElementById("timeline-2-course").textContent = translations[language]["timeline-2-course"];
    document.getElementById("timeline-2-description").textContent = translations[language]["timeline-2-description"];

    updateList("programming-list", translations[language]["programming-list"]);
    updateList("networking-list", translations[language]["networking-list"]);
    updateList("design-list", translations[language]["design-list"]);

    document.documentElement.lang = language;
    localStorage.setItem("preferredLanguage", language);
}


function updateList(listId, translationsArray) {
    const list = document.getElementById(listId);
    list.innerHTML = ""; 

    translationsArray.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item;
        list.appendChild(li);
    });
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
