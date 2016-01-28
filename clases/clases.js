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

var a=[1,4,5,8,4];
var b=[];
var temp=0;
for (var i = 0; i < a.length; i++) {
	if(a[i]>4){
		b[temp++]=a[i]
	}
};
console.log(b);


var a=[1,4,5,8,4];
var b=[];
var temp=0;
for (var i = a.length - 1; i >= 0; i--) {
	if(i>=2){
		b[temp++]=a[i]
	}
};
console.log(b);

//si tienen un vector  a=[4,2,1,3,5] y se quiere eliminar el 
//primer dato y guardar este resultado en un vetor b; entonces
//el vector b ahora contendria b=[2,1,3,5]