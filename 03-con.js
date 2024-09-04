const numDiv = prompt('Escribe un numero para saber si es divisible entre 2');
const par = numDiv % 2;
if (par === 0) {
    alert(`El numero ${numDiv} es par`)


} else {
    alert(`El numero ${numDiv} no es par`)

}
console.log(par);