function RetoMatriz(array,matriz,cuadradoArray){


var array=[4,8,13,7,0,5,2,8,10];                               //[19,5,7,2,27,10,0,0,1,5];//[1,5,6,7,8]; //[4,8,13,7,0,5,2,8,10] //[-6,7,0,-5]
var matriz = [];

var cuadradoArray = Math.sqrt(array.length);

if (Number.isInteger(cuadradoArray)) {
    var aux = new Array();  //Este array  lo usamos para para guardar los "registros" de la matriz
    array.forEach((element, index) => {  //Recorremos el array
        if (aux.length < cuadradoArray) {//Si el numero de elemento en el aux es menor al permitido por la matriz
            aux.push(element);
        }
        if (aux.length == cuadradoArray) {//Si la cantidad es correcta lo agrego y reinicio
            matriz.push(aux);
            aux = new Array();
        }
    });
    var izquierda = 0;
    var diagonalIzquierda = 0;
    var derecha = matriz.length - 1;
    var diagonalDerecha = 0;

    //Recorremos la matriz y sumamos las diagonales izquierda y derecha
    matriz.forEach(element => {
        //Para la izquierda
        diagonalIzquierda += element[izquierda];
        izquierda++;
        //Para la derecha
        diagonalDerecha += element[derecha];
        derecha--;
    });
    console.log(`La suma de la diagonal izquierda es ${diagonalIzquierda}`);
    console.log(`La suma de la diagonal derecha es ${diagonalDerecha}`);
    //Sacamos la diferencia positiva
    var diferencia = diagonalIzquierda - diagonalDerecha;
    diferencia = (diferencia < 0) ? diferencia * (-1) : diferencia; //Si la diferencia es menor a 0 se multiplica por -1 para pasar a positivo, si no me manda solo el positivo.
    console.log(`La diferencia entre la diagonal izquierda y derecha es de ${diferencia}`);
}
else //Si no no se puede hacer la matriz
    console.log("No es posible hacer una matriz cuadrada");
}
RetoMatriz();