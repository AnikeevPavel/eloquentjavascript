
function chess (n){
let res = '';
for (let i = 0; i<n;i++){
  if (i % 2 === 0 && n%2===0){
    res+='# '.repeat(n/2) + '\n';
  }else if (i % 2 !== 0 && n%2==0) {
    res+=' #'.repeat(n/2)+ '\n';
  } else if(i % 2 === 0 && n%2!==0){
    res+='# '.repeat(n/2)+'#'+ '\n';
  } else if(i % 2 !== 0 && n%2!==0){
    res+=' #'.repeat(n/2)+" "+ '\n';
  }
}
return res;
}

console.log(chess(8))
