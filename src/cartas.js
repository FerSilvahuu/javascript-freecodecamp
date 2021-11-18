// Conteo de cartas

// Recibimos un parámetro card 
// Variable Count que aumenta o reduce dependiendo de card
// Return una cadena Bet (Apuesta)
// Hold(positivo)
// Negativo

let count = 0;

const cc = (card) => {
    switch(card) {
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            count ++;
            break;
        case 10:
        case 'J':
        case 'Q':
        case 'K':
        case 'A':
            count --;
            break;
    }
    if(count >= 1) {
        return count + ' Bet';
    } else {
        return count + ' Hold';
    }
}

cc(2);
cc(3);
cc(7);
cc('K');
cc('A');