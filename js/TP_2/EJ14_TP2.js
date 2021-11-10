let palabra = prompt('escriba una cadena de texto')
console.log(palabra.length)

for(let i=0; i<=palabra.length; i++){
    document.write(palabra.charAt(i)+'-')
}