// Objetos
// Nos permiten almancenar datos de forma estructurada

// Ejemplo

const cat = {
    'name': 'Whiskers',
    'legs': 4,
    'tails': 1,
    'enemies': ['Water','Dogs']
};

const catWell = {
    make: 'Ford',
    5: 'Five',
    'model': 'focus'
};

// Acceder a las propiedades de un objeto, hay 2 maneras

// (.) notación de puntos >> Debemos conocer el nombre de la propiedad
const myObject = {
    prop1: 'val1',
    prop2: 'cal2'
};
const prop1val = myObject.prop1; // 'val1'
const prop2val = myObject.prop2; // 'val2'

// Notaciónde corchetes >> Similar a un Array

const prop1cor = myObject[0]; // 'val1'
const prop1cor = myObject[1]; // 'val2'

// Acceder a una propiedad que está almacenada como el valor
// de una variable

const dogs = {
    Fido: 'Mutt',
    Hunter: 'Doberman',
    Snoopie: 'Beagle'
};
const myDog = 'Hunter';
const mySnoo = 'Snoopie';
const myBreed = dogs[myDog];
const mySnooValue = dogs[mySnoo];
console.log(myBreed);
console.log(mySnooValue);

// El nombre de la propiedad se recoge dinamicamente durante la ejecuicipon
// del programa, de la siguiente manera

const someObj = {
    propName: 'John'
};

function propPrefix(str) {
    const s = 'prop';
    return s + str;
}

const someProp = propPrefix('Name');
console.log(someObj[someProp]);

// Actualizar las propiedades del objeto
const ourDog = {
    'name': 'camper',
    'legs': 4,
    'tails': 1,
    'friends': ['everything']
};
console.log(ourDog.name);

ourDog.name = 'Happy Camper';
console.log(ourDog.name);
// camper
// Happy Camper

//  Añadir nuevas propiedades a un objeto

ourDog.bark = 'bow-wow';

console.log(ourDog.bark);

// Eliminar propiedades del objeto

delete ourDog.bark;

// Output = Quedan sola las primeras 4 propiedades

// Usar Objetos para hacer búsquedas
const alpha = {
    1:"Z",
    2:"Y",
    3:"X",
    4:"W",

    24:"C",
    25:"B",
    26:"A"
  };
  
  alpha[2];
  alpha[24];
  
  const value = 2;
  alpha[value];