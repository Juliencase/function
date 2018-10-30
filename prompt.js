var prompt = require('prompt');

prompt.start();

var array = [];

function addArray() {
  prompt.get(['valeur'], function (err, result) {
      array = checkArray(array,result.valeur)
      console.log(array);
      console.log('  valeur : ' + result.valeur);
      addArray(result.valeur);
      return array;
      console.log(array);
    });
}
addArray()


function checkArray(array,valeur) {
  i = 0;
  boolean = true;

  while (boolean) {
      if (array[i] == valeur) {
        console.log("Valeur déjà utilisée");
        boolean = false;
        return array;
      } else if (i == array.length) {

        array.push(valeur);
        boolean = false;
        return array;
      }
      i++;
  }
}
