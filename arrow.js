//const input =[1,2,3,4,5]; //ARROWS
//
//function transform(i){
//  return i*2 ;
//}

//const ans =input.map(transform);
//console.log(ans);

//FILTERS

const arr=[1,2,3,4,5];

function logic(n){
  if(n%2==0){
    return true ;
  }
  else{
    return false
  }
}

const ans = arr.filter(logic);
console.log(ans);         