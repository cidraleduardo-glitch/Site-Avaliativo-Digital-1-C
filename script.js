// --- GESTÃO DE DADOS (RENDERIZAÇÃO DINÂMICA) ---
const cursos = [
    { titulo: "UX Design", desc: "Crie interfaces centradas no humano." },
    { titulo: "Front-end Pro", desc: "HTML, CSS e JS com acessibilidade." },
    { titulo: "Back-end Node", desc: "Escalabilidade e performance." },
    { titulo: "Mobile Nativo", desc: "Apps iOS e Android." }
];

const faqs = [
    { q: "Os cursos têm certificado?", a: "Sim, todos os cursos emitem certificado acessível." },
    { q: "Como funciona o suporte?", a: "Temos mentoria via Discord com acessibilidade garantida." }
];

// --- RENDERIZADORES ---
function renderContent() {
    const track = document.getElementById('carousel-track');
    const faqContainer = document.getElementById('faq-container');

    track.innerHTML = cursos.map(c => `
        <article class="card">
            <h3>${c.titulo}</h3>
            <p>${c.desc}</p>
        </article>
    `).join('');

    faqContainer.innerHTML = faqs.map((f, i) => `
        <div class="faq-item">
            <button class="faq-trigger" aria-expanded="false" onclick="toggleAccordion(this)">
                ${f.q}
            </button>
            <div class="faq-content" style="display:none; padding: 1rem;">
                <p>${f.a}</p>
            </div>
        </div>
    `).join('');
}

// --- ACESSIBILIDADE: FONTE E CONTRASTE ---
let currentFontSize = 100;
function changeFontSize(action) {
    currentFontSize += (action === 'increase' ? 10 : -10);
    document.documentElement.style.fontSize = `${currentFontSize}%`;
}

function toggleContrast() {
    document.body.classList.toggle('high-contrast');
}

// --- COMPONENTES: ACORDEÃO E CARROSSEL ---
function toggleAccordion(btn) {
    const content = btn.nextElementSibling;
    const isExpanded = btn.getAttribute('aria-expanded') === 'true';
    
    btn.setAttribute('aria-expanded', !isExpanded);
    content.style.display = isExpanded ? 'none' : 'block';
}

// Scroll Reveal Simplificado
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('active');
    });
});

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
    renderContent();
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
});
