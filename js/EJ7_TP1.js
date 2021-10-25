var numero1 = prompt('Escriba el numero 1');
var numero2 = prompt('Escriba el numero 2');
var numero3 = prompt('Escriba el numero 3');
if((numero1 < numero2 && numero3 < numero2) || (numero2 == numero3 && numero2 > numero1)){
    document.write('El numero: '+ numero2 +' es el mayor');
} else{ if(numero1 == numero2 && numero2 == numero3){
    document.write('Los numeros son iguales');
} else{ if ((numero1 > numero2 && numero1 > numero3) || (numero1 == numero2 && numero1 > numero3)) 
    { document.write('El numero: '+ numero1 +' es el mayor')}
  else { document.write ('El numero '+ numero3 +' es el mayor')}
}}