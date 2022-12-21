function nombreCompleto(nombre,apellido){
    return nombre +" "+ apellido
}
///Usando una funcion dentro de otra
function saludo (nombre,apellido,nickname){
    let TotalName= nombreCompleto(nombre,apellido);
    return `Mi nombre completo es ${TotalName}, pero me gusta que me digan ${nickname}`
}


//
function platzi(sus){
    if (sus==="Free"){
        return "Solo puedes tomar cursos gratis"
    }
    else if(sus==="Basic"){
        return "Puedes toamr casit todos los cursos de Platzi durante un mes"

    }
    else if (sus==="Expert"){
        return "Puede tomar casi todos los cursos de Platzi durante un anho"
    }
    else if(sus==="ExpertPlus"){
        return "Tu y alguien m\xE1s pueden tomar TODOS los cursos..."
    }
    else{
        return "Le pelaste tecleando Wacho"
    }
}

function platzi(sus){
    if (sus==="Free"){
        return "Solo puedes tomar cursos gratis"
    }
    if(sus==="Basic"){
        return "Puedes toamr casit todos los cursos de Platzi durante un mes"

    }
    if (sus==="Expert"){
        return "Puede tomar casi todos los cursos de Platzi durante un anho"
    }
   if(sus==="ExpertPlus"){
        return "Tu y alguien m\xE1s pueden tomar TODOS los cursos..."
    }
    else{
        return "Le pelaste tecleando Wacho"
    }
}
for (let i = 0; i < 5; i++) {
    console.log("El valor de i es: " + i);
}

for (let i = 10; i >= 2; i--) {
    console.log("El valor de i es: " + i);
}
let i=0;
while(i<5){
    i++;
    console.log("el valor i es :" + i)
}

// tener en cuenta que con prompt nos devuelve un string y no un Number
let valor =prompt ("Cuanto es 2+2?");
if (valor ==2){
    console.log("Le pegaste culo roto");
}
else{
    console.log("Nega mops")
}
// Una funcion que recibe un array y devuelve su primer elemento
function aburrida(array1){
    for(let i=0;i<array1.length;i++){
   console.log(`${i + 1} ${array1[i]}`)}
}
let hola=["Papa","colino",'cebolla','rosas'];
aburrida(hola)
/// Iterrando en un objeto para imprimir sus propiedades
let myCar={
    model:'Mustang',
    color:'Blue',
    year:2024
};
function print (object){
    for(let clave in object){
        console.log(object[clave])
    }
}
print(myCar)
// con un solo if conseguir
let opciones=["Free","Solo puedes tomar cursos gratis","Basic","Puedes toamr casit todos los cursos de Platzi durante un mes","Expert",
"Puede tomar casi todos los cursos de Platzi durante un anho","ExpertDuo","Tu y alguien m\xE1s pueden tomar TODOS los cursos..."];

function prueba1If(sus){
    let pos=opciones.indexOf(sus);
    if(pos!=-1){
        console.log(opciones[pos+1])
    }
    else{
        console.log("Opcion no valida")
    }
}
let consulta= prueba1If("ExpertDuo")
console.log(consulta)


//mismo ejemplo otra opcion

let opcionesobjeto={
    free:"Solo puedes tomar cursos gratis",
    basic:"Puedes toamr casit todos los cursos de Platzi durante un mes",
    expert:"Puede tomar casi todos los cursos de Platzi durante un anho",
    expertoduo:"Tu y alguien m\xE1s pueden tomar TODOS los cursos..."
}
function suscription(sus){
    if(opcionesobjeto[sus]){
        console.log(opcionesobjeto[sus])
    }
    else{
        console.warn("callese vieja")
    }
}
let prueba1objeto=suscription("expert");
console.log(prueba1objeto)