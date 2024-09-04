/*
*Solicitar al usuario una calificación (entre 1 y 10). Luego se debe comprobar que el número efectivamente esté en ese rango, si no lo está imprima un mensaje de error. Si lo está, imprima “reprobado” si la calificación es inferior a 6, “regular” si está entre 6 y 8, “bien” si es 9, y por último, “excelente” si es 10.
*/

const calificacion = Number(prompt('Escriba una calificación de 1 a 10'));

function resultado(calificacion){
    if (isNaN(calificacion)){
        alert('No introdujo un numero válido');
    } else if (calificacion > 10 || calificacion < 1) {
        alert('El rango es incorrecto, vuelva a intentar');
    } else if(calificacion < 6){
        alert('Reprobado');
    } else if(calificacion >= 6 && calificacion <=8){
        alert('Regular');
    } else if(calificacion === 9 ){
        alert('Bien');
    } else if(calificacion === 10 ){
        alert('Excelente');
    }
}

resultado(calificacion);