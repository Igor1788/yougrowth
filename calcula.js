function calculaImc() {
    const peso = document.querySelector(".peso").value;
    const altura = document.querySelector(".altura").value;
    console.log(altura);
    console.log(peso);
    const ajusteAltura = parseInt(altura) / 100;
    const quadrado = ajusteAltura * ajusteAltura;
    console.log(quadrado);

    const calcula = parseInt(peso) / quadrado;
    console.log(calcula);
    if (calcula >= 30) {
        document.querySelector(
            ".resultado"
        ).innerHTML = `Seu imc atualmente é ${calcula}, isso significa que você está com obesidade.`;
    } else {
        document.querySelector(
            ".resultado"
        ).innerHTML = `Seu imc atualmente é ${calcula}, isso significa que você está no peso.`;
    }
}
