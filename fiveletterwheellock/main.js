let w1 = 'abcdejlmst';
let w2 = 'aehilnortu';
let w3 = 'acdeilnrst';
let w4 = 'aceilnosty';
let w5 = 'adehklnsy';
for(let i of w1){
  for(let j of w2){
    for(let k of w3){
      for(let l of w4){
        for(let m of w5){
          let word = i+j+k+l+m;
          if(allwords.includes(word)){document.write(word+'<br>');}
        }
      }
    }
  }
}
