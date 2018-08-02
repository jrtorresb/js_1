
console.log(1+2);

// var camelCase
// RUBY : snake_case

/**
 * Tipo de datos:
Números
Booleanos
Objeto, HASH O DICCIONARIO, ARRAY O LISTA

Variables

var firstName;
 * 
**/

var firstName="Ben";
var lastName=" Delacre";
var fullName=firstName+lastName;

console.log(firstName);
console.log(lastName);
console.log(fullName);
console.log(firstName+lastName);


var meteo=prompt("Ingresa");
// var meteo="sol";

if (meteo=="sol")
{
  console.log("No llueve");
}
else if (meteo=="llueve")
{
  console.log("llueve tapate");
}
else
{
  console.log("No pasa nada");
}

// logicos---------------------------------------------------

/*
 
 var result = a&&b;  y lógico
 var result =!a;

 */

var Bob="Bob";
var Ben="Ben";
var Pat="Pat";

var bNombres="";

if (Bob[0]="B"){
  bNombres=bNombres+" "+Bob;
}

if (Ben[0]="B"){
  bNombres=bNombres+" "+Ben;
}

if (Pat[0]="B"){
  bNombres=bNombres+" "+Pat;
}

// metodo trim quita un espacio
console.log(bNombres.trim())



// INDEXACIÓN------------------------

var a="abcde";
console.log(a[0])
console.log(a[1])
console.log(a[2])
console.log(a[3])
console.log(a[4])




// if--------------------------------------------

var students=["Roberto","Torres","Bello"];

console.log("La longitud de la lista de estudiantes es "+students.length)

for (var i=0; i<students.length; i+=1){
  console.log(students[i]);
}

// FUNCIONES--------------------


function name(parameters){
  body
  (return statement)
}
Lorem Ipsum
