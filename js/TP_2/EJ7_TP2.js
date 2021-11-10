let i=prompt('ingrese un numero no mayor a 50');

if (i>50){
let i = prompt('ingrese un numero valido');
}
else{
do{
    for(let j=1; j<=i;j++){
        document.write(i);
    }
    i--;
    document.write("<br>");
}while(i>=1)

document.write("<br>FIN.")}