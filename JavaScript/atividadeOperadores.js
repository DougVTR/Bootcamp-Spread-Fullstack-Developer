function soma(a, b){
    let resultado = a + b;
    let maior10 = '';
    let menor20 = '';
    let igual = '';
    (a===b) ? (igual = ' são iguais.') : ( igual = ' não são iguais.');
    (a>10) ? (maior10 = ' é maior que 10') : (maior10 =' não é maior que 10');
    (a<20) ? (menor20 = ' e é menor que 20.') : (menor20 =' e não é menor que 20.');
    console.log('Os números '+a +' e '+ b + igual+ ' Sua soma é '+resultado+","+" que"+ maior10 + menor20);
    }
soma(2,5);