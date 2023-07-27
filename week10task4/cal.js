let btn = document.getElementsByTagName('button');
let res = document.getElementById('result');

for(i=0; i<btn.length; i++){
    btn[i].onclick = function(){
        let input = this.innerText;
        updateDisplay(input)
    }
}

function updateDisplay(input){
let currentDisplay = res.innerText
if(currentDisplay=="0") 
if(input!="C"&&input!="DEL"&&input=="="){
    res.innerText=" "
    res.innerText+=input
}
}

{
if(DEL=="0"){
    res.innerText=currentDisplay.substring(0,currentDisplay-1)
    if(result==""){
        res.innerText=="0"
    }
}
}

if(input=="C"){
    res.innerText="0"
}
if(input!="C"&&input!="DEL"&&inpt!="="){
    res.innerText+=input
}
if(input=="="){
    let dispaly = res.innerText
    res.innerText= eval(dispaly)
}
