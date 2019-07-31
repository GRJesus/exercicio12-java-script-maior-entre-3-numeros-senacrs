//6) Escreva um programa em Javascript que 
//leia 3 números inteiros e mostre o maior deles.

var a = parseInt(prompt("Insira o primeiro valor"));
var b = parseInt(prompt("Insira o segundo valor"));
var c = parseInt(prompt("Insira o terceiro valor"));
var max = Math.max (a,b,c);

var p1 = document.createElement ("p");//Primeiro valor
var p2 = document.createElement ("p");//Segundo valor
var p3 = document.createElement ("p");//Terceiro valor
var p4 = document.createElement ("p");//Maior valor entre eles


if (max <=0) {
    document.body.append ("Verifique o valor");
} else {
    if (max > 0) {
    var x1 = a;
    p1.append ("O primeiro valor informado é = " + x1);
    var x2 = b;
    p2.append ("O segundo valor informado é = " + x2);
    var x3 = c;
    p3.append ("O terceiro valor informado é = " + x3);
    var x4 = max;
    p4.append ("O maior valor entre eles é = " + x4);

    document.body.appendChild (p1);
    document.body.appendChild (p2);
    document.body.appendChild (p3);
    document.body.appendChild (p4);
    }
}