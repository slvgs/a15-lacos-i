let coxinha = prompt("Deseja mais coxinhas? [s] para SIM e [n] para NÃO").toLowerCase()
let conta = 0
const price = 2.5
while(coxinha === "s"){
     coxinha = prompt("Deseja mais coxinhas?").toLowerCase()
    conta += price
    if(coxinha !== "n" && coxinha !== "s"){
        alert("Digite um comando válido!")
    }
}   
console.log("Okay, sua conta foi encerrada, o total ficou de:", conta)