const demoFilter = () =>{
    const numeros = ["Lucas" , 2, 3, 4, 5, 6];
    let numerosFiltrados = numeros.filter(numero => numero > 2);
}



const demoFind = () =>{

    let produtos = [
        {
            id: "1",
            nome: "teclado",
            preco: 100
        },
        {
            id: "2",
            nome: "mouse",
            preco: 50

        },
        {
            id: "3",
            nome: "monitor",
            preco: 700
        }];
}

 const produtoCaro = produtos.find( produto => produto.preco == 700);
 console.log(produtoCaro)




 const demoMap = () =>{
    const numeros = []
 }
 numeros
 