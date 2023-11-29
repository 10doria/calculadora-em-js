const readline = require('readline');

// Variável de input e output

const rl = readline.createInterface({
    input: process.stdin,  //Input (Inserir)
    output: process.stdout  //Output (Saída)
});

function Calculadora(){
    rl.question('Digite uma operação matemática:', (input) => {
        const operation = input.split(' ');
        const num1 = parseFloat(operation[0]);
        const operator = operation[1];
        const num2 = parseFloat(operation [2]);

let result;

switch (operator){
    case '+':
    result = num1 + num2;
    break;
    case '-':
    result = num1 - num2;
    break;
    case '*':
    result = num1 * num2;
    break;
    case '/':
    result = num1 / num2;
    break;
    default:
    console.log('Você inseriu um operador inexistente.');
    rl.close();
    return;    

}
console.table(`O seu resultado é: ${result}`);
  Calculadora();
})
}
console.log('Olá, bem-vindo(a) á calculadora do Hugo Dória!');
Calculadora();