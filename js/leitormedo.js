const pages = [
    `O medo...
    <br>
    Um sentimento tão ruim e tão bom, nós temos medo de muitas coisas, sejam besteiras ou coisas até maiores...
    <br>
    Porém, como citado na pagina "Ansiedade", você tem um futuro pra chamar de seu, você tem forças para continuar seguindo, você tem a força para jogar para cima todas aquelas hesitações, para proteger aquilo que você se importa. 
    <br>
    Você pode até pensar que não tem a capacidade de fazer tal feito, ou coisa, mas tudo aprendemos, tudo aprendemos tentando, ter esperança na sua capacidade, ter esperança em você mesma. Você é muito maior do que pensa em sua cabecinha. 
    <br>
    <h3>"Você se acha "Inferior", "Que não tem vocação", "Que não tem forças para aquilo", "Que aquilo não é para você". </h3>
    <br>
    Porque o medo de não conseguir nada? Seria isso uma falta de virtude, ou simplesmente preguiça? Tudo tem seu motivo;
    <img src="https://i.pinimg.com/originals/d7/5f/32/d75f32a644d13807f3b3a4d564516c9b.jpg" width="90px" height="90px">
    
    `,
    `Mesmo que pense que não tem forças... Você acha que isso é verdade? Você realmente acredita nisso? Você acredita que não tem forças para fazer algo?
    <br>
    Pense só: todos esses anos, você não desistiu do seu caminho, lutando como se isso dependesse da sua vida, lutando com todas as suas forças. Já pensou que estivesse lutando em vão? Mesmo sabendo que está indo bem, você não está só sonhando.
    <br>
    Todos nós temos um pensamento de que "Eu não tenho forças, mas quero tudo. Eu não tenho conhecimento, mas tudo que eu faço é sonhar. Não há nada que eu possa fazer, mas luto em vão." Você talvez pense assim, que está lutando em vão, mas você sabe que não é verdade.
    <br>
    Aquela nota 10 que você pegou em algo em que realmente se esforçou, ou aquela apresentação que você realmente precisava para fechar uma nota, ou simplesmente aguentar uma viagem turbulenta para um lugar que você gostaria de ir... Tudo isso não são recompensas valiosas? Não posso negar que também há compensações desiguais...
    <br>
    O medo de não conseguir nada é para aqueles que já desistiram antes de tentar qualquer coisa, antes de saber o que o nosso mundo lhes espera. 
    <h2>Temos como criar o nosso futuro, escrevendo-o, desejando-o e, claro, sonhando, sonhando... </h2>
     <br>
     Sem os sonhos, não há motivos para colocarmos em prática algo.`,
    `<h2>É fácil desistir, mas isso não combina com você.</h2>
    <img src="https://i.pinimg.com/originals/d0/bb/e7/d0bbe72a63f9ec40c9f4ed63fb9f9e56.jpg" width="90px" height="90px">
    <br>
    Por mais que esteja sendo esmagada pelas preocupações, você tem que erguer a cabeça e seguir em frente. Não importa a altura da parede, você tem que escalá-la. Tudo é possivel, nada é impossivel, levante a cabeça. Não finja que existe defeitos e fraquezas, existem. 
    <br>
    Mas, não necessariamente é preciso usar elas como motivos para não seguir em frente;
    <br>
    Use eles como forma de levantar a cabeça, sabendo das suas fraquezas, usando elas para seguir em frente.
    <br>
    <h2>VOCÊ VAI CONSEGUIR!</br>
    `
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