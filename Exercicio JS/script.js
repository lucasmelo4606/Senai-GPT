// EXERCICIO 01

const exercicio01= () =>{

  let idade = prompt(" digite sua idade");
  
  
  if (idade >=18){
    alert("Você é maior de idade")
    
  }else{
    alert ("você é menor de idade ")
  }
  
  adicionarLog();
}

//   EXERCICIO 02


const exercicio02 = () =>{


  let number = prompt ("digite um numero")
  
  if( number >=0){
      alert( " seu numero é positivio ")  } else{
  
          alert( "seu numero é negativo")
      }


}

// EXERCICIO 03
const exercicio03 = () =>{

let nota = prompt("digite sua nota ")

if (nota >= 60){
    alert("aprovado")
}else{
    alert("reprovado")
}

}

// EXERCICIO 04

const exercicio04 = () =>{

   let numeros = prompt("digite um numero ")

  if (numeros > 0) {
  
    alert("positivo")
  
  
  
  } else { 
  
      if ( numeros == 0){
          alert("zero")
      }
  
  
      else{
  
          alert(" numero negativo") 
      }
  
  
  
  }
}

// exercicios 05

const exercicio05 = () =>{

let idades = prompt("digite sua idade")

if (idades > 0 && idades <= 12) {

    alert("voce é criaca")
} else {
    if
       (idades > 12 && idades <= 17){

        alert(" voce é adolescente")
    }

        else { alert(" voce é maior") }


}
}

// EXERCICIO 06

const exercicio06 = () =>{


  let divisao = Number( prompt(" digite um numero"))
  
  if( divisao % 2 == 0){
      alert("numero par")
  }
  else{
      alert( "numero impar")
  }

}

// EXERCICIO 07

const exercicio07 = () =>{


  let a = Number(prompt("digite um numero"))
  
  let operacao = prompt("digite a operação ")
  
  let b = Number(prompt("digite outro numero"))
  
  
  if (operacao == "+") {
      alert(a + b)
  
  }
  else {
      if (operacao === "-") {
          alert(a - b)
      }else {
          if (operacao === "/") {
              alert(a / b)
          } else {
              if (operacao === "*") {
                  alert(a * b)
              
  }}
      }
  }
}





  // EXERCICIO 08

  const exercicio08 = () =>{



    let a = Number(prompt("digite um numero"))
    let b = Number(prompt("digite um numero"))
    let c = Number(prompt("digite um numero"))
    if( a > b && a > c){
        alert(" resposta é  " + a)
    }else{
        if( b > a && b > c){
            alert(" resposta é  " + b)
    } else{
        alert(" Resposta é " + c)
    
    } 
     }
  }

// EXERCICIO 09


// let desconto = Number(prompt("digite o valor"));

// if
const adicionarLog = () =>{

  const divLogs = document.querySelector(".logs"); //selecionar div

  let tagP = document.createElement("p");// criar tag p

  tagP.innerHTML = "Exercicio executado às " + new Date().toLocaleDateString( )+ "às" + new Date().toLocaleTimeString();

  divLogs.appendChild(tagP);// acrescentar a tagP dentro da dicLogs.
}