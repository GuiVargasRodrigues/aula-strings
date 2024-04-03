function separarPalavras(frase) {
    const palavras = frase.split(" ");
    return palavras;
}


const frase = "Eu sou borracho sim senhor";
const arrayDePalavras = separarPalavras(frase);
console.log(arrayDePalavras);
