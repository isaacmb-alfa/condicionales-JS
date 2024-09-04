/*
* Requerir al usuario que ingrese un día de la semana e imprimir un mensaje si es lunes, otro mensaje diferente si es viernes, otro mensaje diferente si es sábado o domingo. Si el día ingresado no es ninguno de esos, imprimir otro mensaje.
 */

const dia = prompt('Introduce un día de la semana si acentos').trim().toLowerCase();

switch (dia) {
    case 'lunes':
        alert(`A empezar la semana con todas las ganas que es ${dia}`);
        break;
    case 'viernes':
        alert(`Por fin es ${dia}`);
        break;
    case 'sabado':
    case 'domingo':
        alert(`A descansar que es ${dia}`);
        break;
    default:
        alert(`Lo siento no tengo nada que decir en ${dia}`);
        break;
}