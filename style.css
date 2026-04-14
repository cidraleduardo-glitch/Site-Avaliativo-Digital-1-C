/* --- VARIÁVEIS E TOKENS DE DESIGN --- */
:root {
    --primary: #6b2d91; /* Roxo Joestar */
    --secondary: #d4af37; /* Dourado */
    --bg-color: #0f0f0f;
    --text-color: #ffffff;
    --surface: #1e1e1e;
    --radius: 12px;
    --gap: 1.5rem;
    --transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    --font-size-base: 16px;
}

/* --- MODO ALTO CONTRASTE --- */
body.high-contrast {
    --primary: #ffff00;
    --secondary: #ffffff;
    --bg-color: #000000;
    --text-color: #ffffff;
    --surface: #000000;
    border: 2px solid #fff;
}

/* --- RESET & BASE --- */
* { margin: 0; padding: 0; box-sizing: border-box; }

body {
    font-family: 'Segoe UI', system-ui, sans-serif;
    background-color: var(--bg-color);
    color: var(--text-color);
    font-size: var(--font-size-base);
    line-height: 1.6;
    overflow-x: hidden;
}

/* --- LAYOUT (GRID & FLEX) --- */
header nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 5%;
    background: rgba(0,0,0,0.8);
    position: sticky;
    top: 0;
    z-index: 100;
}

.grid-layout {
    display: grid;
    gap: var(--gap);
    padding: 2rem 5%;
    /* Altere aqui o número de colunas para Desktop */
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
}

section { padding: 4rem 5%; }

/* --- COMPONENTES --- */
.card {
    background: var(--surface);
    padding: 1.5rem;
    border-radius: var(--radius);
    border-bottom: 4px solid var(--primary);
    transition: var(--transition);
}

.card:hover { transform: translateY(-10px); }

/* Acordeão D4C */
.accordion-item {
    background: var(--surface);
    margin-bottom: 0.5rem;
    border-radius: var(--radius);
    overflow: hidden;
}

.accordion-header {
    width: 100%;
    padding: 1rem;
    background: var(--primary);
    color: white;
    border: none;
    text-align: left;
    cursor: pointer;
    font-weight: bold;
}

.accordion-content {
    max-height: 0;
    padding: 0 1rem;
    transition: var(--transition);
    background: var(--surface);
}

.accordion-content.active {
    max-height: 200px;
    padding: 1rem;
}

/* Carrossel */
.carousel { position: relative; overflow: hidden; width: 100%; }
.carousel-track { display: flex; transition: transform 0.5s ease-in-out; }
.carousel-item { min-width: 100%; padding: 2rem; text-align: center; }

/* --- ANIMAÇÕES (SCROLL REVEAL) --- */
.reveal {
    opacity: 0;
    transform: translateY(30px);
    transition: all 0.8s ease-out;
}

.reveal.visible {
    opacity: 1;
    transform: translateY(0);
}
