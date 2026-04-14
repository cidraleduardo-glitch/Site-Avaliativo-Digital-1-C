// DADOS DO SITE
const partsData = [
    { title: "Stardust Crusaders", desc: "A jornada de Jotaro Kujo." },
    { title: "Diamond is Unbreakable", desc: "Mistérios em Morioh." },
    { title: "Steel Ball Run", desc: "A corrida épica pelo corpo sagrado." }
];

const d4cAbilities = [
    { name: "Salto Dimensional", detail: "D4C permite que Valentine viaje entre dimensões paralelas ao ser prensado entre dois objetos." },
    { name: "Paradoxo de Proximidade", detail: "Se duas versões da mesma pessoa (exceto Valentine) se tocarem, elas se aniquilam." },
    { name: "Troca de Corpo", detail: "Valentine pode transferir o D4C para uma versão de si mesmo de outro mundo se estiver ferido." }
];

// INICIALIZAÇÃO
document.addEventListener('DOMContentLoaded', () => {
    initParts();
    initAccordion();
    initCarousel();
    initScrollReveal();
});

// RENDERIZAR CARDS DE ARCOS
function initParts() {
    const grid = document.getElementById('parts-grid');
    grid.innerHTML = partsData.map(p => `
        <div class="card">
            <h3>${p.title}</h3>
            <p>${p.desc}</p>
        </div>
    `).join('');
}

// RENDERIZAR E CONTROLAR ACORDEÃO
function initAccordion() {
    const container = document.getElementById('d4c-accordion');
    container.innerHTML = d4cAbilities.map((a, i) => `
        <div class="acc-item">
            <button class="acc-header" onclick="toggleAcc(${i})">${a.name}</button>
            <div id="acc-${i}" class="acc-content"><p>${a.detail}</p></div>
        </div>
    `).join('');
}

window.toggleAcc = (index) => {
    const content = document.getElementById(`acc-${index}`);
    content.classList.toggle('open');
};

// RENDERIZAR E CONTROLAR CARROSSEL
let currentSlide = 0;
function initCarousel() {
    const track = document.getElementById('carousel-track');
    track.innerHTML = d4cAbilities.map(a => `
        <div class="slide">
            <h3>${a.name}</h3>
            <p>Habilidade Especial do Stand</p>
        </div>
    `).join('');

    document.getElementById('nextBtn').addEventListener('click', () => moveSlide(1));
    document.getElementById('prevBtn').addEventListener('click', () => moveSlide(-1));
}

function moveSlide(step) {
    const track = document.getElementById('carousel-track');
    const total = d4cAbilities.length;
    currentSlide = (currentSlide + step + total) % total;
    track.style.transform = `translateX(-${currentSlide * 100}%)`;
}

// ACESSIBILIDADE
let baseSize = 16;
window.changeFontSize = (type) => {
    baseSize = type === 'increase' ? baseSize + 2 : baseSize - 2;
    document.documentElement.style.setProperty('--font-size', baseSize + 'px');
};

window.toggleContrast = () => {
    document.body.classList.toggle('high-contrast');
};

// SCROLL REVEAL
function initScrollReveal() {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(e => {
            if(e.isIntersecting) e.target.classList.add('visible');
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}
