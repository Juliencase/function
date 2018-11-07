function prom(i){
  return new Promise(function(resolve,reject){
    if(parseInt(i)){
      var e = 'lul'
      resolve({num:i,i:e})
    }else{
      console.log('laalal')
      reject(i)
    }
  })
}


function prom2(obj){
  return new Promise(function(resolve,reject){
    console.log(obj.i)
    resolve(obj.num*2)
  })
}

prom(10)
  .then(prom2)
  .then(function(i){
  console.log(i)
}).catch(err =>{
  console.log(err,'Salut')
})
