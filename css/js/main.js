
)
// YEAR FOOTER
document.getElementById("year").textContent = new Date().getFullYear();

// DARK MODE
const btn = document.getElementById("darkModeToggle");

btn.addEventListener("click", () => {
document.body.classList.toggle("dark");
localStorage.setItem("dark", document.body.classList.contains("dark"));
});

if(localStorage.getItem("dark") === "true"){
document.body.classList.add("dark");
}

// NAVBAR SCROLL
window.addEventListener("scroll", () => {
document.querySelector(".navbar").classList.toggle("scrolled", window.scrollY > 50);
});

// COUNTERS
const counters = document.querySelectorAll(".counter");

const observer = new IntersectionObserver(entries => {
entries.forEach(entry => {
if(entry.isIntersecting){
const el = entry.target;
let count = 0;
const target = +el.dataset.target;

const interval = setInterval(() => {
count++;
el.textContent = count;
if(count >= target) clearInterval(interval);
}, 1);
}
});
});

counters.forEach(c => observer.observe(c));