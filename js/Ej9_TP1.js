let frase = prompt("ingrese una frase");

console.log(frase);
console.log(frase.length);
console.log(frase.charAt(0));


for(let posicion = 0; posicion < frase.length; posicion++ ){
    if(frase.charAt(posicion) =="a" || frase.charAt(posicion) =="e" || frase.charAt(posicion) =="i" || frase.charAt(posicion) =="o" || frase.charAt(posicion) =="u" ||
    frase.charAt(posicion) =="A" || frase.charAt(posicion) =="E" || frase.charAt(posicion) =="I" || frase.charAt(posicion) =="O" || frase.charAt(posicion) =="U"){
    document.write (frase.charAt(posicion));}
}
