// Recursion 

// Cuanto una función se llama a si misma hasta que deja de hacerlo

for (let i = 5; i  > 0; i --) {
    // console.log(i);
}

let cuentaAtras = numero => {
    // base case 
    if (numero === 0) {
        return;
    }
    // console.log(numero);
    return cuentaAtras(numero - 1);
};

// console.log(cuentaAtras(5));
// La entrada actual es 5
// Es 5 igual a 0 ?
// No, Ok entonces imprime 5 en la consola.
// Se llama asi misma de nuevo con el numero - 1 O 5 - 1;
// La entrada principal es 4
// Es 4 igual a 0 ?
// No, Ok entonces imprime 4 en la consola.
// Repite hasta que la entrada sea 0, y asi la función deja de llamarse a si misma.

let parImpar = numero => {
    if (numero === 0) {
        return 'par';
    } else if ( numero === 1) {
        return 'Impar'
    } else  {
        return parImpar(numero -2)
    }
};

// Leer una palabra alreves

const multiply = (arr, n) => {
    if (n <= 0) {
        return 1;
    } else {
        return multiply(arr,n - 1) * arr[n-1];
    }
}

const sum = (arr,n) => {
    if (n <= 0) {
        return 0
    } else {
        return sum(arr, n -1) + arr[n - 1 ];
    }
}

sum([2,3,4],1);