let tVal = '';
function draw(){
	s.style.font = '14px Arial';
	tVal = t.value;
	if(tVal.substring(tVal.length-2,tVal.length)=='g\;'){t.value = t.value.substring(0,t.value.length-2)+'ǧ';}
	else if(tVal[tVal.length-1]=='G'){t.value = t.value.substring(0,t.value.length-1)+'ɢ';}
	else if(tVal[tVal.length-1]=='J'){t.value = t.value.substring(0,t.value.length-1)+'ǰ';}
	else if(tVal[tVal.length-1]=='C'){t.value = t.value.substring(0,t.value.length-1)+'č';}
	else if(tVal[tVal.length-1]=='K'){t.value = t.value.substring(0,t.value.length-1)+'ᴋ';}
	else if(tVal[tVal.length-1]=='N'){t.value = t.value.substring(0,t.value.length-1)+'ñ';}
	else if(tVal.substring(tVal.length-2,tVal.length)=='n\;'){t.value = t.value.substring(0,t.value.length-2)+'ň';}
	else if(tVal[tVal.length-1]=='D'){t.value = t.value.substring(0,t.value.length-1)+'ᴅ';}
	else if(tVal[tVal.length-1]=='T'){t.value = t.value.substring(0,t.value.length-1)+'ᴛ';}
	else if(tVal.substring(tVal.length-2,tVal.length)=='t\;'){t.value = t.value.substring(0,t.value.length-2)+'þ';}
	else if(tVal[tVal.length-1]=='L'){t.value = t.value.substring(0,t.value.length-1)+'ʟ';}
	else if(tVal.substring(tVal.length-2,tVal.length)=='l\;'){t.value = t.value.substring(0,t.value.length-2)+'ɬ';}
	else if(tVal.substring(tVal.length-2,tVal.length)=='ʀ\;'){t.value = t.value.substring(0,t.value.length-2)+'ŕ';}
	else if(tVal.substring(tVal.length-2,tVal.length)=='r\;'){t.value = t.value.substring(0,t.value.length-2)+'ř';}
	else if(tVal[tVal.length-1]=='R'){t.value = t.value.substring(0,t.value.length-1)+'ʀ';}
	else if(tVal[tVal.length-1]=='B'){t.value = t.value.substring(0,t.value.length-1)+'ʙ';}
	else if(tVal[tVal.length-1]=='P'){t.value = t.value.substring(0,t.value.length-1)+'ᴘ';}
	else if(tVal.substring(tVal.length-2,tVal.length)=='p\;'){t.value = t.value.substring(0,t.value.length-2)+'ṕ';}
	else if(tVal[tVal.length-1]=='V'){t.value = t.value.substring(0,t.value.length-1)+'ʌ';}
	else if(tVal[tVal.length-1]=='F'){t.value = t.value.substring(0,t.value.length-1)+'ꜰ';}
	else if(tVal[tVal.length-1]=='Z'){t.value = t.value.substring(0,t.value.length-1)+'ž';}
	else if(tVal[tVal.length-1]=='S'){t.value = t.value.substring(0,t.value.length-1)+'š';}
}
