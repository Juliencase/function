var prompt = require('prompt');

prompt.start();

var array = [];

function addArray() {
  prompt.get(['valeur'], function (err, result) {
      checkArray(array,result.valeur)

        .then(function(valeur) {
          array.push(valeur);
          addArray(result.valeur);
          console.log(array);

        }).catch(function(error) {
          console.log(error);
          addArray(result.valeur);
        })
  });
}
addArray()



function checkArray(array,valeur) {
  i = 0;
  boolean = true;
  return new Promise(function (resolve, reject) {
    while (boolean) {
      console.log(array);
        if (array[i] == valeur) {
          boolean = false;
          reject("valeur déjà présente")

        } else if (i == array.length) {
          console.log(i);
          boolean = false;
          resolve(valeur)
        }
        i++;
      }
    })
  }
