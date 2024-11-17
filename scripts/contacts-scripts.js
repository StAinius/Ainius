const translations = {
    "lt": {
        "title": "Kontaktai",
        "home-nav": "Pagrindinis",
        "skills-nav": "Įgūdžiai",
        "services-nav": "Paslaugos",
        "contacts-nav": "Kontaktai",
        "intro-title": "Susisiekime",
        "intro-text": "Turite klausimų ar norite aptarti galimą bendradarbiavimą? Susisiekite su manimi vienu iš žemiau nurodytų būdų arba užpildykite kontaktų formą.",
        "contact-cards": [
            { title: "El. Paštas", value: "stonkusainius@gmail.com" },
            { title: "Telefonas", value: "+370 695 54829" },
            { title: "Vieta", value: "Vilnius, Lietuva" }
        ],
        "form-title": "Kontaktų forma",
        "form-email-label": "Jūsų El. paštas",
        "form-message-label": "Jūsų žinutė",
        "form-submit": "Siųsti žinutę",
        "status-success": "Žinutė sėkmingai išsiųsta!",
        "status-error": "Klaida siunčiant žinutę. Bandykite dar kartą.",
        "social-links-title": "Mano socialiniai tinklai"
    },
    "en": {
        "title": "Contacts",
        "home-nav": "Home",
        "skills-nav": "Skills",
        "services-nav": "Services",
        "contacts-nav": "Contacts",
        "intro-title": "Get in Touch",
        "intro-text": "Have questions or want to discuss potential collaboration? Reach out to me through one of the methods below or fill out the contact form.",
        "contact-cards": [
            { title: "Email", value: "stonkusainius@gmail.com" },
            { title: "Phone", value: "+370 695 54829" },
            { title: "Location", value: "Vilnius, Lithuania" }
        ],
        "form-title": "Contact Form",
        "form-email-label": "Your Email",
        "form-message-label": "Your Message",
        "form-submit": "Send Message",
        "status-success": "Message successfully sent!",
        "status-error": "Error sending message. Please try again.",
        "social-links-title": "My Social Networks"
    },
    "es": {
        "title": "Contactos",
        "home-nav": "Inicio",
        "skills-nav": "Habilidades",
        "services-nav": "Servicios",
        "contacts-nav": "Contactos",
        "intro-title": "Ponte en contacto",
        "intro-text": "¿Tienes preguntas o quieres discutir una posible colaboración? Póngase en contacto conmigo a través de uno de los métodos a continuación o complete el formulario de contacto.",
        "contact-cards": [
            { title: "Correo electrónico", value: "stonkusainius@gmail.com" },
            { title: "Teléfono", value: "+370 695 54829" },
            { title: "Ubicación", value: "Vilnius, Lituania" }
        ],
        "form-title": "Formulario de contacto",
        "form-email-label": "Tu correo electrónico",
        "form-message-label": "Tu mensaje",
        "form-submit": "Enviar mensaje",
        "status-success": "¡Mensaje enviado con éxito!",
        "status-error": "Error al enviar el mensaje. Inténtalo de nuevo.",
        "social-links-title": "Mis redes sociales"
    }
};

// Funkcija kalbos keitimui
function changeLanguage(language) {
    document.title = translations[language].title;

    // Atnaujiname navigacijos tekstus pagal ID
    document.getElementById('home-nav').textContent = translations[language]["home-nav"];
    document.getElementById('skills-nav').textContent = translations[language]["skills-nav"];
    document.getElementById('services-nav').textContent = translations[language]["services-nav"];
    document.getElementById('contacts-nav').textContent = translations[language]["contacts-nav"];

    document.querySelector('.intro h1').textContent = translations[language]["intro-title"];
    document.querySelector('.intro p').textContent = translations[language]["intro-text"];

    const contactCards = document.querySelectorAll('.contact-card');
    contactCards.forEach((card, index) => {
        card.querySelector('h3').textContent = translations[language]["contact-cards"][index].title;
        card.querySelector('p, a').textContent = translations[language]["contact-cards"][index].value;
    });

    document.querySelector('.contact-form h2').textContent = translations[language]["form-title"];
    document.querySelector('label[for="email"]').textContent = translations[language]["form-email-label"];
    document.querySelector('label[for="message"]').textContent = translations[language]["form-message-label"];
    document.getElementById('submitForm').textContent = translations[language]["form-submit"];

    const statusMessage = document.getElementById('statusMessage');
    statusMessage.style.display = 'none'; // Hide status message

    document.querySelector('.social-links').setAttribute('title', translations[language]["social-links-title"]);

    document.documentElement.lang = language;
    localStorage.setItem("preferredLanguage", language);
}

document.addEventListener("DOMContentLoaded", () => {
    const preferredLanguage = localStorage.getItem("preferredLanguage") || "lt";
    changeLanguage(preferredLanguage);
});

document.querySelectorAll('.flag-icon').forEach(img => {
    img.addEventListener('click', () => {
        const selectedLang = img.getAttribute('data-lang');
        changeLanguage(selectedLang); 
    });
});
