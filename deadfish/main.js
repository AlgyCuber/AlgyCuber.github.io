let g, n, parsed;
let running = false;
setInterval(function(){
  if(running){run.innerHTML = 'Stop';}
  else{run.innerHTML = 'Run';}
  if(running){
    if(parsed[n] == 'i'){g++;}
    else if(parsed[n] == 'd'){g--;}
    else if(parsed[n] == 's'){g *= g;}
    else if(parsed[n] == 'o'){oup.value += g;}
    else if(n == parsed.length){running = false;}
    if(g == -1 || g == 256){g = 0;}
    n++;
  }
},1);
run.addEventListener('click',function(){
  if(running){running = false;}
  else{
    running = true;
    g = 0; n = 0;
    oup.value = '';
    parsed = inp.value;
  }
});
