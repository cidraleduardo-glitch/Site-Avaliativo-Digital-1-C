// --- GESTÃO DE DADOS (DATABASE SIMULADA) ---
const joJoParts = [
    { title: "Phantom Blood", desc: "Onde tudo começou. Jonathan vs Dio." },
    { title: "Battle Tendency", desc: "Joseph Joestar e os Homens do Pilar." },
    { title: "Stardust Crusaders", desc: "A jornada para o Egito e a introdução dos Stands." },
    { title: "Steel Ball Run", desc: "A corrida através da América. Onde surge o D4C." }
];

const d4cDetails = [
    { title: "O que é?", content: "Stand de Funny Valentine, o 23º Presidente dos EUA." },
    { title: "Poder Principal", content: "Permite que diferentes dimensões coexistam simultaneamente." },
    { title: "Love Train", content: "Uma barreira dimensional que redireciona toda a 'má sorte' (dano)." }
];

// --- RENDERIZAÇÃO DINÂMICA ---
function renderContent() {
    const partsContainer = document.getElementById('parts-container');
    partsContainer.innerHTML = joJoParts.map(part => `
        <article class="card">
            <h3>${part.title}</h3>
            <p>${part.desc}</p>
        </article>
    `).join('');

    const accordion = document.getElementById('d4c-accordion');
    accordion.innerHTML = d4cDetails.map((detail, index) => `
        <div class="accordion-item">
            <button class="accordion-header" aria-expanded="false" onclick="toggleAccordion(${index})">
                ${detail.title}
            </button>
            <div class="accordion-content" id="content-${index}">
                <p>${detail.content}</p>
            </div>
        </div>
    `).join('');
}

// --- ACESSIBILIDADE: CONTROLE DE FONTE ---
let currentFontSize = 16;
function changeFontSize(action) {
    const root = document.documentElement;
    currentFontSize = action === 'increase' ? currentFontSize + 2 : currentFontSize - 2;
    root.style.setProperty('--font-size-base', `${currentFontSize}px`);
}

function toggleContrast() {
    document.body.classList.toggle('high-contrast');
}

// --- COMPONENTES: ACORDEÃO ---
function toggleAccordion(index) {
    const contents = document.querySelectorAll('.accordion-content');
    contents[index].classList.toggle('active');
}

// --- COMPONENTES: CARROSSEL ---
let currentSlide = 0;
function moveCarousel(direction) {
    const track = document.getElementById('carousel-track');
    const slides = d4cDetails.length;
    currentSlide = (currentSlide + direction + slides) % slides;
    track.style.transform = `translateX(-${currentSlide * 100}%)`;
}

// --- ANIMAÇÃO DE SCROLL (REVEAL) ---
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('visible');
    });
}, { threshold: 0.1 });

// --- INICIALIZAÇÃO ---
document.addEventListener('DOMContentLoaded', () => {
    renderContent();
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    
    // Listeners do Carrossel
    document.getElementById('nextBtn').addEventListener('click', () => moveCarousel(1));
    document.getElementById('prevBtn').addEventListener('click', () => moveCarousel(-1));
});
