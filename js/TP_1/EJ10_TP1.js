var numero = prompt('Ingrese un Numero')
if ( ((numero % 2) == 0) ||((numero % 3) == 0) ||((numero % 5) == 0) ||((numero % 7) == 0)){
    document.write('El Numero es divisible por 2, 3, 5 o 7');
}  else { document.write('El Numero no es Divisible por 2, 3, 5 o 7')}