const inputPapel = document.querySelector('#papel');
const inputPedra = document.querySelector('#pedra');
const inputTesoura = document.querySelector('#tesoura');
const res = document.querySelector('#resultado');

let pedra = '';
let papel = '';
let tesoura = '';

inputPedra.addEventListener('click', function () {
    pedra = true;
    papel = false;
    tesoura = false;
    resultado();
})


inputPapel.addEventListener('click', function () {
    pedra = false;
    papel = true;
    tesoura = false;
    resultado();
})

inputTesoura.addEventListener('click', function () {
    pedra = false;
    papel = false;
    tesoura = true;
    resultado();
})

function resultado() {
    let PPT = ['pedra', 'papel', 'tesoura'];
    let cpuPPT = Math.floor(Math.random() * PPT.length);
    let randomCPU = PPT[cpuPPT];

    // Condições de Vitória
    if (randomCPU == 'pedra' && papel) {
        final.innerHTML = 'Você venceu!'
    }
    else if (randomCPU == 'papel' && tesoura) {
        final.innerHTML = 'Você venceu!'
    }
    else if (randomCPU == 'tesoura' && pedra) {
        final.innerHTML = 'Você venceu!'
    }

    // Condições de Empate
    else if (randomCPU == 'pedra' && pedra) {
        final.innerHTML = 'Empate!'
    }
    else if (randomCPU == 'papel' && papel) {
        final.innerHTML = 'Empate!'
    }
    else if (randomCPU == 'tesoura' && tesoura) {
        final.innerHTML = 'Empate!'
    }

    // Condições de Derrota
    else {
        final.innerHTML = 'Você perdeu!'
    }
}

const final = document.createElement('p');
res.appendChild(final);

