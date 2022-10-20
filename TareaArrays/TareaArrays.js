function arreglo() {
    arr=new Array();
    for (let i = 0; i < 15; i++) {
        arr.push(Math.floor(Math.random()*100));
    }
    return arr;
}
function Ejercicio1() {
    array=arreglo();
    array.forEach((numero,indice) => {
        console.log(`El numero `+numero+`, esta en el indice `+indice);
    });
}

function Ejercicio2() {
    array=arreglo();
    for (let i = 0; i < 15; i++) {
        console.log(`La division de `+array[i]+ ` entre 2 es igual a: `+(array[i]/2));
    }
}

function Ejercicio3() {
    array=arreglo();
    let suma=0;
    for(let i=0; i<array.length;i++){
        suma+=array[i];
    }
    if (suma % 3 === 0) {
        console.log("Si es múltiplo");
    }else{
        console.log("No es múltiplo");
    }
}

function Ejercicio4() {
    array=arreglo();
    let suma=0;
    
    for(let i=0;i<15;i++){
        suma+=array[i];
    }
    let promedio=suma/array.length;
    console.log("La suma del array es: "+suma+ " y el promedio de la suma es: "+promedio);
}


function Ejercicio5() {
    array=arreglo();
    numRandom=Math.floor(Math.random()*10);
    cont=0;
    Largo=array.length;
    for (let i = 0; i < Largo; i++) {
        if(numRandom===array[i]){
            cont++;
            break;
        }
    }
    if (cont!=0) {
        console.log("El numero ya existe, se encontro "+cont+" veces");
    }else{
        array.push(numRandom);
        console.log("Se agrego el numero "+numRandom);
    }
}
console.log("-------------Ejercicio 1-------------");
Ejercicio1();
console.log("-------------Ejercicio 2-------------");
Ejercicio2();
console.log("-------------Ejercicio 3-------------");
Ejercicio3();
console.log("-------------Ejercicio 4-------------");
Ejercicio4();
console.log("-------------Ejercicio 5-------------");
Ejercicio5();
