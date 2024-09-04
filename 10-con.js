/* Un conocido portal de educación en tecnología está ofreciendo programas para aprender a desarrollar aplicaciones.Escribe un programa que le indique a la persona interesada cuánto deberá pagar mensualmente de acuerdo a la opción elegida.
El programa educativo contempla 3 diferentes niveles, cada uno con su costo mensual: 
Course: $4999 MXN
Carrera $3999 MXN
Master: $2999 MXN
Adicionalmente preguntar si cuenta con alguna beca y aplicar el descuento correspondiente al precio final.
Beca Facebook: 20 % de descuento.
Beca Google: 15 % de descuento.
Beca Jesua: 50 % de descuento.
    Finalmente, además del precio mensual con descuento, indicar al usuario cuánto gastaría en total por el curso elegido, tomando en cuenta las siguientes duraciones:
Course: 2 meses
Carrera 6 meses
Master: 12 meses */
const progEdu = prompt('Elige entre tres tipos de programas educativos que tenemos, Course: $4999mxn, Carrera: $3999mxn, Master: $2999mxn, todo esto por mes').trim().toLowerCase();
const desc = prompt('Tienes algun descuento, elige uno, Facebook, Google, Jesua').trim().toLowerCase();

let precio;
let beca;
let meses;

switch (progEdu) {
    case 'course':
        meses = 2;
        precio = 4999;
        precio = meses * precio;
        break;
    case 'carrera':
        meses = 6;
        precio = 3999;
        precio = meses * precio;
        break;
    case 'master':
        meses = 12;
        precio = 2999;
        precio = meses * precio;        
        break;
}

switch (desc) {
    case 'facebook':
        beca = (precio * 20) / 100;
        precio -= beca;
        break;
    case 'google':
        beca = (precio * 15) / 100;
        precio -= beca;
        break;
    case 'jesua':
        beca = (precio * 50) / 100;
        precio -= beca;
        break;
    default:

        break;
}

if (progEdu && desc === 'no' || progEdu && !desc){
    alert(`Has elegido ${progEdu}, tiempo del curso es de ${meses} meses, y el total de tu precio sin descuent es de  $${precio}MXN`);
} else if (progEdu && desc) {
    alert(`Has elegido ${progEdu}, tiempo del curso es de ${meses} meses, y el total de tu precio con el decuento de ${desc} es $${precio}MXN`);
}else {
    alert(`Has escrito el programa educativo incorrecto, elegiste ${progEdu}`);
}