var array = ["6","3","2","-","8","1","5","7","4"];

function iniciar(){
    document.getElementById("contenedor").style.opacity="1";
    document.getElementById("boton-inicio").style.display="none";

    cargar();
    
}

function cargar(){
    document.getElementById("cero").innerHTML = array[0];
    document.getElementById("one").innerHTML = array[1];
    document.getElementById("two").innerHTML = array[2];
    document.getElementById("three").innerHTML = array[3];
    document.getElementById("four").innerHTML = array[4];
    document.getElementById("five").innerHTML = array[5];
    document.getElementById("six").innerHTML = array[6];
    document.getElementById("seven").innerHTML = array[7];
    document.getElementById("eight").innerHTML = array[8];
    libre();
    verificar();

}
function verificar(){
    if(array[0]=="1"){document.getElementById("cero").style.backgroundColor="green"} else{document.getElementById("cero").style.backgroundColor="#f1f1f1"};
    if(array[1]=="2"){document.getElementById("one").style.backgroundColor="green"} else{document.getElementById("one").style.backgroundColor="#f1f1f1"};
    if(array[2]=="3"){document.getElementById("two").style.backgroundColor="green"} else{document.getElementById("two").style.backgroundColor="#f1f1f1"};
    if(array[3]=="4"){document.getElementById("three").style.backgroundColor="green"} else{document.getElementById("three").style.backgroundColor="#f1f1f1"};
    if(array[4]=="5"){document.getElementById("four").style.backgroundColor="green"} else{document.getElementById("four").style.backgroundColor="#f1f1f1"};
    if(array[5]=="6"){document.getElementById("five").style.backgroundColor="green"} else{document.getElementById("five").style.backgroundColor="#f1f1f1"};
    if(array[6]=="7"){document.getElementById("six").style.backgroundColor="green"} else{document.getElementById("six").style.backgroundColor="#f1f1f1"};
    if(array[7]=="8"){document.getElementById("seven").style.backgroundColor="green"} else{document.getElementById("seven").style.backgroundColor="#f1f1f1"};

}


function libre(){
    if(array[0]=="-") { document.getElementById("cero").style.color=" #f1f1f1"} else {document.getElementById("cero").style.color="black"};
    if(array[1]=="-") { document.getElementById("one").style.color=" #f1f1f1"} else {document.getElementById("one").style.color="black"};
    if(array[2]=="-") { document.getElementById("two").style.color=" #f1f1f1"} else {document.getElementById("two").style.color="black"};
    if(array[3]=="-") { document.getElementById("three").style.color=" #f1f1f1"} else {document.getElementById("three").style.color="black"};
    if(array[4]=="-") { document.getElementById("four").style.color=" #f1f1f1"} else {document.getElementById("four").style.color="black"};
    if(array[5]=="-") { document.getElementById("five").style.color=" #f1f1f1"} else {document.getElementById("five").style.color="black"};
    if(array[6]=="-") { document.getElementById("six").style.color=" #f1f1f1"} else {document.getElementById("six").style.color="black"};
    if(array[7]=="-") { document.getElementById("seven").style.color=" #f1f1f1"} else {document.getElementById("seven").style.color="black"};
    if(array[8]=="-") { document.getElementById("eight").style.color=" #f1f1f1"} else {document.getElementById("eight").style.color="black"};
}

function mover(id){
    var i;
    switch (id) {
        case "cero": i=0; break;
        case "one": i=1; break;
        case "two": i=2; break;
        case "three": i=3; break;
        case "four": i=4; break;
        case "five": i=5; break;
        case "six": i=6; break;
        case "seven": i=7; break;
        case "eight": i=8; break;
        
    }
    switch (i) {
        case 0: 
            if(array[1]=="-"){ right(0)} else { if(array[3]=="-"){down(0)}};
            break;
        case 1: 
            if(array[0]=="-"){left(1)} else{if(array[4]=="-"){down(1)} else{if(array[2]=="-"){right(1)}}};
            break;
        case 2:
            if(array[1]=="-"){left(2)} else{if(array[5]=="-"){down(2)}};
            break;
        case 3:
            if(array[0]=="-"){up(3)} else {if(array[4]=="-"){right(3)} else {if(array[6]=="-"){down(3)}}};
            break;
        case 4:
            if(array[1]=="-"){up(4)} else {if(array[5]=="-"){right(4)} else {if(array[7]=="-"){down(4)} else{if(array[3]=="-"){left(4)}}}};
            break;
        case 5:
            if(array[2]=="-"){up(5)} else {if(array[4]=="-"){left(5)} else {if(array[8]=="-"){down(5)}}};
            break;
        case 6: 
            if(array[3]=="-"){ up(6)} else { if(array[7]=="-"){right(6)}};
            break;
        case 7: 
            if(array[6]=="-"){left(7)} else{if(array[4]=="-"){up(7)} else{if(array[8]=="-"){right(7)}}};
            break;
        case 8: 
            if(array[5]=="-"){up(8)} else { if(array[7]=="-"){left(8)}};
            break;
        

    }


    cargar();
    
}

function right(i){
    var x = array[i+1];
    array[i+1]=array[i];
    array[i] = x;
}

function left(i){
    var x = array[i-1];
    array[i-1]=array[i];
    array[i] = x;
}

function down(i){
    var x = array[i+3];
    array[i+3]=array[i];
    array[i] = x;
}

function up(i){
    var x = array[i-3];
    array[i-3]=array[i];
    array[i] = x;
}

