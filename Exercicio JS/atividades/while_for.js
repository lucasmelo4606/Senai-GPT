
// EXERCICIO 01

// for (let i = 1; i <= 10; i++){
//     console.log(i)
// }


// EXERCIOCIO 02

// let numero = Number( prompt("Digite um numero"))
// for ( let i = 1; i <= 10; i++){
//     console.log(i +"x" + numero +"=" +(numero*i))
// }

// EXERCICIO 03

// let N = Number(prompt("Digite um número "));
// let soma = 0;

// for (let i=1; i<=N; i++){

//     soma= soma+i;

// }
// console.log (soma)

// EXERCICIO 04

// for(let i = 1; i<=50; i++){
//     if(i % 2 ==0 )
//         console.log(i)
// }




// EXERCICIO 05

// const numeroSecreto = Math.floor(Math.random() * 100) + 1;
// let tentativa = null;

// alert("Tente adivinhar o número que estou pensando (entre 1 e 100)!");

// while (tentativa !== numeroSecreto) {
//   const input = prompt("Digite sua tentativa:");

//   // Converte o input para número
//   tentativa = Number(input);



//   if (isNaN(tentativa)) {
//     alert("Por favor, digite um número válido.");
//   } else if (tentativa < numeroSecreto) {
//     alert("Muito baixo. Tente novamente.");
//   } else if (tentativa > numeroSecreto) {
//     alert("Muito alto. Tente novamente.");
//   } else {
//     alert("Parabéns! Você acertou o número!");
//   }
// }


// EXERCICIO 06

// let numero = Number(prompt("digite um numero:"))
// numero = numero + 1

// while(numero > 0){
//     numero = numero - 1;

//     console.log(numero)
// }

// EXERCICIO 07
 
let numero = String(prompt("digite um numero"));
let letras = numero.length
let i = 0
let soma = 0
while (i < letras){
    soma = soma + Number(numero[i]);
    i++
}
alert(soma)






