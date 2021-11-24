// Verificar las propiedades de un objeto

// Comprobar si existe o no la propiedad de on objeto
// utilizamos el método .hasOwnProperty(propname)
// Devuelve true or false

const myObj = {
    top: 'hat',
    bottom: 'pants'
};
myObj.hasOwnProperty('top'); // true
myObj.hasOwnProperty('middle'); // false