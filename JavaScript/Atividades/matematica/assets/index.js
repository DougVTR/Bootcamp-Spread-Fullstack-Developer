const primeiroNumero = Number(prompt('Digite um número'));
const primeiro = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');
primeiro.innerHTML = primeiroNumero;
texto.innerHTML = `
<p>Raiz quadrada: ${Math.round(primeiroNumero ** 0.5)}</p>
<p> ${primeiroNumero} é inteiro: ${Number.isInteger(primeiroNumero)}</p>
<p>É NaN: ${Number.isNaN(primeiroNumero)}</p>
<p>Arredondado pra baixo: ${Math.floor(primeiroNumero)}</p>
<p>Arredondado para cima: ${Math.ceil(primeiroNumero)}</p>
<p>Com duas cadas decimais: ${primeiroNumero.toFixed(2)}</p> `;