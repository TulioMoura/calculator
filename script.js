var valor1=0;
var valor2='x'
var tipo=false;
var resultado=0;
var opera;
var fpPrecision=5;
const screenSize = 10
var tela;
var neg1=false;
var neg2=false;
num=[];

/* for(var i=0;i<10;i++){
    num[i] =document.getElementsByTagName("button")[i];
} */


var div0 =document.getElementById("div");
var mult0=document.getElementById("mult");
var soma0=document.getElementById("soma");
var sub0 =document.getElementById("sub");
var igual0=document.getElementById("igual");
var result=document.getElementById("rst");
var reset=document.getElementById("limp");
var sqr=document.getElementById("sqr");

var numbers = document.querySelectorAll("#num");

div0.addEventListener('click',divi);
mult0.addEventListener('click',multi);
soma0.addEventListener('click',soma);
sub0.addEventListener('click',subt);
sqr.addEventListener('click',squareRoot)

igual0.addEventListener('click',igual);

for(let i=0; i<11, i++;){
    numbers[i].addEventListener("click",number)
}



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



reset.addEventListener('click',zerar);
ponto.addEventListener('click',decimal);
nega.addEventListener('click',men0);

function number(){
    console.log('e')
}

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

function intSize(value){

    let cnt=0
    while(value>10){
        value=value/10;
        cnt++
    }
    return cnt;
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
    result.innerText=tela;
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
    else if(opera=='sqr'){
        raiz();
    }
    console.log(resultado)
    fpPrecision = screenSize-intSize(resultado)
    valor1=resultado;
    valor2=0;
    if(resultado-Math.floor(resultado)!=0){
        result.innerText=resultado.toFixed(fpPrecision);
    }
    else(result.innerText=resultado)
    
    
    opera=''
    

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

function squareRoot(){
    console.log(valor1)
    opera = 'sqr'
    mudar();
    igual();
    valor1=resultado;
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

function raiz(){
    vl=Number(valor1);
    if(neg1==true){
        resultado=0
    }
    else{
    resultado=Math.sqrt(vl);  
    }
    
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
