//  Variaveis //

let Nome = "";  // Digite o nome do seu héroi //
let XP  = "";   // Digite o XP do seu héroi //
let NIVEL = "";

// Estrutura de  decisão//

if (XP <= 100) {
    NIVEL = "Ferro";
} else if (XP >= 1001 && XP <= 2000) {
    NIVEL = "Bronze";
} else if (XP >= 2001 && XP <= 5000) {
    NIVEL = "Prata";
} else if (XP >= 5001 && XP <= 7000) {
    NIVEL = "Ouro";
} else if (XP >= 7001 && XP <= 8000) {
    NIVEL = "Platina";
} else if (XP >= 8001 && XP <= 9000) {
    NIVEL = "Ascendente";
} else if (XP >= 9001 && XP <= 10000) {
    NIVEL = "Imortal";
} else if (XP >= 10001) {
    NIVEL = "Radiante";
} 

// saida //

console.log("O Héroi de nome " + Nome + " está no nível: " + NIVEL);