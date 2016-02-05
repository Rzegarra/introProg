// var temp=17;
// var numero2=15;
// var resultado=numero2*temp;
// alert('resultado= ' +resultado);
// console.log('resultado= ' + resultado)
//sumar todos los numeros impares de este vector
//[123,45,79,76,12,41,7859,41,51,269,845123,45,79,76,12,41,7859,41,51,269];


// var resultado=[];
// var vec = [1,4,5,9,2,1,4]
// var tam = vec.length; 
// for (var i=0 ; i<tam ; i++){
// 	resultado[i]=1;
// }
// console.log (resultado)

// alert('ESTA ES UN ALERTA'); //LA FUNCION ALERT ENVIA UNA ALERTA AL BROWSER

//************************************************************
//************************************************************

// var a=[1,4,5,8,4];
// var b=[];
// var temp=0;
// for (var i = a.length - 1; i >= 0; i--) {
// 	b[temp]=a[i];	
// 	temp++;
// };
// console.log(b);

// i=4  temp=0   (i<=0)v  b[temp]=a[i] -> b[0]=a[4] -> b[0]=4
// i=3  temp=1   (i<=0)v  b[temp]=8 ->b[1]=8
// i=2  temp=2   (i<=0)v  b[2]=5
// i=1  temp=3   (i<=0)v  b[3]=4
// i=0  temp=4   (i<=0)v  b[4]=1
// i=-1  temp=5   (i<=0)f

//************************************************************
//************************************************************

		// var a=[1,4,5,8,4];
		// var b=[];
		// var temp=0;
		// for (var i = a.length - 1; i >= 0; i--) {
		// 	if(a[i]>4){
		// 		b[temp++]=a[i]
		// 	}
		// };
		// console.log(b);


		// var a=[1,4,5,8,4];
		// var b=[];
		// var temp=0;
		// for (var i = 0; i < a.length; i++) {
		// 	if(i>2){
		// 		b[temp++]=a[i]
		// 	}
		// };
		// console.log(b);

		// var a=[1,2];
		// var b=[2,3];
		// var c=[];
		// var temp=0;
		// for (var i = 0; i < a.length; i++) {
		// 	for (var j = 0; j < b.length; j++) {
		// 		c[temp++]=b[i]*a[j]
		// 	};
		// };
		// console.log(c);

//si tienen un vector  a=[4,2,1,3,5] y se quiere eliminar el 
//primer dato y guardar este resultado en un vetor b; entonces
//el vector b ahora contendria b=[2,1,3,5]

// se tienen dos vectores vec1=[1,2,3,4] , vec2=[5,4,2,1,4];
//que vectoir es el mas largo.

// var vec1=[1,2,5,4]
// var vec2=[2,4,5,4,7]
// if (vec1.length<vec2.length) {
// 	console.log('este es el mayor = ' + vec2)
// };
// else{
// 	console.log('este es el menor = '+vec1)
// }

//de los vectores anteriores imprimir el que tenga mayor cantidad de 4's

		// var vec1=[1,2,5,4];
		// var vec2=[2,4,5,4,7];
		// var tempvec1=0;
		// var tempvec2=0;
		// for (var i = vec1.length - 1; i >= 0; i--) {
		// 	if (vec[i]==4) {
		// 		tempvec1++;
		// 	};
		// };
		// for (var i = vec2.length - 1; i >= 0; i--) {
		// 	if (vec[i]==4) {
		// 		tempvec2++;
		// 	};
		// };
		// if (tempvec1>tempvec2) {
		// 	console.log(vec1);
		// };
		// else{
		// 	console.log(vec2);
		// }
/////////////////////////////
////////////////////////////


// var vec1=[1,2,5,4];
// var vec2=[2,4,5,4,07];
// var tam1=vec1.length;
// var tam2=vec2.length;
// var cantidad=0;
// var mayor;
// if (tam1>tam2) 
// 	mayor=tam1;
// else
// 	mayor=tam2;
// for (var i = mayor - 1; i >= 0; i--) {
// 	if (vec1[i]==4) {
// 		cantidad++
// 	};
// 	if (vec2[i]==4) {
// 		cantidad--
// 	};
// };
// if (cantidad>0){
// 	console.log('el q ue tiene mas 4s es = '+ vec1);
// }
// else if (cantidad==0){
// 	console.log('ambos tienen la misma cantidad de 4s');
// }
// else{
// 	console.log('el q ue tiene mas 4s es = '+ vec2);
// }
//de los vectores hallar  la suma de todos los numeros que contengan.

// var vec1=[1,2];
// var vec2=[1,1,1];
// var unidos=vec1.concat(vec2);
//[1,2,1,1,1]
// 0 1 2 3 4
 //1+1
 //2+1
 //3+1
 //2+4

// for (var i = unidos.length - 1; i > 0; i--) {
// 	unidos[0]+=unidos[i];
// };
// console.log('la suma de todos es = ' + unidos[0])


//mostrar la cantidad de 1s que existen en los vectores
// var vec1=[1,2];
// var vec2=[1,1,1];
// var temp=0;
// var unidos=vec1.concat(vec2);
// for (var i = unidos.length - 1; i >= 0; i--) {
// 	if (unidos[i]==1) {
// 		temp++;
// 	};
// };
// console.log('existen '+ temp + ' digitos iguales a 1')

//de los vectores, multiplicar uno a uno cada valor que tengan y dart la suma del total.
//se recomienda usar dos (for) ---- >      for(){
//												for(){}
//											}	

//solo pude multiplicar los 2 valores uno a cada uno pero nose como sumarlos ... :/

var vec3=[1,2,5,4]
var vec4=[2,4]
var vec5=[]; //creo la variable vec5 para almacenar la respuesta
var respuesta=0;  //se creo la variable respues para que se valla acumulando los numeros para que despues pertenescan ala variable vec5
    for (var i = 0; i < vec3.length; i++) {
        for (var y = 0; y < vec4.length; y++) {
            respuesta+=vec4[y]*vec3[i];
        };
    };
console.log(respuesta);
       
