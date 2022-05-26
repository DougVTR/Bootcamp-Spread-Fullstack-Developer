const paragrafos = document.querySelector('.paragrafos');
const ps = paragrafos.querySelectorAll('p');

const estilosBody = getComputedStyle(document.body);
const backgroudColorBody = estilosBody.backgroundColor;

for(i of ps){
i.style.backgroundColor = backgroudColorBody;
i.style.color = 'white';
}