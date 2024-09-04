const numero1 = Number(prompt('Introduce el primer numero'));
const numero2 = Number(prompt('Introduce el segundo numero'));
const numero3 = Number(prompt('Introduce el tercer numero'));

function mayorDeTres(numero1, numero2, numero3){
    if(numero1 === numero2){
        alert(`El número 1 ${numero1} es igual al número 2 ${numero2}`);
    } else if (numero1 === numero3){
        alert(`El número 1 ${numero1} es igual al número 3 ${numero3}`);
    }else {
        let mayor;
        if(numero1 > numero2 && numero1 > numero3){
            mayor = numero1;
        }else if (numero2 > numero1 && numero2 > numero3) {
            mayor = numero2;
        } else{
            mayor = numero3;
        }
        alert(`El número mayor es ${mayor}`);
    }

}
mayorDeTres(numero1, numero2, numero3);