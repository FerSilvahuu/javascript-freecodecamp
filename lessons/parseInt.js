// Funcion analiza una cadena y devuelve entero
// Recibe un segundo argumento para la base(radix) puede ser entre 2 y 36
// parseInt(string,radix)



const a = parseInt('007');
console.log(a);

const convert = (str) => {
    return parseInt(str,2);
}

convert('hola');