
function double(a) {
  a = a*2;
  return a;
}

double(4)
double(5)

console.log(double(4));
console.log(double(5));

//////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////


function ageName(age,name) {
  if (age < 18) {
      console.log( age + " ans, tu es mineur " + name);
  } else {
    console.log( age + " ans, tu es majeur " + name);
  }
};


ageName(17,'jean')
ageName(21,'michel')

//////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////

var list = [11,15,1,6,2,19,3,14,7,4,10];

function azerty(nbr) {
  list.forEach(function(i,u){
  if (i < 10) {
    console.log(i);
    list.splice(u,1);
    }
  })
  return nbr
  };

azerty(list)
console.log(azerty(list));

//////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////

var functionCalcul = require('./function.js')

console.log(functionCalcul);

function main(i){
  i = functionCalcul.triple(i);
  i = functionCalcul.add3(i);

  return i;
};

console.log(main(20));

//////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////
