const inputPapel = document.querySelector('#papel');
const inputPedra = document.querySelector('#pedra');
const inputTesoura = document.querySelector('#tesoura');

let pedra = '';
let papel = '';
let tesoura = '';

inputPedra.addEventListener('click', function () {
    pedra = true;
    papel = false;
    tesoura = false;
})


inputPapel.addEventListener('click', function () {
    pedra = false;
    papel = true;
    tesoura = false;
})

inputTesoura.addEventListener('click', function () {
    pedra = false;
    papel = false;
    tesoura = true;
})

function escolhaCPU() {
    let PPT = ['pedra', 'papel', 'tesoura'];
    let cpuPPT = Math.floor(Math.random() * PPT.length);
    let randomCPU = PPT[cpuPPT];

}

function resultado() {
    if(pedra && randomCPU) {
        console.log('você venceu');
    }

}
