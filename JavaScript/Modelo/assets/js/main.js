const form = document.querySelector('.form');
const resultado = document.querySelector('.resultado');
form.addEventListener('submit', enviar);

function enviar(evento) {
    const peso = form.querySelector('#peso');
    const altura = form.querySelector('#altura');
    evento.preventDefault();
    const valorPeso = Number(peso.value);
    const valorAltura = Number(altura.value);
    const naoVazio = valorPeso && valorAltura;
    const IMC = valorPeso / (valorAltura * valorAltura);
    if (naoVazio == '') {
        alert('Preencha todos os campos');
        return;
    } else if (isNaN(naoVazio)) {
        alert('Digite somente números!!');
        return;
    }
    conferir();
    function conferir() {
        const nivel = ['Abaixo do peso','Peso normal','Sobrepeso','Obesidade grau 1',
        'Obesidade grau 2','Obesidade grau 3'];
        let ponteiro = -1;
        if(IMC <18.5) ponteiro = 0;
        else if(IMC <24.9) ponteiro = 1;
        else if(IMC <29.9) ponteiro = 2;
        else if(IMC <34.9) ponteiro = 3;
        else if(IMC <39.9) ponteiro = 4;
        else if(IMC >40) ponteiro = 5;
        avaliacao.innerHTML = `
    <p>IMC = ${IMC + ' (' + nivel[ponteiro] + ').'}</p>
     `
    }
}