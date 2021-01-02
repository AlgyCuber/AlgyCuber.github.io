let g = [];
let i = 0;
let running = false;
let parsed = [];
setInterval(function(){
  if(running){run.innerHTML = 'Stop';}
  else{run.innerHTML = 'Run';}
  if(running && userinp.readOnly){
    if(g[i]>=0 && g[i+1]>=0 && g[i+2]>=0){
      g[g[i+1]] -= g[g[i]];
      if(g[g[i+1]]<=0){i = g[i+2];}
      else{i += 3;}
    }
    else if(g[i]==-1){
      userinp.readOnly = false;
    }
    else if(g[i+1]==-1){
      oup.value += String.fromCharCode(-g[g[i]]);
      if(g[g[i]]>=0){i = g[i+2];}
      else{i += 3;}
    }
    else if(g[i+2]==-1){running = false;}
  }
  else if(userinp.value!=''){
    g[g[i+1]] -= userinp.value.charCodeAt(0);
    if(g[g[i+1]]<=0){i = g[i+2];}
    else{i += 3;}
    userinp.readOnly = true;
    userinp.value = '';
  }
},1);
run.addEventListener('click',function(){
  if(running){running = false;}
  else{
    running = true;
    g = [''];
    i = 0;
    oup.value = '';
    let temp = '';
    for(let j in inp.value){
      if(inp.value[j]=='\n'){temp += ' ';}
      else if('-0123456789 '.includes(inp.value[j])){temp += inp.value[j];}
    }
    for(let j in temp){
       if(temp[j]!=' ' && (temp[j]!='-' || temp[j-1]==' ') || temp[j]=='-' && j==0){g[g.length-1] += temp[j];}
       else if(j!=0 && !' -'.includes(temp[j-1]) && (temp[j]!='-' || j!=inp.value.length-1)){g.push('');}
    }
    for(let j in g){g[j] = Number(g[j]);}
  }
});
