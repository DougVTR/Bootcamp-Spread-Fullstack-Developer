let varA = "A";
let varB = "B";
let varC = "C";
const varTemp = varA;
varA = varB;
varB = varC;
varC = varTemp;

console.log(varA, varB, varC);