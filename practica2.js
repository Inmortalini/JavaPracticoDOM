const name = "Juan David";
const lastname = "Castro Gallego";
const completeName = name + lastname;
const nickname = "juandc";

console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");
function nombre(completeName,nickname){
    return(`Mi nombre es ${completeName}, pero prefiero que me digas ${nickname} .`)
}

console.log(nombre("Pedro","Inmortalini"))