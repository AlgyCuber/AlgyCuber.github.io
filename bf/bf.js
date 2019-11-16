let code = '';
let g = [];
let run = false;
let pos = 0;
let cells = false;
let hex = false;
let rpos = 0;
let p = {
	add:function(){
		if(g[pos]==255){g[pos] = 0;}
		else{g[pos]++;}
	},
	sub:function(){
		if(g[pos]==0){g[pos] = 255;}
		else{g[pos]--;}
	},
	shl:function(){
		if(pos==0){pos = 2047;}
		else{pos--;}
	},
	shr:function(){
		if(pos==2047){pos = 0;}
		else{pos++;}
	},
	bgl:function(){
		if(g[pos]==0){
			let b = 0;
			while(rpos<code.length){
				if(code[rpos]=='['){b++;}
				else if(code[rpos]==']'){b--;}
				rpos++;
				if(b==0){break;}
			}
		}
	},
	enl:function(){
		if(g[pos]!=0){
			let b = 0;
			while(rpos>=0){
				if(code[rpos]=='['){b++;}
				else if(code[rpos]==']'){b--;}
				rpos--;
				if(b==0){break;}
			}
		}
	},
	dis:function(){
		op.value += String.fromCharCode(g[pos]);
	}
};
function setup(){
	noCanvas();
	document.body.innerHTML += '<textarea id="tf"></textarea>';
	tf.style.position = 'absolute';
	tf.style.left = '20px';
	tf.style.top = '20px';
	tf.style.width = '960px';
	tf.style.height = '150px';
	///
	document.body.innerHTML += '<textarea id="op" readonly></textarea>';
	op.style.position = 'absolute';
	op.style.left = '20px';
	op.style.top = '280px';
	op.style.width = '960px';
	op.style.height = '150px';
	///
	document.body.innerHTML += '<input id="ip">';
	ip.style.position = 'absolute';
	ip.style.left = '20px';
	ip.style.top = '450px';
	ip.style.width = '960px';
	ip.style.height = '15px';
	///
	createCanvas(1000,1200);
	textAlign(CENTER,CENTER);
	for(let i=0;i<2048;i++){g.push(0);}
    frameRate(1000);
}
function draw(){
	background(255);
	noStroke();
	if((mouseX>40 && mouseX<140 || mouseX>160 && mouseX<260 || mouseX>280 && mouseX<380 && cells) && mouseY>200 && mouseY<240){document.body.style.cursor = 'pointer';}
	else{document.body.style.cursor = 'default';}
	///
	if(mouseX>40 && mouseX<140 && mouseY>200 && mouseY<240){fill(80);}
	else{fill(100);}
	rect(40,200,100,40);
	fill(255);
	if(run){text('Stop',90,220);}
	else{text('Run',90,220);}
	///
	if(mouseX>160 && mouseX<260 && mouseY>200 && mouseY<240){fill(80);}
	else{fill(100);}
	rect(160,200,100,40);
	fill(255);
	if(cells){text('Cells',210,220);}
	else{text('Output',210,220);}
	///
	if(mouseX>280 && mouseX<380 && mouseY>200 && mouseY<240 && cells){fill(80);}
	else if(!cells){fill(220);}
	else{fill(100);}
	rect(280,200,100,40);
	fill(255);
	if(hex){text('Hex',330,220);}
	else{text('Decimal',330,220);}
	///
	if(cells){
		op.style.display = 'none';
		ip.style.display = 'none';
		textSize(12);
		stroke(0);
		for(let i=0;i<16;i++){
			for(let j=0;j<32;j++){
				if(i*32+j==pos){fill(140,198,255);}
				else{fill(255);}
				rect(20+j*30,270+i*30,30,30);
				fill(0);
                if(hex){
                    let s = '';
                    let h = Math.floor(g[i*32+j]/16);
                    if(h<10){s += h;}
                    else if(h==10){s += 'A';}
                    else if(h==11){s += 'B';}
                    else if(h==12){s += 'C';}
                    else if(h==13){s += 'D';}
                    else if(h==14){s += 'E';}
                    else if(h==15){s += 'F';}
                    h = g[i*32+j]%16;
                    if(h<10){s += h;}
                    else if(h==10){s += 'A';}
                    else if(h==11){s += 'B';}
                    else if(h==12){s += 'C';}
                    else if(h==13){s += 'D';}
                    else if(h==14){s += 'E';}
                    else if(h==15){s += 'F';}
                    text(s,36+j*30,286+i*30);
                }
				else{text(g[i*32+j],36+j*30,286+i*30);}
			}
		}
	}
	else{
		op.style.display = 'block';
		ip.style.display = 'block';
	}
	///
	if(run){
		if(code[rpos]=='+'){p.add();}
		else if(code[rpos]=='-'){p.sub();}
		else if(code[rpos]=='<'){p.shl();}
		else if(code[rpos]=='>'){p.shr();}
		else if(code[rpos]=='['){p.bgl();}
		else if(code[rpos]==']'){p.enl();}
		else if(code[rpos]=='.'){p.dis();}
		if(rpos==code.length-1){
			run = false;
			rpos = 0;
		}
		else{rpos++;}
	}
}
function mousePressed(){
	if(mouseX>40 && mouseX<140 && mouseY>200 && mouseY<240){
		code = '';
		for (let i=0;i<2048;i++){
			g[i] = 0;
		}
        op.value = '';
        pos = 0;
		if(run){run = false;}
		else{run = true;}
		for(let i=0;i<tf.value.length;i++){
			if((tf.value[i]=='+' || tf.value[i]=='-' || tf.value[i]=='[' || tf.value[i]==']' || tf.value[i]=='<' || tf.value[i]=='>' || tf.value[i]=='.' || tf.value[i]==',') && run){
				code += tf.value[i];
			}
		}
	}
	if(mouseX>160 && mouseX<260 && mouseY>200 && mouseY<240){
		if(cells){cells = false;}
		else{cells = true;}
	}
	if(mouseX>280 && mouseX<380 && mouseY>200 && mouseY<240 && cells){
		if(hex){hex = false;}
		else{hex = true;}
	}
}
