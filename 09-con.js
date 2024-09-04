/*
Escribe un programa que responda a un usuario que quiere comprar un helado en una conocida marca de comida rápida cuánto le costará en función del topping que elija.
El helado sin topping cuesta 50 MXN.
El topping de oreo cuesta 10 MXN.
El topping de KitKat cuesta 15 MXN.
El topping de brownie cuesta 20 MXN.
En caso de no disponer del topping solicitado por el usuario, el programa le indicará “no tenemos este topping, lo sentimos.” y a continuación le informará el precio del helado sin ningún topping.
*/

const topping = prompt('¿Quieres un topping para tu helado, escribe uno, Oreo, KitKat, Brownie').trim().toLowerCase();
let precio = 50

if(topping === 'no'){
    alert(`El precio de tu helado es $${precio} MXN`);
} else if(topping === 'oreo'){
    precio += 10;
    alert(`El precio de tu helado es $${precio} MXN`);
}else if(topping === 'kitkat') {
    precio += 15;
    alert(`El precio de tu helado es $${precio} MXN`);
}else if(topping === 'brownie') {
    precio += 20;
    alert(`El precio de tu helado es $${precio} MXN`);
} else {
    alert(`Lo sentimos, no tenemos el topping que elegiste, el precio de tu helado es $${precio} MXN`);
}