//Exercício 1

    console.log(`Meu nome é "Douglas Vitor de Azevedo. Estou aprendendo JavaScript às`, 8, `da manhã.`);

//Exercício 2

    const nome = "Douglas";
    const sobrenome = "Vitor de Azevedo";
    const idade = 23;
    const peso = 67;
    const altura = 1.74;
    let imc = peso / (altura * altura);
    let anoNascimento = 2022 - idade;

//Alternativa 1

    console.log("Alternativa 1");
    console.log(nome, "tem ", idade, "anos, pesa", peso, "kg, tem", altura, "de altura e seu IMC é de", imc);
    console.log(nome, "nasceu em", anoNascimento + ".");

//Alternativa 2

    console.log("alternativa 2");
    console.log(`${nome} tem ${idade} anos pesa ${peso} kg tem ${altura} de altura e seu IMC é de ${imc}`);
    console.log(`nome nasceu em ${anoNascimento}.`);
