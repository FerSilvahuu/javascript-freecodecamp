// Es más fácil escribir muchas sentencias If/Else con Switch

// If / Else 
var val ='';
if (val === 1) {
    answer = 'a';
} else if (val === 2) {
    answer = 'b';
} else {
    answer = 'c';
}

// Puede ser reemplazado por 

switch(val) {
    case 1:
        asnwer = 'a';
        break;
    case 2:
        asnwer = 'b'
        break;
    case 3:
        asnwer = 'c';
}

// Ejercicio
function chainToSwitch(val) {
    let answer = "";
    // Cambia solo el código debajo de esta línea
  
    if (val === "bob") {
      answer = "Marley";
    } else if (val === 42) {
      answer = "The Answer";
    } else if (val === 1) {
      answer = "There is no #1";
    } else if (val === 99) {
      answer = "Missed me by this much!";
    } else if (val === 7) {
      answer = "Ate Nine";
    }
  
    // Cambia solo el código encima de esta línea
    return answer;
  }
  
  chainToSwitch(7);

  // Con Switch

  function toSwitch(val) {
      let answer = '';
      // Estructura con switch
      switch(val) {
          case 'bob':
              answer = 'Marley'
              break;
          case 42:
              answer = 'The Answer'
              break;
          case 1:
              answer = 'There is no #1';
              break;
          case 99:
              answer = 'Missed me by this much!';
               break;
          case 7:
              answer = 'Ate nine';
      }
      return answer
  }
  toSwitch(7);