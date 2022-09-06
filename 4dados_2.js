//tambem pode-se utilizar o "let"
let preco = 16.50;
let desconto = 0.10;

console.log(preco * (1 - desconto));

//utilizando-a em um texto, também chamado de string(sequência de caractéries)
let nome = "Caderno";
let categoria = "Papelaria";

console.log("Nome: " + nome 
+ ", Categoria: " + categoria 
+ ", Preço: " + preco 
+ ", Desconto : " + desconto);

//--------------------------------------------------------------------------------------------------------------------------
//Utilizando typeof

let idade = 31;
console.log(typeof 31);
console.log(typeof idade);
//------------------------------------
let estaChovendo = true // ou false
console.log(typeof estaChovendo)
//------------------------------------
console.log(typeof "teste")
