
//concatenar
/* nombre = "Alfredo";
edad = 19;
console.log(`Hola soy ${nombre} y tengo ${edad}`);
for (i = 0; i <= edad; i++) {
  if (i == 5) {
    break;
  }
  if (i == 2) {
    continue;
  }
  console.log(i);
}

const num = [1, 2, 3, 4, 5]; */
/*num.push(4);
console.log(num);*/
/* console.log(num); */

//
/* const lost = [1, 2, 3, 4, 5];
console.log(num.toString == lost.toString);
console.log(num === lost);
//lost =num;
for (index in num) {
  console.log(index);
}
num.forEach(function (valor, indice, num) {
  console.log("En el índice " + indice + " hay este valor: " + valor);
});

//lost.push(6);
//console.log(lost);
//console.log(num==lost);
//console.log(num===lost);

console.log(num.reverse()); */

/* // Matriz [[1,2],[3,4]]

matriz = [
  [1, 2],
  [3, 4]
];
console.log(matriz);
for (i = 0; i < matriz.length; i++)
{
  for (let j = 0; j < matriz[i].length; j++) {
    console.log(matriz[i][j]);
  }
} */

const arr = [4, 8, 13, 7, 0, 5, 2, 8, 10];
var pruebas = Math.sqrt(arr.length);
var diagonal2=0;
var diagonal1=0;
console.log('Los elementos del array son: '+arr.length)
console.log('El resultado es: '+pruebas);
var pruebass = Number.isInteger(pruebas)
if(Number.isInteger(pruebas)){
    console.log('Es numero entero');
    var division = pruebas;
	matriz = []; // Para almacenar los nuevos arreglos
    for (let i = 0; i < arr.length; i += division) {
        let partes = arr.slice(i, i + division);
        matriz.push(partes);
    }
    console.log("Matriz: ", matriz);

    for(let i = 0; i < matriz.length; i++){
        text="";

    for(let j = 0; j < matriz[i].length; j++){
        text+=matriz[i][j]+'\t'

    }
    console.log(text);

}

    for( let i=0; i<division; i++ ){
         for( let j=0; j<division; j++ ){
            if( i==j )
            diagonal1 += matriz[i][j];
        }
    }
    console.log("Diagonal 1: "+diagonal1)

    for( let i=0; i<division; i++ ){
        for( let j=0; j<division; j++ ){
           if( i+j == division-1)
           diagonal2 += matriz[i][j];
       }
   }
   console.log("Diagonal 2: "+diagonal2)
   
   var resta=diagonal1-diagonal2;
   if(resta<0){
    resta= Math.abs(resta)
    console.log('El resultado de la resta entre '+diagonal1+' - '+diagonal2+' es: '+resta)
}else{
    console.log('El resultado de la resta entre '+diagonal1+' - '+diagonal2+' es: '+resta)
} 

}else{
    console.log('El resultado es un numero decimal');
}