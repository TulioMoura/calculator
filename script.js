var valor1=0;
var valor2='x'
var tipo=false;
var resultado=0;
var opera;

var tela;
var neg1=false;
var neg2=false;
num=[];

/* for(var i=0;i<10;i++){
    num[i] =document.getElementsByTagName("button")[i];
} */

var num0=document.getElementById("n0");
var num1=document.getElementById("n1");
var num2=document.getElementById("n2");
var num3=document.getElementById("n3");
var num4=document.getElementById("n4");
var num5=document.getElementById("n5");
var num6=document.getElementById("n6");
var num7=document.getElementById("n7");
var num8=document.getElementById("n8");
var num9=document.getElementById("n9");


var div0 =document.getElementById("div");
var mult0=document.getElementById("mult");
var soma0=document.getElementById("soma");
var sub0 =document.getElementById("sub");
var igual0=document.getElementById("igual");
var result=document.getElementById("rst");
var reset=document.getElementById("limp");
var ponto=document.getElementById("dot");
var nega=document.getElementById("neg");

div0.addEventListener('click',divi);
mult0.addEventListener('click',multi);
soma0.addEventListener('click',soma);
sub0.addEventListener('click',subt);

igual0.addEventListener('click',igual);

/* for(var i=0;i<10;i++){
    num[i].addEventListener('click', dig);
    
    function dig(){
        if(tipo==false){
            valor1=valor1+String(i);
        }
        else {
            valor2=valor2+String(i);
            
        }
        atualizatela();
     console.log(i)
    
    }

} */

num1.addEventListener('click',numero1);
num2.addEventListener('click',numero2);
num3.addEventListener('click',numero3);
num4.addEventListener('click',numero4);
num5.addEventListener('click',numero5);
num6.addEventListener('click',numero6);
num7.addEventListener('click',numero7);
num8.addEventListener('click',numero8);
num9.addEventListener('click',numero9);
num0.addEventListener('click',numero0);

reset.addEventListener('click',zerar);
ponto.addEventListener('click',decimal);
nega.addEventListener('click',men0);

function dig(j){
    if(tipo==false){
        valor1=valor1+String(j);
    }
    else {
        valor2=valor2+String(j);
        
    }
    atualizatela();
 console.log(i)

}

function zerar(){
    limpar();
    atualizatela();
}


function limpar(){
     valor1=0;
     valor2='x'
     tipo=false;
     resultado=0;
     opera;
     tela;
     neg1=false
     neg2=false;
    

}

function atualizatela(){
    if(tipo==false){
    tela=Number(valor1);}
    else {
        tela=Number(valor2);
    }
    result.value=tela;
}

function igual(){
    
    if(opera=='d'){
        dividir();
    }
    else if(opera=='m'){
        multiplicar();
    }
    else if(opera=='sm'){
        somar();
    }
    else if(opera=='sb'){
        subtrair();
    }
    result.value=resultado;
    console.log(resultado)
    

}
function mudar(){
    tipo=true;
    valor2=0;
}
function divi(){
    if(valor2!='x'){
        
        igual();
        valor1=resultado;
        valor2='x'
    }

    opera='d';
    mudar();
}
function multi(){
    if(valor2!='x'){
        
        igual();
        valor1=resultado;
        //valor2='x'
    }
    mudar();
    opera='m';
}
function soma(){
    if(valor2!='x'){
        
        igual();
        valor1=resultado;
        //valor2='x'
    }
    mudar();
    opera='sm';
}
function subt(){
    if(valor2!='x'){
        
        igual();
        valor1=resultado;
        //valor2='x'
    }
    mudar();
    opera='sb';
}

function dividir(){
    let p=Number(valor1);
    let s=Number(valor2);
    if(neg1==true){
        p=p*-1
    }
    if(neg2==true){
        s=s*-1
    }
    resultado=p/s;
    
}
function multiplicar(){
    p=Number(valor1);
    s=Number(valor2);
    if(neg1==true){
        p=p*-1
    }
    if(neg2==true){
        s=s*-1
    }
    resultado=p*s;
}
function somar(){
    p=Number(valor1);
    s=Number(valor2);
    if(neg1==true){
        p=p*-1
    }
    if(neg2==true){
        s=s*-1
    }
    resultado=p+s;
}
function subtrair(){
    p=Number(valor1);
    s=Number(valor2);
    if(neg1==true){
        p=p*-1
    }
    if(neg2==true){
        s=s*-1
    }
    resultado=p-s;
}

function numero1(){
    
    if(tipo===false){
        valor1=valor1+"1";
    }
    else {
        valor2=valor2+"1";
    }
    atualizatela();
}
function numero2(){
    if(tipo===false){
        valor1=valor1+"2";
    }
    else {
        valor2=valor2+"2";
    }
    atualizatela();
}
function numero3(){
    if(tipo===false){
        valor1=valor1+"3";
    }
    else {
        valor2=valor2+"3";
    }
    atualizatela();
}
function numero4(){
    if(tipo===false){
        valor1=valor1+"4";
    }
    else {
        valor2=valor2+"4";
    }
    atualizatela();
}
function numero5(){
    if(tipo===false){
        valor1=valor1+"5";
    }
    else {
        valor2=valor2+"5";
    }
    atualizatela();
}
function numero6(){
    if(tipo===false){
        valor1=valor1+"6";
    }
    else {
        valor2=valor2+"6";
    }
    atualizatela();
}
function numero7(){
    if(tipo==false){
        valor1=valor1+"7";
    }
    else {
        valor2=valor2+"7";
    }
    atualizatela();
}

function numero8(){
    if(tipo===false){
        valor1=valor1+"8";
    }
    else {
        valor2=valor2+"8";
    }
    atualizatela();
}
function numero9(){
    if(tipo===false){
        valor1=valor1+"9";
    }
    else {
        valor2=valor2+"9";
    }
    atualizatela();
}
function numero0(){
    if(tipo===false){
        valor1=valor1+"0";
    }
    else {
        valor2=valor2+"0";
    }
    atualizatela();
}

function decimal(){
    if(tipo===false){
        valor1=valor1+".";
    }
    else {
        valor2=valor2+".";
    }
    atualizatela();

}

function men0(){
    if(tipo===false){
        neg1=true
        
    }
    else {
        neg2=true
        
        
    }
    


    atualizatela();


}
