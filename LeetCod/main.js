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

function counter(n) {
  let count = n;

  return function () {
    return count++;
  };
}

let createCounter = counter(10);

console.log(createCounter());
console.log(createCounter());
console.log(createCounter());

// 2704. Ser ou não ser
// Fácil
// Empresas
// Escreva uma função  expect que ajude os desenvolvedores a testar seus códigos.
// Ela deve receber qualquer valor  val e retornar um objeto com as duas funções a seguir.

// toBe(val) aceita outro valor e retorna  true se os dois valores  === são iguais.
// Se não forem iguais, deve lançar um erro  "Not Equal".

// notToBe(val) aceita outro valor e retorna  true se os dois valores  !== são iguais.
// Se forem iguais, deve lançar um erro  "Equal".

function expect(val) {
  return {
    toBe: function (expected) {
      if (val === expected) {
        return true;
      } else {
        throw new Error("Not Equal");
      }
    },
    notToBe: function (unexpected) {
      if (val !== unexpected) {
        return true;
      } else {
        throw new Error("Equal");
      }
    },
  };
}

function runFunction(func) {
  try {
    const value = func();
    return { value: value };
  } catch (error) {
    return { error: error.message };
  }
}

let func1 = () => expect(5).toBe(5);
console.log(runFunction(func1));

let func2 = () => expect(5).toBe(null);
console.log(runFunction(func2));

let func3 = () => expect(5).notToBe(null);
console.log(runFunction(func3));

// Escreva uma função  createCounter. Ela deve aceitar um inteiro inicial  init.
//Ela deve retornar um objeto com três funções.

// As três funções são:

// increment() aumenta o valor atual em 1 e depois o retorna.
// decrement() reduz o valor atual em 1 e depois o retorna.
// reset() define o valor atual  init e então o retorna.

function createCounter1(n) {
  let init = n;

  return {
    increment: function () {
      return (init += 1);
    },
    decrement: function () {
      return (init -= 1);
    },
    reset: function () {
      return (init = n);
    },
  };
}

let counter1 = createCounter1(0);

console.log(counter1.increment());
console.log(counter1.increment());
console.log(counter1.decrement());
console.log(counter1.reset());
console.log(counter1.reset());

// Dado um array de inteiros  arr e uma função de mapeamento  fn,
// retorne um novo array com uma transformação aplicada a cada elemento.

// O array retornado deve ser criado de forma que  returnedArray[i] = fn(arr[i], i).
// Por favor, resolva sem o método integrado Array.map.

console.log("------------------------");

//Escreva uma função  argumentsLengthque retorne a contagem de argumentos passados ​​a ela.

function argumentsLength() {
  return arguments.length;
}

console.log(argumentsLength(5,4,6,6))