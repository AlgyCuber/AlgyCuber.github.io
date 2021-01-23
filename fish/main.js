let g, x, y, dx, dy, parsed, singleQuote, doubleQuote, n, reg;
let key = 0;
let running = false;
setInterval(function(){
  if(running){run.innerHTML = 'Stop';}
  else{run.innerHTML = 'Run';}
  if(running && userinp.readOnly){
    if(singleQuote || doubleQuote){
      if(singleQuote && parsed[y][x] == '\''){singleQuote = false;}
      else if(doubleQuote && parsed[y][x] == '"'){doubleQuote = false;}
      else{g[n].push(parsed[y][x].charCodeAt(0));}
    }
    else{
      if(parsed[y][x] == '<'){dx = -1; dy = 0;}
      else if(parsed[y][x] == '>'){dx = 1; dy = 0;}
      else if(parsed[y][x] == '^'){dx = 0; dy = -1;}
      else if(parsed[y][x] == 'v'){dx = 0; dy = 1;}
      else if(parsed[y][x] == '/'){
        if(dx == 0){dx = -dy; dy = 0;}
        else{dy = -dx; dx = 0;}
      }
      else if(parsed[y][x] == '\\'){
        if(dx == 0){dx = dy; dy = 0;}
        else{dy = dx; dx = 0;}
      }
      else if(parsed[y][x] == '|'){dx *= -1;}
      else if(parsed[y][x] == '_'){dy *= -1;}
      else if(parsed[y][x] == '#'){dx *= -1; dy *= -1;}
      else if(parsed[y][x] == 'x'){
        dx = Math.round(Math.random()*2-1);
        dy = (dx == 0 ? Math.round(Math.random())*2-1 : 0);
      }
      else if(parsed[y][x] == '!'){x += dx; y += dy;}
      else if(parsed[y][x] == '?'){
        if(g[n].pop()==0){x += dx; y += dy;}
      }
      else if(parsed[y][x] == '.'){y = g[n].pop(); x = g[n].pop();}
      else if('0123456789'.includes(parsed[y][x])){g[n].push(Number(parsed[y][x]));}
      else if('abcdef'.includes(parsed[y][x])){g[n].push(parsed[y][x].charCodeAt(0)-87);}
      else if(parsed[y][x] == '+'){g[n].push(g[n].pop() + g[n].pop());}
      else if(parsed[y][x] == '-'){g[n].push(-g[n].pop() + g[n].pop());}
      else if(parsed[y][x] == '*'){g[n].push(g[n].pop() * g[n].pop());}
      else if(parsed[y][x] == ','){
        let temp = g[n].pop();
        g[n].push(g[n].pop() / temp);
      }
      else if(parsed[y][x] == '%'){
        let temp = g[n].pop();
        g[n].push(g[n].pop() % temp);
      }
      else if(parsed[y][x] == '='){g[n].push(Number(g[n].pop() == g[n].pop()));}
      else if(parsed[y][x] == '('){g[n].push(Number(g[n].pop() > g[n].pop()));}
      else if(parsed[y][x] == ')'){g[n].push(Number(g[n].pop() < g[n].pop()));}
      else if(parsed[y][x] == '\''){singleQuote = true;}
      else if(parsed[y][x] == '"'){doubleQuote = true;}
      else if(parsed[y][x] == ':'){g[n].push(g[n][g[n].length - 1]);}
      else if(parsed[y][x] == '~'){g[n].pop();}
      else if(parsed[y][x] == '$'){
        let temp = [g[n].pop(), g[n].pop()];
        g[n] = g[n].concat(temp);
      }
      else if(parsed[y][x] == '@'){
        let temp = [g[n].pop(), 0, g[n].pop()];
        temp[1] = g[n].pop();
        g[n] = g[n].concat(temp);
      }
      else if(parsed[y][x]=='{'){g[n].push(g[n].shift());}
      else if(parsed[y][x]=='}'){g[n].unshift(g[n].pop());}
      else if(parsed[y][x]=='r'){g[n] = g[n].reverse();}
      else if(parsed[y][x]=='l'){g[n].push(g[n].length);}
      else if(parsed[y][x]=='['){
        let temp = -g[n].pop();
        g[n+1] = g[n].slice(temp, g[n].length);
        g[n] = g[n].slice(0, temp);
        n++;
      }
      else if(parsed[y][x]==']'){
        reg[n] = undefined;
        n--;
        g[n] = g[n].concat(g[n+1]);
      }
      else if(parsed[y][x]=='o'){oup.value += String.fromCharCode(g[n].pop());}
      else if(parsed[y][x]=='n'){oup.value += g[n].pop();}
      else if(parsed[y][x]=='i'){userinp.readOnly = false;}
      else if(parsed[y][x]=='&'){
        if(reg[n]==undefined){reg[n] = g[n].pop();}
        else{
          g[n].push(reg[n]);
          reg[n] = undefined;
        }
      }
      else if(parsed[y][x]=='g'){
        let temp = [g[n].pop(), g[n].pop()];
        g[n].push((parsed[temp[0]][temp[1]] == '') ? 0 : parsed[temp[0]][temp[1]].charCodeAt(0));
      }
      else if(parsed[y][x]=='p'){parsed[g[n].pop()][g[n].pop()] = String.fromCharCode(g[n].pop());}
      else if(parsed[y][x]==';'){running = false;}
    }
    x += dx; y += dy;
  }
  else{
    if(key == 13){
      g[n].push(10);
      userinp.readOnly = true;
      key = 0;
    }
    else if(userinp.value!=''){
      g[n].push(userinp.value.charCodeAt(0));
      userinp.readOnly = true;
      userinp.value = '';
    }
  }
},1);
run.addEventListener('click',function(){
  if(running){running = false;}
  else{
    running = true;
    singleQuote = false;
    doubleQuote = false;
    g = [[]]; x = 0; y = 0; dx = 1; dy = 0; n = 0; reg = [];
    oup.value = '';
    parsed = inp.value.split('\n');
    for(let j in parsed){
      parsed[j] = parsed[j].split('');
    }
  }
});
window.addEventListener('keydown',function(e){
  if(!userinp.readOnly){
    if(e.keyCode == 13){key = 13;}
  }
});
