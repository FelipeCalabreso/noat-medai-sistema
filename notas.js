alert("codigo a seguir");
function somar(){
 x=parseFloat(document.getElementById("n1").value);
 y=parseFloat(document.getElementById("n2").value);
 z=parseFloat(document.getElementById("n3").value);
 bim=2*z;
 soma=x+y+bim;
 media=soma/4;
document.getElementById("resultados").value=media;
if(media>=6){
    document.getElementById("resultados").style.borderColor="green";
}
else{
document.getElementById("resultados").style.borderColor="red";

}
}
