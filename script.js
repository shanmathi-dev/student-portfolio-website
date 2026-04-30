// 🔹 GO TO PROJECTS
function goToProjects() {
    document.getElementById("projects").scrollIntoView({
        behavior: "smooth"
    });
}

// 🔹 MENU TOGGLE (MOBILE)
function toggleMenu() {
    document.getElementById("navLinks").classList.toggle("active");
}
function toggleTheme() {
    document.body.classList.toggle("light-mode");
}

// 🔹 TYPING EFFECT (LOOP 🔥)
document.addEventListener("DOMContentLoaded", function () {
    const text = "👩‍💻 Frontend Developer building modern web experiences";
    let i = 0;

    function typing() {
        if (i < text.length) {
            document.getElementById("typing").innerHTML += text.charAt(i);
            i++;
            setTimeout(typing, 80);
        } else {
            setTimeout(() => {
                document.getElementById("typing").innerHTML = "";
                i = 0;
                typing();
            }, 2000);
        }
    }

    typing();
});

// 🔹 SCROLL EFFECTS (ALL IN ONE 🔥)
window.addEventListener("scroll", () => {

    // 👉 SECTION FADE-IN
    document.querySelectorAll("section").forEach(sec => {
        let position = sec.getBoundingClientRect().top;

        if (position < window.innerHeight - 100) {
            sec.classList.add("show");
        }
    });

    // 👉 NAVBAR SCROLL EFFECT
    let nav = document.querySelector("nav");
    if (window.scrollY > 50) {
        nav.classList.add("scrolled");
    } else {
        nav.classList.remove("scrolled");
    }

    // 👉 ACTIVE MENU HIGHLIGHT
    let current = "";
    let sections = document.querySelectorAll("section");

    sections.forEach(section => {
        let sectionTop = section.offsetTop;

        if (scrollY >= sectionTop - 100) {
            current = section.getAttribute("id");
        }
    });

    document.querySelectorAll(".nav-links a").forEach(link => {
        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }
    });

    // 👉 SCROLL PROGRESS BAR
    let scroll = document.documentElement.scrollTop;
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

    let progress = (scroll / height) * 100;
    document.getElementById("progressBar").style.width = progress + "%";
});

// 🔹 SMOOTH CLICK SCROLL
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});
window.addEventListener("scroll", () => {
    let scrollTop = document.documentElement.scrollTop;
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrolled = (scrollTop / height) * 100;
    document.getElementById("progressBar").style.width = scrolled + "%";
});
function toggleTheme() {
    document.body.classList.toggle("light-mode");
}
const skillSection = document.querySelector("#skills");
const skillBars = document.querySelectorAll(".progress-bar");

window.addEventListener("scroll", () => {
    const sectionTop = skillSection.getBoundingClientRect().top;

    if (sectionTop < window.innerHeight - 100) {
        skillBars[0].style.width = "90%";
        skillBars[1].style.width = "85%";
        skillBars[2].style.width = "75%";
        skillBars[3].style.width = "70%";
        skillBars[4].style.width = "65%";
    }
});

const projectCards = document.querySelectorAll(".project-card");

window.addEventListener("scroll", ()=>{
    projectCards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;

        if (cardTop < window.innerHeight - 100) {
            card.classList.add("show");
        }
    });
});

const allSections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
    allSections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;

        if (sectionTop < window.innerHeight - 100) {
            section.classList.add("show");
        }
    });
});

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
});

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

window.addEventListener("load", () => {
    document.getElementById("loader").style.display = "none";
});
function sendMessage(){
document.getElementById("successMsg").innerText="Message sent successfully";
}