// Write a function createHelloWorld. It should return a new function that always returns "Hello World".

function createHelloWorld() {
  return nova;
}

function nova() {
  return "Hello World";
}

createHelloWorld();

// 2620. Contador

// Dado um inteiro  n, retorna uma 'counter' função. Esta counter função
//inicialmente retorna  n e então retorna 1 a mais que o valor anterior
//toda vez subsequente que é chamada ( n, n + 1, n + 2, etc).

function counter(n){
    let count = n;

    return function(){
        return count++
    }
}

let createCounter = counter(10)

console.log(createCounter())
console.log(createCounter())
console.log(createCounter())



// 2704. Ser ou não ser
// Fácil
// Empresas
// Escreva uma função  expectque ajude os desenvolvedores a testar seus códigos. 
// Ela deve receber qualquer valor  val e retornar um objeto com as duas funções a seguir.

// toBe(val) aceita outro valor e retorna  true se os dois valores  === são iguais. 
// Se não forem iguais, deve lançar um erro  "Not Equal".

// notToBe(val) aceita outro valor e retorna  true se os dois valores  !== são iguais. 
// Se forem iguais, deve lançar um erro  "Equal".


