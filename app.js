/* En el HTML se tiene generado una "Caja" que podemos usar para poner el título
así por ejemplo tomaremos para escribir algo en el container_texto del HTML h1*/

/*let titulo = document.querySelector('h1'); // se carga el titulo del onbjeto caja 
titulo.innerHTML = 'Juego del Número Secreto';*/

// Ahora para usar la opcion del parrafo podemos usaarlo para dar la indicación

/*let parrafo = document.querySelector('p');
parrafo.innerHTML = 'Indica el número del 1 al 10';*/




let numeroSecreto = 0;//en ambito de la variable es global
//console.log(numeroSecreto);
let intentos = 0; 
let listaNumerosSorteados = [];
let numeroMaximo = 10;
let intentosMaximo = 3; 
let intentosPermitidos = intentosMaximo;

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento); // se carga el elemento que se desea mostrar 
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
        let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
        //console.log (typeof(numeroDeUsuario));
        //console.log(numeroSecreto);
        //console.log(typeof(numeroSecreto));
        //console.log(numeroDeUsuario);
        //console.log(numeroDeUsuario===numeroSecreto); // Booleano
        if (numeroDeUsuario === numeroSecreto){
            
            asignarTextoElemento('p',`Acertasate el número en ${intentos} ${(intentos===1) ? 'vez' : 'veces'}`); // ahora se realizará con temple string
            //asignarTextoElemento('p','Acertasate el número'); // en el mismo parrafo o lugar donde se muestra que 
            // se ingrese un número del 1 al 10, ahora se mostrará si se acerto!
            //Dentro de una funcion se llama a otra funcion esto es gracias a que primero 
            // se cargan todas las funciones y al final lo que yo conozco como el main 
        
            // Para habilitar el boton de nuevo juego, lo haremos modificando el atributo disabled
            // en esta ocasion se usanra el getElementID en lugar del querySelect(#) recordar 
            // que el gato es para dar el ID del elemento a modificar
            document.getElementById('reiniciar').removeAttribute('disabled');

        }
        else{
            // El usuario no acerto
            if (numeroDeUsuario>numeroSecreto){
                asignarTextoElemento('p','El número secreto es menor');
            }
            else{
                asignarTextoElemento('p','El número secreto es mayor');
            }
            intentos++;
            intentosPermitidos--;
            limpiarCaja(); // se limpia la caja

        }
                
        if (intentosPermitidos==0){
        asignarTextoElemento('p',`Llegaste al máximo numero de intentos que es ${intentosMaximo}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
        }
        
        return;
    }
/*function   verificarIntento() {
    alert('click desde el botorn intentar');
    return;
}*/

function limpiarCaja(){
    //let valorCaja = document.querySelector('#valorUsuario');
    // valorCaja.value = '';  // el dejar las dos comillas solas indica vacio
    document.querySelector('#valorUsuario').value=''; // una forma reducida de lo anterior

}

function generarNumeroSecreto() {
   // let numeroSecreto=Math.floor(Math.random()*10)+1; //generar un numero aleatorio, se redondea al entero mas cercano inferior y se le suma uno para que sea de 1 a 10 esto porque se multiplicó por 10
   // pero si se declara la variable numeroSecreto de manera global aqui ya no se 
   //declara ya que el ambito o alcance de la misma sera de bloque.  
   //así se propone mejor usar dentro del retunr todo

   //return numeroSecreto;      //retorna el numeroSecreto generado

   let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
   // si el numero Generado esta incluido en la lista 

   // para salir de recursivisad, si ya salieron todos los numeros salir del juego
    if (listaNumerosSorteados.length==numeroMaximo){
        asignarTextoElemento('p','Ya se sortearon todos los números posibles');
    }
    else{

        if (listaNumerosSorteados.includes(numeroGenerado)) { // si el numero sorteado ya está en lista
            // cuando la condicion del if arroja true or false no hay necesidad de poner el == 1
            //hay una funcion de include recorreo el arreglo y dice si es verdadero o falso
            // una funcon se pude llamar a si misma para generar otro numero hasta generar un numero que no 
            //haya sido generado
                return generarNumeroSecreto(); // a esto se le llama recursividad, se reejcuta la misma funcion las veces necesarias hasta que el numero 
                // generado sea diferente a los ya generados.
                // aqui el problema es que solo funcionaria 10 veces porque solo diez numeros son diferentes, 
                // para evitar esto tenemos que poner una condición de salida que rompa la recursividad
        } 
        else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
}
}

function condicionesInicales(){
asignarTextoElemento('h1','Juego del Número Secreto');
asignarTextoElemento('p',`Indica el número del 1 al ${numeroMaximo}`);
numeroSecreto = generarNumeroSecreto();
intentos=1;
intentosPermitidos = intentosMaximo;

}

function reinicarJuego(){
// Limpiar la caja

limpiarCaja();

// Indicar mensaje de inicio de dar un numero entre 1 y 10

condicionesInicales();

// Generar un nuevo número secreto
//numeroSecreto = generarNumeroSecreto(); lo pongo tambien en condiciones iniciales
// Inicializar el número de intentos
//ntentos++; mejor lo ponemos en una función de condiciones iniciales
// Deshabilitar el boton de nuevo juego

document.querySelector('#reiniciar').setAttribute('disabled','true');

}

condicionesInicales();





/*function hola() {

    console.log('¡Hola,mundo!');
}
hola();*/


/*
let nombre =prompt('¿cual es tu nombre');
function hola(){
console.log(`¡Hola, ${nombre}!`);
return;
}
hola();*/


/*let numeroUsuario =prompt('Dame un número');
function dobleNumero(){
    console.log(`¡ El doble del número que ingresaste es: ${numeroUsuario*2}!`);
return;
}
dobleNumero();*/

/*alert('Vamos a obtener el promedio de tres números')

let i =1;
let numero = [];
let suma=0;
let media =0; 

while(i<4){
    let valor = parseInt(prompt ('Dame el número' + i + ':'));
    numero[i-1]=  valor;
    suma += numero[i-1];
    i++;
}

function promedio(){
    let media= suma/numero.length;
    console.log (`El promedio es: ${media}`);
}

promedio();
console.log(suma);*/

/*let numero = [];
let indice = 1;
alert('vamos a determinar cuál de dos números que introduscas es el mayor');
while (indice<3){
let valor = parseInt(prompt('Dame el número ' + indice +':'));
numero[indice-1]=valor;
    indice++;
}

function mayor(){
    if (numero[0]>numero[1]){
        alert(`El número ${numero[0]} es el mayor`);
    }
    else{
        alert(`El número ${numero[1]} es el mayor`);
    }
}

mayor();*/


/*alert('Vamos a obtener el cuadrado de un número');
function cuadrado(){
    let numero = parseInt(prompt('Introduce un número'));
    //alert(`El cuadrado de ${numero} es ${numero*numero}`);
    //alert(`El cuadrado de ${numero} es ${numero**2}`); // con operador exponente **
    alert(`El cuadrado de ${numero} es ${Math.pow(numero,2)}`); // con Math.pow
}

cuadrado();*/

/*
let nota1 = 7;
let nota2 = 6;
let nota3 = 3;
let nota4 = 5;
let promedio =0;
function calcularPromedio(nota1, nota2, nota3, nota4){
        promedio = (nota1 +  nota2 +  nota3 +  nota4)/4
        return promedio;
}

function verificarAprobacion(promedio){
   
         return promedio >= 5 ? "Aprobado" : "Reprobado";
        
}

calcularPromedio(nota1,nota2, nota3, nota4);
let resultado = verificarAprobacion(promedio);
console.log(resultado);*/


/*let altura = 1.70;
let masa = 107;
//let perro = 'salchicha'; 
indiceMasaCorporal=0;
 function IMC(){
    indiceMasaCorporal=(masa/altura**2);
    return indiceMasaCorporal;
 }

 IMC();*/


 /*let numero = 10;
 let factorialNumero=1;
 function factorial(){
    while(numero>0){
        factorialNumero=factorialNumero*numero;
        numero--;
    }
    return (factorialNumero);
 }
 factorial();
 console.log(factorialNumero);*/

 /*let pesos = 100;
 let dolares = 0;
 function cambio(){
    dolares = pesos/18;    
 }
 cambio();
 console.log(dolares);*/

 /*let ancho = 10;
 let altura= 8;
 //let areaSala = 0; // con el return no hay necesidad de declarar la variabla global
 function area(){
    areaSala=ancho*altura;
    return(areaSala);
 }
function perimetro(){
    perimetroSala=ancho*2+altura*2;
    return(perimetroSala);
}

area();
perimetro();
console.log(areaSala);
console.log(perimetroSala);*/


/*let radio = 10;
  
function area(){
    areaSala=3.14*radio**2;
    return(areaSala);
 }
function perimetro(){
    perimetroSala=2*3.14*radio;
    return(perimetroSala);
}

area();
perimetro();
console.log(areaSala);
console.log(perimetroSala);*/

/*alert('Vamos a aprender las tablas de multiplicar');
let numero = prompt ('Dame el número que deses construir su tabla de multiplicar');
let resultados =[];
function tablaMultiplicar(){
    for(let i=1; i<=10;i++){
        resultados.push(`${numero} X ${i} = ${numero*i}`);
    }
    return resultados.join("\n"); // Se convierte el arreglo en texto con saltos de linea
    
}

let mensaje = tablaMultiplicar(numero);

alert("Tabla del " + numero + ":\n" + mensaje);*/

/*let listaGenerica=[];
let lenguajesDeProgramacion = ["JavaScript", "C", "C++","Kotlin","Python"];
lenguajesDeProgramacion.push("Java");
lenguajesDeProgramacion.push("Ruby");
lenguajesDeProgramacion.push("GoLand");

function mostrar(){
    console.log(lenguajesDeProgramacion);
    return;
}
function invertido(){
    // reverse hace el orden inverso de un arreglo en javascript
    console.log(lenguajesDeProgramacion.reverse());
    return;
}
mostrar();
invertido();*/

/*let elementos = [3,4,5,6];
//console.log(elementos);
function promedioElementos(){
    // con reduce puedo sumar los valores del arreglo
    let suma = elementos.reduce((acumulador, valor) => acumulador + valor, 0);
    let promedio = suma/elementos.length;
    return promedio;
}
let promedio=promedioElementos();
console.log(promedio);*/

/*let lista = [3,6,4,8,1,9];
function mayorNumero(){
    //para poder lograr que Math.max recorra toda la lista, se debe usar el operador spread ...
   return Math.max(...lista);
    
}
function menorNumero(){
    return Math.min(...lista);
    
}
let mayor=mayorNumero();
let menor=menorNumero();
console.log(mayor);
console.log(menor);*/


/*let lista = [3,6,4,8,1,9];
let seleccion = parseInt(prompt('Introduce el numero que deseas mostrar'),10);
function posicion(){
//usaré la funcion .index0f que devuelve el indice de un elemento deseado
    return lista.indexOf(seleccion);
}
let pos = posicion();
// usare el operador ternario en lugar de if y el template string para mostrar la posición
console.log(`El numero ${seleccion} ${(pos!==-1) ? `esta en la posición ${pos}` : 'no está en la lista'}`);*/

/*let lista1=[1,2,3,4,5,6,7,8];
let lista2=[8,7,6,5,4,3,2,1];

function sumaListas(){
// la función .map que a partir de un arreglo crea otro, en este ejemplo, a partir de
// todos los elementos de la lista 1 se crea un nuevo arreglo que incluye todos los elementos de la
//lista1 y le suma los elementos de la lista2
    return lista1.map((valor,indice) => valor + lista2[indice]);
}

let suma = sumaListas();
console.log(suma);*/

/*let lista1=[1,2,3,4,5,6,7,8];
function cuadrado(){
    return lista1.map((valor,indice) => valor**2);
}
let resultado = cuadrado();
console.log(resultado);*/