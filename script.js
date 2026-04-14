// GESTÃO DE DADOS
const stands = [
    {
        nome: "Dirty Deeds Done Dirt Cheap (D4C)",
        usuario: "Funny Valentine",
        habilidade: "Viagem entre dimensões paralelas.",
        detalhes: "Permite que diferentes dimensões coexistam no mesmo lugar. É o Stand principal de Steel Ball Run."
    },
    {
        nome: "Smooth Operators",
        usuario: "Jodio Joestar",
        habilidade: "Deslocamento de objetos.",
        detalhes: "Um grupo de pequenos Stands que podem 'deslizar' e mover coisas como rostos, placas ou chaves sem danificá-los."
    },
    {
        nome: "Soft & Wet",
        usuario: "Josuke Higashikata (Gappy)",
        habilidade: "Roubo de propriedades via bolhas.",
        detalhes: "Pode remover temporariamente algo de um objeto (visão, som, fricção) usando bolhas de sabão."
    }
];

// RENDERIZAÇÃO DINÂMICA
const track = document.getElementById('carousel-track');
const accordionContainer = document.getElementById('accordion-container');

stands.forEach((stand, index) => {
    // Renderizar Carrossel
    track.innerHTML += `
        <article class="stand-card">
            <h3>${stand.nome}</h3>
            <p>Usuário: ${stand.usuario}</p>
        </article>
    `;

    // Renderizar Acordeão
    accordionContainer.innerHTML += `
        <div class="accordion-item">
            <button class="accordion-header" aria-expanded="false" onclick="toggleAccordion(${index})">
                ${stand.nome} <span>+</span>
            </button>
            <div class="accordion-content" id="content-${index}">
                <p style="padding: 1.5rem;">${stand.detalhes} <br><strong>Habilidade:</strong> ${stand.habilidade}</p>
            </div>
        </div>
    `;
});

// LÓGICA DO CARROSSEL
let currentIndex = 0;
document.getElementById('nextBtn').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % stands.length;
    track.style.transform = `translateX(-${currentIndex * 100}%)`;
});

document.getElementById('prevBtn').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + stands.length) % stands.length;
    track.style.transform = `translateX(-${currentIndex * 100}%)`;
});

// LÓGICA DO ACORDEÃO
function toggleAccordion(index) {
    const content = document.getElementById(`content-${index}`);
    const isOpen = content.style.maxHeight !== '0px' && content.style.maxHeight !== '';
    
    // Fecha todos antes de abrir (UX)
    document.querySelectorAll('.accordion-content').forEach(el => el.style.maxHeight = '0');
    
    content.style.maxHeight = isOpen ? '0' : content.scrollHeight + 'px';
}

// ACESSIBILIDADE: CONTROLE DE FONTE
let fontSize = 16;
document.getElementById('increase-font').addEventListener('click', () => {
    fontSize += 2;
    document.documentElement.style.setProperty('--font-base', fontSize + 'px');
});
document.getElementById('decrease-font').addEventListener('click', () => {
    fontSize -= 2;
    document.documentElement.style.setProperty('--font-base', fontSize + 'px');
});

// ALTO CONTRASTE
document.getElementById('toggle-contrast').addEventListener('click', () => {
    document.body.classList.toggle('high-contrast');
});

// SCROLL REVEAL (Observer API)
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('active');
    });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
