const translations = {
    "lt": {
        "home-nav": "Pagrindinis",
        "skills-nav": "Įgūdžiai",
        "services-nav": "Paslaugos",
        "contacts-nav": "Kontaktai",
        "page-title": "Paslaugos",
        "services-title": "Mano teikiamos paslaugos",
        "services-description": "Siūlau platų IT ir dizaino paslaugų spektrą, pritaikytą individualiems jūsų poreikiams. Kiekvienas projektas yra unikalus, todėl visada stengiuosi rasti geriausią sprendimą.",
        "web-development-title": "Svetainių kūrimas",
        "web-development-description": "Kuriu modernias, funkcionalias ir patrauklias svetaines",
        "html": "HTML",
        "css": "CSS",
        "javascript": "JavaScript",
        "optimization": "Puslapio optimizavimas",
        "data-analysis-title": "Duomenų analizė",
        "data-analysis-description": "Analizuoju duomenis ir padedu priimti duomenimis pagrįstus sprendimus",
        "sql": "SQL duomenų bazės",
        "visualization": "Duomenų vizualizacija",
        "statistics": "Statistinė analizė",
        "insights": "Veiklos įžvalgos",
        "design-services-title": "Dizaino paslaugos",
        "design-services-description": "Kuriu unikalų ir funkcionalų dizainą, siekiant išsiskirti ir pasiekti aukščiausius rezultatus.",
        "interior-design": "Interjero dizainas",
        "3d-modeling": "3D modeliavimas",
        "graphic-design": "Grafinis dizainas",
        "ui-ux-design": "UI/UX dizainas",
        "why-choose-title": "Kodėl verta rinktis mane?",
        "experience-title": "Patirtis",
        "experience-description": "Turiu patirties įvairiuose IT ir dizaino projektuose",
        "timeliness-title": "Terminų laikymasis",
        "timeliness-description": "Projektai atliekami laiku ir kokybiškai",
        "communication-title": "Komunikacija",
        "communication-description": "Nuolatinis bendravimas projekto eigoje",
        "flexibility-title": "Lankstumas",
        "flexibility-description": "Prisitaikau prie individualių poreikių"
    },
    "en": {
        "home-nav": "Home",
        "skills-nav": "Skills",
        "services-nav": "Services",
        "contacts-nav": "Contacts",
        "page-title": "Services",
        "services-title": "My Services",
        "services-description": "I offer a wide range of IT and design services tailored to your individual needs. Every project is unique, and I always strive to find the best solution.",
        "web-development-title": "Website Development",
        "web-development-description": "I create modern, functional, and attractive websites",
        "html": "HTML",
        "css": "CSS",
        "javascript": "JavaScript",
        "optimization": "Page Optimization",
        "data-analysis-title": "Data Analysis",
        "data-analysis-description": "I analyze data and help make data-driven decisions",
        "sql": "SQL Databases",
        "visualization": "Data Visualization",
        "statistics": "Statistical Analysis",
        "insights": "Business Insights",
        "design-services-title": "Design Services",
        "design-services-description": "I create unique and functional designs to stand out and achieve outstanding results.",
        "interior-design": "Interior Design",
        "3d-modeling": "3D Modeling",
        "graphic-design": "Graphic Design",
        "ui-ux-design": "UI/UX Design",
        "why-choose-title": "Why Choose Me?",
        "experience-title": "Experience",
        "experience-description": "I have experience in various IT and design projects",
        "timeliness-title": "Timeliness",
        "timeliness-description": "Projects are completed on time and with quality",
        "communication-title": "Communication",
        "communication-description": "Constant communication throughout the project",
        "flexibility-title": "Flexibility",
        "flexibility-description": "I adapt to individual needs"
    },
    "es": {
        "home-nav": "Inicio",
        "skills-nav": "Habilidades",
        "services-nav": "Servicios",
        "contacts-nav": "Contactos",
        "page-title": "Servicios",
        "services-title": "Mis Servicios",
        "services-description": "Ofrezco una amplia gama de servicios de TI y diseño adaptados a sus necesidades individuales. Cada proyecto es único, y siempre me esfuerzo por encontrar la mejor solución.",
        "web-development-title": "Desarrollo de sitios web",
        "web-development-description": "Creo sitios web modernos, funcionales y atractivos",
        "html": "HTML",
        "css": "CSS",
        "javascript": "JavaScript",
        "optimization": "Optimización de página",
        "data-analysis-title": "Análisis de datos",
        "data-analysis-description": "Analizo datos y ayudo a tomar decisiones basadas en datos",
        "sql": "Bases de datos SQL",
        "visualization": "Visualización de datos",
        "statistics": "Análisis estadístico",
        "insights": "Perspectivas empresariales",
        "design-services-title": "Servicios de diseño",
        "design-services-description": "Creo diseños únicos y funcionales para destacar y lograr resultados excepcionales.",
        "interior-design": "Diseño de interiores",
        "3d-modeling": "Modelado 3D",
        "graphic-design": "Diseño gráfico",
        "ui-ux-design": "Diseño UI/UX",
        "why-choose-title": "¿Por qué elegirme?",
        "experience-title": "Experiencia",
        "experience-description": "Tengo experiencia en diversos proyectos de TI y diseño",
        "timeliness-title": "Cumplimiento de plazos",
        "timeliness-description": "Los proyectos se completan a tiempo y con calidad",
        "communication-title": "Comunicación",
        "communication-description": "Comunicación constante durante el proyecto",
        "flexibility-title": "Flexibilidad",
        "flexibility-description": "Me adapto a las necesidades individuales"
    }
};

// Funkcija kalbai pakeisti ir tekstams atnaujinti
function changeLanguage(language) {
    const translation = translations[language];
    if (!translation) {
        console.error("Translation for the selected language not found!");
        return;
    }

    // Atnaujinti visus elementus pagal vertimus
    for (const key in translation) {
        const element = document.getElementById(key);
        if (element) {
            element.textContent = translation[key];
        }
    }

    // Atnaujinti dokumento pavadinimą
    document.title = translation["page-title"];

    // Atnaujinti HTML lang atributą
    document.documentElement.lang = language;
}

// Automatiškai užkrauti pasirinktą kalbą arba numatytąją (lietuvių kalbą)
document.addEventListener("DOMContentLoaded", () => {
    // Patikrinti išsaugotą kalbą, jei nėra, naudoti "lt"
    const preferredLanguage = localStorage.getItem("preferredLanguage") || "lt";
    changeLanguage(preferredLanguage);
});

// Funkcija, kuri išsaugo kalbos pasirinkimą
function saveLanguagePreference(language) {
    // Išsaugome pasirinkimą localStorage
    localStorage.setItem("preferredLanguage", language);
    
    // Keičiam kalbą
    changeLanguage(language);
}

document.addEventListener("DOMContentLoaded", () => {
    const preferredLanguage = localStorage.getItem("preferredLanguage") || "lt";
    changeLanguage(preferredLanguage);
});
