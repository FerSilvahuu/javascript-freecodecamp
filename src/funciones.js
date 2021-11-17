function isEqual(a,b) {
    if(a === b) {
        return true;
    } else {
        return false
    }
}
// isEqual('a','b');

// Manera más óptima
function isEqualBest(a,b) {
    return a === b;
}
// isEqualBest(1,2);
// Output = false

// a es menor que b

function prueba(a,b) {
    return a < b;
}
// Si a es menor true sino false

// Patrón de devolución anticipado para funciones
  // Cuando se alcanza una sentencia Return, la ejecución de la función actual
  // se detiene y el control se devuelve a la ubicación de la llamada

function myFunct () {
    console.log('Hello');
    return 'World';
    console.log('ByeBye')
}
// myFunct();

// Si a o b es menor a cero return undefined    
const abTest = (a,b) => {
    if(a  < 0 || b < 0) {
        return undefined
    }
    return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b),2));
}
// abTest(3,4);