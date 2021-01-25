const validator = {
  // Crear la función maskify es para ocultar los digitos de la tarjeta y dejar visible los último 4
  maskify: function (creditCardNumber) {
   // Se creó un condicional
    if (creditCardNumber.length > 4) {  //si la cantidad de dígitos de tarjeta es mayor a 4 aplica la condicional
      let lastFourMath = creditCardNumber.match(/.{4}$/); // Se busca los 4 últimos digitos de la tarjeta y el resultado se guarda en un array
      let lastFourChars = lastFourMath[0]; // Se extre los 4 últimos digitos del array 
      
      let charsToMask = creditCardNumber.replace(lastFourChars, ""); // Reemplazó los 4 digitos con una cadena vacia para quedarme solo con los caracteres a reemplazar con #
      //console.log(charsToMask);
      let masked = charsToMask.split("").map(  // Se divide la cadena con un split, para tomar cada elemento y con map aplicas una función a cada elemento
        () => "#" // La función reemplaza por # cada elemento del array
      ).join(""); // Se unen todos los # sin dejas especios

      //console.log(masked);
      return masked + lastFourChars; // Retorna los elementos enmascarados + los 4 últimos digitos 
    } else {
      return creditCardNumber; // Sino retorna el mismo número 
    }

  },
  // Crear la función isValid es para validar el número de tarjeta
  isValid: function (creditCardNumber) {
    // Se crea un arry para tomar cada número de la tarjeta como elemento
    let cardNumberArray = creditCardNumber.split("");
    let reverseCardNumberArray = cardNumberArray.reverse(); //Invetir el orden del array

    //console.log(reverseCardNumberArray);
    //Con el map, hacemos que con los digitos del array anterior se pueda realizar la operación matemática
    //el index es el indice del array (indica la posición de cada elemento del array)
    let newCardNumberArray = reverseCardNumberArray.map((number, index) => {
      // Se selecciona la posición par del array
      if ((index + 1) % 2 == 0) {
        let n = number * 2;  // Si es par se multiplica por 2

        // Si el resultad de la multiplicación es >=10, se le sumar sus digitos
        if (n >= 10) {
          return n.toString().split("").reduce((d1, d2) => parseInt(d1) + parseInt(d2));
        } else {// Caso contrario se devulve el mismo número que fue multiplicado x2
          return n;
        }

      } else {// Caso contrario se devulve el mismo número de las posiciones impares.
        return number;
      }
    });
    //console.log(newCardNumberArray);

    // Se hace la suma del nuevo resultaado del array
    let sumNumbers = newCardNumberArray.reduce((d1, d2) => {
      return parseInt(d1) + parseInt(d2);
    });

    //console.log(sumNumbers);

    //Si el resultado final es multiplo de 10, la velidación es verdadero, sino es falsa.
    if (sumNumbers % 10 == 0) {
      return true;
    } else {
      return false;
    }

  }
};
export default validator;
