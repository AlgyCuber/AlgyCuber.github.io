let g, n, inpq;
run.addEventListener('click',function(){
  g = [0];
  n = 0;
  inpq = 0;
  oup.value = '';
  for(let i=0;i<inp.value.length;i++){
    if(inp.value[i]=='s'){g[n] = 1 - g[n];}
    else if(inp.value[i]=='l' && n>0){n--;}
    else if(inp.value[i]=='r'){n++; if(n==g.length){g.push(0);}}
    else if(inp.value[i]=='b' && g[n]==0){
      let bracket = 1;
      while(i<inp.value.length && bracket!=0){
        i++;
        if(inp.value[i]=='b'){bracket++;}
        else if(inp.value[i]=='e'){bracket--;}
      }
    }
    else if(inp.value[i]=='e' && g[n]!=0){
      let bracket = 1;
      while(i>=0 && bracket!=0){
        i--;
        if(inp.value[i]=='e'){bracket++;}
        else if(inp.value[i]=='b'){bracket--;}
      }
    }
    else if(inp.value[i]=='o'){
      let sum = 0;
      for(let j=0;j<8;j++){
        sum += 2**(7-j)*((n+j<g.length)?g[n+j]:0);
      }
      oup.value += String.fromCharCode(sum);
    }
    else if(inp.value[i]=='i'){
      if(inpq>=userinp.value.length){
        for(let j=0;j<8;j++){g[n+j] = 0;}
      }
      else{
        for(let j=0;j<8;j++){g[n+j] = (userinp.value[inpq].charCodeAt() & 2**(7-j))/2**(7-j);}
      }
      inpq++;
    }
    console.log(g);
  }
});
