function criaHoraSegundos(segundos) {
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'UTC'
    });
}

const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');
let segundos = 0;
let timer;

function iniciaRelogio() {
    timer = setInterval(function () {
        segundos++;
        relogio.innerHTML = criaHoraSegundos(segundos);
    }, 1000)
}

// iniciar.addEventListener('click', function (evento) {
//     clearInterval(timer);
//     relogio.style.color = 'black';
//     iniciaRelogio();
// });

// pausar.addEventListener('click', function (evento) {
//     clearInterval(timer);
//     relogio.style.color = 'red';
// });

// zerar.addEventListener('click', function (evento) {
//     clearInterval(timer);
//     relogio.innerHTML = '00:00:00';
//     segundos = 0;
//     relogio.style.color = 'black';
// });

//Opção mais curta

document.addEventListener('click', function (e) {
    const el = e.target;

    if (el.classList.contains('zerar')) {
        clearInterval(timer);
        relogio.innerHTML = '00:00:00';
        segundos = 0;
        relogio.style.color = 'black';
    }
    if (el.classList.contains('pausar')) {
        clearInterval(timer);
        relogio.style.color = 'red';
    }
    if (el.classList.contains('iniciar')) {
        clearInterval(timer);
        relogio.style.color = 'black';
        iniciaRelogio();
    }
})