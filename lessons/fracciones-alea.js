// Genera factores aleatorias con Javascript

// Son útiles para crear comportamientos aleatorios

const ram = ()=> {
    return Math.random();
}
ram();

// Numeros enteros aleatorios

Math.floor(Math.random() * 20);
// Math.floor(Math.random() * (max - min + 1)) + min

const maxRan = (minMax, maxN) => {
    return Math.floor(Math.random() * (maxN - minMax + 1)) + minMax
}

maxRan(2,3);