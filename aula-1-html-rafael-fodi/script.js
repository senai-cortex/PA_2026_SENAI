const particlesContainer = document.getElementById('particles');
for (let i = 0; i < 30; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.left = Math.random() * 100 + '%';
    particle.style.animationDelay = Math.random() * 10 + 's';
    particle.style.animationDuration = (Math.random() * 5 + 8) + 's';
    particlesContainer.appendChild(particle);
}

const messages = [
    { text: "OI!", emoji: "🎉" },
    { text: "legal!", emoji: "😄" },
    { text: "incrivel!", emoji: "🌟" },
    { text: "SHOW!", emoji: "🎭" },
    { text: "MUITO BOM!", emoji: "👍" },
    { text: "FICA!", emoji: "💫" },
    { text: "TOP!", emoji: "✨" },
    { text: "MARAVILHOSO!", emoji: "❤️" },
    { text: "VAMOS!", emoji: "🚀" },
    { text: "PERFEITO!", emoji: "🔥" }
];

const titles = ["Olá!", "E ai!", "Oi pessoal!", "Bem-vindo!", "Oi!", "Hello!", "Ola"];
const subtitles = [
    "Clique na imagem!",
    "Interaja com a gente!",
    "Clique para ver a magica!",
    "Vem clicar!",
    "Clique e se divirta!",
    "Aguardando seu clique!",
    "Clique aqui!"
];

let clickCount = 0;
const monkeContainer = document.getElementById('monkeContainer');
const monke = document.getElementById('monke');
const message = document.getElementById('message');
const messageText = document.getElementById('messageText');
const messageEmoji = document.getElementById('messageEmoji');
const title = document.getElementById('title');
const subtitle = document.getElementById('subtitle');
const hint = document.querySelector('.click-hint');

monkeContainer.addEventListener('click', (e) => {
    clickCount++;

    monkeContainer.classList.add('clicked');
    setTimeout(() => monkeContainer.classList.remove('clicked'), 500);

    const randomMsg = messages[Math.floor(Math.random() * messages.length)];
    messageText.textContent = randomMsg.text;
    messageEmoji.textContent = randomMsg.emoji;
    message.classList.add('show');
    
    setTimeout(() => message.classList.remove('show'), 1500);

    for (let i = 0; i < 12; i++) {
        createConfetti(e.clientX, e.clientY);
    }

    for (let i = 0; i < 8; i++) {
        createClone(e.clientX, e.clientY);
    }

    if (clickCount % 5 === 0) {
        title.textContent = titles[Math.floor(Math.random() * titles.length)];
        subtitle.textContent = subtitles[Math.floor(Math.random() * subtitles.length)];
    }

    if (clickCount === 1) {
        hint.style.display = 'none';
    }
});

function createConfetti(x, y) {
    const confetti = document.createElement('div');
    confetti.className = 'confetti';
    confetti.style.left = x + 'px';
    confetti.style.top = y + 'px';
    confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 80%, 50%)`;
    document.body.appendChild(confetti);
    setTimeout(() => confetti.remove(), 3000);
}

function createClone(x, y) {
    const clone = monke.cloneNode(true);
    clone.className = 'clone';
    clone.style.left = x + 'px';
    clone.style.top = y + 'px';
    const angle = Math.random() * Math.PI * 2;
    const distance = 100 + Math.random() * 200;
    clone.style.setProperty('--tx', Math.cos(angle) * distance + 'px');
    clone.style.setProperty('--ty', Math.sin(angle) * distance + 'px');
    document.body.appendChild(clone);
    setTimeout(() => clone.remove(), 1000);
}
