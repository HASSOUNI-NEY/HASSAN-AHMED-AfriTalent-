



// =====================
// DARK MODE
// =====================

const themeToggle = document.getElementById("themeToggle");

if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
}

if (themeToggle) {

    themeToggle.addEventListener("click", () => {

        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {

            localStorage.setItem("theme", "dark");

        } else {

            localStorage.setItem("theme", "light");

        }

    });

}

// =====================
// NAVBAR SCROLL
// =====================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

});

// =====================
// BOUTON RETOUR EN HAUT
// =====================

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        backToTop.style.display = "block";

    } else {

        backToTop.style.display = "none";

    }

});

backToTop.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});
// =========================
// COMPTEURS ANIMÉS
// =========================

const counters = document.querySelectorAll(".counter");

const counterObserver = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            const counter = entry.target;

            const target = +counter.dataset.target;

            let count = 0;

            const updateCounter = () => {

                const increment = target / 100;

                if (count < target) {

                    count += increment;

                    counter.innerText = Math.floor(count);

                    requestAnimationFrame(updateCounter);

                } else {

                    counter.innerText = target;
                }
            };

            updateCounter();

            counterObserver.unobserve(counter);
        }

    });

}, {
    threshold: 0.5
});

counters.forEach(counter => {
    counterObserver.observe(counter);
});


// =========================
// FADE IN AU SCROLL
// =========================

const sections = document.querySelectorAll(".fade-section");

const sectionObserver = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {
    threshold: 0.2
});

sections.forEach(section => {
    sectionObserver.observe(section);
});
// =================================
// FILTRAGE DES FREELANCES
// =================================

const filterButtons = document.querySelectorAll(".filter-btn");
const cards = document.querySelectorAll(".freelance-card");

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        const filter = button.dataset.filter;

        cards.forEach(card => {

            if (
                filter === "all" ||
                card.dataset.category === filter
            ) {

                card.style.display = "block";

            } else {

                card.style.display = "none";
            }

        });

    });

});


// =================================
// VALIDATION FORMULAIRE CONTACT
// =================================

const form = document.getElementById("contactForm");

if (form) {

form.addEventListener("submit", function(e) {

    e.preventDefault();

    let valid = true;

    document
        .querySelectorAll(".text-danger")
        .forEach(el => el.textContent = "");

    const nom = document.getElementById("nom").value.trim();
    const prenom = document.getElementById("prenom").value.trim();
    const email = document.getElementById("email").value.trim();
    const sujet = document.getElementById("sujet").value;
    const message = document.getElementById("message").value.trim();

    if (nom === "") {
        document.getElementById("nomError").textContent =
        "Nom obligatoire";
        valid = false;
    }

    if (prenom === "") {
        document.getElementById("prenomError").textContent =
        "Prénom obligatoire";
        valid = false;
    }

    const emailRegex =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {

        document.getElementById("emailError").textContent =
        "Email invalide";

        valid = false;
    }

    if (sujet === "") {

        document.getElementById("sujetError").textContent =
        "Choisissez un sujet";

        valid = false;
    }

    if (message.length < 20) {

        document.getElementById("messageError").textContent =
        "Le message doit contenir au moins 20 caractères";

        valid = false;
    }

    if (valid) {

        document
            .getElementById("successMessage")
            .classList.remove("d-none");

        form.reset();
    }

});

}