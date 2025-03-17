// operaciones.js
  function suma(a, b) {
    return a + b;
  }
  
 //
  function division(a, b) {
    if(b===0){
        throw new Error ("No se pude dividir entre 0");
    }
    return a / b;
  }

  function multiplicacion(a, b) {
    return a * b;
  }

  function resta(a, b) {
    return a - b;
  }

  
  module.exports = { suma,division,multiplicacion,resta };