
// Variables de las selecciones 

const h1=document.querySelector('h1');
const input1=document.querySelector('#calculo1');
const input2=document.querySelector('#calculo2');
const btn=document.querySelector('#btnCalcular');
const resultado=document.querySelector('#resultado');
const form=document.querySelector('#formulario');


//funcion que llama a la funcion para sumar los datos

btn.addEventListener('click',sumarImputs);
btn.addEventListener('mouseover',color);
btn.addEventListener('mouseout',color2)
function sumarImputs(papaya){
    //papaya.preventDefault();
    const sumaInputs=parseInt(input1.value, 10)+parseInt(input2.value, 10);
    resultado.innerHTML="El resultado de tu suma es:"+" " +sumaInputs

}
function color(){
    btn.innerHTML="Aqui se puede hacer click"
}
function color2(){
    btn.innerHTML="Dale ya te pasaste"}
    