// var i = 0;
// console.log(++i)
// console.log(i++)
// console.log(i);
// i = 10;
// console.log(i++ * 5)
// console.log(i)
// i = 10;
// console.log(++i * 5)
// console.log(i)

// alert("Hello Word!!!");

// // pedir un numero para que ingrese el usuario
// var num;
// num = parseInt(prompt("Ingrese un numero"));
// var num1;
// num1 = parseInt(prompt("Ingrese un numero"));

// //Muestro los numeros ingresados por el usuario
// console.log("La suma entre num y num1 es:", (num + num1));

/*--------------------------------------------*/
// console

// // Se utiliza "let" en lugar de "var"
// console.log("Antes: ", p); //Antes: undefined
// for (let p = 0; p < 3; p++) {
//     console.log("-", p); // Durante: 0, 1, 2
//     console.log("Después: ", p); //Después: undefined

//     // Con "var"
//     console.log("Antes: ", p); //Antes: undefined
//     for (var p = 0; p < 3; p++) {
//         console.log("- ", p); //Durante: 0, 1, 2
//         console.log("Despues: ", p); //Después: 3
//     }
// }


//Mostrar mensajes por consola
console.log("Este es un mensaje sin clasificar");
console.info("Mensaje de informacion");
console.error("Este es un mensaje de error");
console.warn("Estke es un mensaje de alerta");
console.dir(document.links); // Imprime una representacion del objeto
console.dirxml(document.links); // Lo mismo que en la anterior, pero en XML
//console.clear(); // Limpia la consola

// Dar formato a mensajes de consola con CSS
console.log("%cMensaje de color verde y grande", "color:green; font-size: x-large");
console.log("%cMensaje de color rojo y grande", "color:red; font-size: xx-large");
console.log("%cMensaje de color naranja, grande y con otro tipo de letra", "color: orange; font-size: xxx-large; font-family: serif");

console.clear();

/* var numero = 2;

function miFuncion() {
    var numero = 9
    document.write(numero) // imprime el 9
}
document.write(numero) // imprime el 2 */


// Concatenacion de datos
console.log("Concatenando datos:\n\n");

console.log("La suma de 5 + 5 es igual a: ", 5 + 5);
console.log("Si yo tengo", 2021 - 1997, "años este año. Entonces el año que entra tendre", 2022 - 1997);
console.log("Si Juan tiene 20 manzanas y vende 7. Cuantas manzanas le quedan a Juan??");
console.log("Respuesta: a Juan le quedan", 20 - 7, "manzanas en total.");

// Trabajando con document.write()
document.write("Hola mundo en el documento HTML!!!<br><br>");
document.write("Imprimo una concatenacion de datos en HTML:<br><br>");
document.write("Si yo tengo ", 2021 - 1997, " años este año. Entonces el año que entra tendre ", 2022 - 1997, " años.");


// Modifico contenido del HTML por medio de la etiqueta "id" del elemento
document.getElementById("p1").innerHTML = "Modificado en JS";

console.log("______________________________________________________________")
    // identificando los tipos de datos de variables, se imprime en consola el resultado
console.log("Identificando tipos de datos en variables:\n\n");

var a = "texto";
var b = 23;
var c = true;
var d = 23.0;
var e;

console.log(typeof(a)); //String
console.log(typeof(b)); //number
console.log(typeof(c)); //boolean
console.log(typeof(d)); //number
console.log(typeof(e)); //Undefined

console.log("______________________________________________________________")
    // Uso funciones parseInt() y parseFloat()
console.log("Utilizando parseInt():\n\n");
// parseInt()
var a = "24";
var b = "8ea0ae7878";
var c = "77.2";
var d = "1111";

//convierto a int y guardo valores en las mismas variables
a = parseInt(a);
b = parseInt(b); //Si se encuentra con valores que no sean numericos se detiene.
c = parseInt(c); //redondea
d = parseInt(d);

// imprimo en consola
console.log(a); //24
console.log(b); //8
console.log(c); //77
console.log(d); //1111

console.log("\n\nUtilizando parseInt() y agregando una base:\n\n");
// Aparte de convertirlo a int, tambien le asigno una base
a = parseInt(a, 16); //base hexadecimal
b = parseInt(b, 10); //base decimal
c = parseInt(c, 8); //base octal
d = parseInt(d, 2); //base binario

// imprimo valores en consola
console.log(a); //36
console.log(b); //8
console.log(c); //63
console.log(d); //15

/*-----------------------------------------------------------*/
console.log("\n\nUtilizando parseFloat():\n\n");
//parseFloat()
var a = "2.04";
var b = "ee7.05";
var c = "77.2";
var d = "3.1e+89";

// Convierto a valores Flotantes
a = parseFloat(a);
b = parseFloat(b);
c = parseFloat(c);
d = parseFloat(d);

