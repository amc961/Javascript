let i = 1

do {
    
document.write (i)
if (i % 4 == 0){
    document.write('Es multiplo de 4')
}
if (i % 9 == 0){
    document.write('Es multiplo de 9')
}
if (i % 5 == 0){
    document.write('-')
}
document.write('</br>')
i++;
} while(i<=500)
