const messages = [
    "Você é incrível!",
    "Continue seguindo seus sonhos!",
    "Cada dia é uma nova oportunidade!",
    "Você tem o poder de mudar o mundo!",
    "Nunca desista!",
    "Acredite em si mesmo!",
    "Você pode fazer qualquer coisa!",
    "O sucesso está ao seu alcance!",
    "Hoje é um ótimo dia para ser feliz!",
    "Você é mais forte do que pensa!"
];

document.getElementById('newMessageButton').addEventListener('click', () => {
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    document.getElementById('message').textContent = randomMessage;
});