// Imprimo en consola
console.log(a); //2.04
console.log(b); //NaN, porque no empieza con valores numericos
console.log(c); //77.2
console.log(d); //3.1e+89

/*-----------------------------------------------------------------*/
/*-----------------------------------------------------------------*/

//Utilizando operadores de asignacion
console.log("______________________________________________________________");
console.log("Operadores de asignacion:\n\n");

var a = 3;
console.log("Operador de 'asignacion' (=): [var a = 3], se almacena un", a, "en a.");

var a;
var b = 3;
a += b; // va a dar 6 porque anteriormente "a" tenia un 3 almacenado
console.log("Operador de 'suma lo indicado' (+=): [a += b], se almacena un", a, "en a.");

var a;
var b = 2;
a -= b; // va a dar 4 porque anteriormente se almaceno un 6 en "a"
console.log("Operador de 'resta lo indicado' (-=): [a -= b], se almacena un", a, "en a.");

var a;
var b = 10;
a *= b; // va a dar 40 porque anteriormente se almaceno un 4 en "a"
console.log("Operador de 'multiplica lo indicado' (*=): [a *= b], se almacena un", a, "en a.");

var a;
var b = 8;
a %= b; // va a dar 0 porque anteriormente se almaceno un 40 en "a"
console.log("Operador de 'calcula el modulo por lo indicado' (%=): [a %= b], se almacena un", a, "en a.");

console.log("\n\nOperadores de incrmento y decremento:\n\n");

var a;
var b = 10;
a += b; //almacena un 10
++a; // Va a dar 11, ya que "a" almaceno un 10 anteriormente
console.log("Operador de 'Incrementa en 1 antes de operar' (++i): Se almacena un", a, "en a.");


var a;
var b = 2;
a -= b; //almacena un 9
a++; // Va a dar 10, ya que "a" almaceno un 9 anteriormente
console.log("Operador de 'Incrementa en 1 despues de operar' (i++): Se almacena un", a, "en a.");


var a;
var b = 2;
a += b; // almacena un 12
--a; // Va a dar 11, ya que "a" almaceno un 12 anteriormente
console.log("Operador de 'Decrementa en 1 antes de operar' (--i): Se almacena un", a, "en a.");


var a;
var b = 4;
a += b; // almacena un 15
a--; // Va a dar 14, ya que "a" almaceno un 15 anteriormente
console.log("Operador de 'Decrementa en 1 despues de operar' (i--): Se almacena un", a, "en a.");


/*-----------------------------------------------------------------*/
/*-----------------------------------------------------------------*/

//Concatenacion de cadenas
console.log("______________________________________________________________");
console.log("\n\nConcatenacion de cadenas:\n\n");

console.log("Concatenacion con operador (+):");
var cadena1 = "Hola Mundo!!!";
var cadena2 = ", esta es una concatenacion de cadenas";
console.log(cadena1 + cadena2);

console.log("\nConcatenacion con operador (+=):");
var cadena3 = "Esta es otra manera ";
var cadena4 = "de realizar la concatenacion.";
console.log(cadena3 += cadena4);

// cadenas y numeros
console.log("\nSi son dos numeros, se devuelve una suma:");
var num = 1;
var num2 = 2;
console.log(num + num2);

console.log("\nSi es una cadena y un numero, se devuelve una concatenacion:");
var num = "1";
var num2 = 2;
console.log(num + num2);


/*-----------------------------------------------------------------*/
/*-----------------------------------------------------------------*/

//Mensaje emergente de alerta
console.log("______________________________________________________________");
console.log("\n\nUtilizacion de 'alert()':\n\n");

alert("Bienvenido a JavaScript!!!");


/*-----------------------------------------------------------------*/
/*-----------------------------------------------------------------*/

//Ventana de ingreso de datos emergente
console.log("______________________________________________________________");
console.log("\n\nUtilizacion de 'prompt()':\n\n");

var dato1 = prompt("Ingrese su nombre:");
var dato2 = prompt("Ingrese su apellido:");
var dato3 = prompt("Ingrese su edad:");
document.write("<br><br><h4>Hola " + dato1 + " " + dato2 + " tu edad es de " + dato3 + ", puedes continuar en el sitio.</h4>");

// sumo valores ingresados, pero antes los convierto a tipo "Int"
var dato4 = parseInt(prompt("Ingrese un numero:"));
var dato5 = parseInt(prompt("Ingrese un numero para sumarle al anterior:"));
var datoR;
datoR = dato4 + dato5;
document.write("La cuenta da: " + datoR);

// Reconvierto los valores a tipo String y los muestro en pantalla concatenados
var dato6 = dato4.toString();
var dato7 = dato5.toString();
document.write("<br><br>Los datos ingresados para la suma fueron el " + dato6 + " y se le sumo un " + dato7 + " . Dando como resultado " + datoR);