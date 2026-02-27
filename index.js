let nome = "";
let nivel = 0;

function calcularNivel(nivel) {
    if (nivel < 1000){
        return "ferro";
    } else if (nivel > 1001 && nivel < 2000 ){
        return "Bronze";
    }else if (nivel > 2001 && nivel < 5000 ){
        return "Prata";
    }else if (nivel > 5001 && nivel < 7000 ){
        return "Ouro";
    }else if (nivel > 7001 && nivel < 8000 ){
        return "Platina";
    }else if (nivel > 8001 && nivel < 9000 ){
        return "Ascendente";
    }else if (nivel > 9001 && nivel < 10000 ){
        return "Imortal";
    }else{
        return "Radiante";
    }
}

nome = "gustavo"
nivel = 300

console.log(`O Herói de nome ${nome} está no nível de ${calcularNivel(xp)}`)