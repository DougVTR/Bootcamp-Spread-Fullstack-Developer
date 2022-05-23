function meuEscopo() {
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');
    const pessoas = [];
    function recebeEventoForm (evento){
        evento.preventDefault();
        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');

        pessoas.push({
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
        });
        let i = pessoas.length;
        console.log(pessoas);
        resultado.innerHTML += `
        <h3>Pessoa ${i}</h3>
        <p class="resultP">Nome: ${pessoas[i-1].nome}</p>
        <p class="resultP">Sobrenome: ${pessoas[i-1].sobrenome}</p>
        <p class="resultP">Peso: ${pessoas[i-1].peso}</p>
        <p class="resultP">Altura: ${pessoas[i-1].altura}</p>`
    }  
    form.addEventListener('submit', recebeEventoForm);
}
meuEscopo();

