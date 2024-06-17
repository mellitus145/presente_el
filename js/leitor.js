const pages = [
    `<h2>Você é Incrivel!</h2> <br> Você mesma sabe como a ansiedade é o medo do "futuro", o medo de algo que nem temos o poder de adivinhar. Temos o poder de mudar no hoje, temos o poder de mudar este presente que você lê agora. Você conseguiu vencer o IFAM, conseguiu se formar e mudou muito do que você era no passado, querendo ser amiga de todos, ajudando e se metendo em muitas coisas.
    <br>
    
    
    O passado remete muito ao presente e ao futuro, você própria sabe disso. A ansiedade vem com o medo desse futuro. Você própria está indo bem. Está criando um excelente futuro, viajando, ajudando as pessoas... Mas não quer que ninguém ao menos lhe veja triste, como sempre colocando um sorriso no rosto ou recomeçando fazendo uns cortes no cabelo. Saiba que não é preciso disso necessariamente, tenha em mente que você já está seguindo um ótimo caminho.
    
    
    <br>
    Você se banca de forte, banca de figurona... Você sempre faz de tudo, mas não percebe isso. Você tem vergonha de tentar fazer as coisas? Virou algo inalcançável? Nada é impossível!
    
    
    <br>
    Temer o medo, temer o que pode acontecer, temer o futuro, temer o desconhecido... É isso que nos impede de tentar as coisas, de temer o pior.`,
    `... <br> Você conseguiu viver até aqui, conseguiu aguentar de tudo, sempre mantendo a cabeça para cima, nunca abaixando ela. Quando chorava logo fazia de tudo para não continuar, quando chorava ficava toda vermelha e isso era fofo.
    <br>
    Quando tinha crises, nunca dizia para ninguem, quando ia pro hospital sempre era na calada, você se importa muito em ninguem se preocupar com você, você teme ser chamada de "peso morto", você é muito mais incrivel do que pensa.
    <br>
    Não vou escrever um...
    <br>
    <h3>TUTORIAL DE COMO PASSAR A ANSIEDADE TUTORIAL ATUALIZADO</h3>
    <img src="https://i.pinimg.com/originals/53/8c/4a/538c4ace664bbd9c88cb9ad077c30d7e.jpg" width="90px" height="90px">
    <br>
    Pelo contrario, você não precisa que eu faça isso, você é muito inteligente, esperta, alegre... <h2>VOCÊ É INCRIVEL!</h2>`,
    `O amanhã será mais incrivel do que hoje! Pode ter a certeza, seja dia, ou noite, chuva ou sol. Vamos construir o futuro, somos os protagonista da propria vida.
    <br>
    <h2>Não tenha medo.</h2>
    <br>
    <h2>Você não está sozinha, você não está jogada de lado, você tem a força necessaria para se manter em pé. Continuando lutando, sem desitir.</h2>
    <br>
    <h3>Tudo é dificil, essa dificuldade faz parte do processo, a dor faz parte do processo.</h3>
    <br>
    Enquanto você ler isso, você está compensando o tempo que perdeu olhando para trás! Você pode muito começar falando sobre o amanhã. Você pode dizer qualquer coisa, se vai fazer um café no estilo de rico amanhã ou vai comer uma tapioca com um queijo. Pode ser besta isso, mas não importa o quão besta seja...
    <h2>Você pode falar sobre isso porque você tem um amanhã.</h2>
    <img src="https://i.pinimg.com/originals/08/40/b7/0840b74d0da562db4ac05caf42d77437.jpg" width="90px" height="90px">`
];

let currentPage = 0;

function showPage(page) {
    document.getElementById('page').innerHTML = pages[page];
}

function prevPage() {
    if (currentPage > 0) {
        currentPage--;
        showPage(currentPage);
    }
}

function nextPage() {
    if (currentPage < pages.length - 1) {
        currentPage++;
        showPage(currentPage);
    }
}

function toggleMenu() {
    const menuOverlay = document.getElementById('menuOverlay');
    menuOverlay.style.display = menuOverlay.style.display === 'flex' ? 'none' : 'flex';
}

function menuAction(buttonNumber) {
    alert(`Button ${buttonNumber} clicked!`);
}

function togglePlayPause() {
    const audioPlayer = document.getElementById('audioPlayer');
    const playButton = document.getElementById('playButton');
    const pauseButton = document.getElementById('pauseButton');

    if (audioPlayer.paused) {
        audioPlayer.play();
        playButton.style.display = 'none';
        pauseButton.style.display = 'inline';
    } else {
        audioPlayer.pause();
        playButton.style.display = 'inline';
        pauseButton.style.display = 'none';
    }
}

function setVolume(value) {
    const audioPlayer = document.getElementById('audioPlayer');
    audioPlayer.volume = value;
}

// Show the first page initially
showPage(currentPage);