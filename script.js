function imc(){
    const altura = document.getElementById(altura)
    const peso = document.getElementById(peso)

    const numberP = Number(peso.value)
    const numerA = Number(altura.value)

    const imc = numberP / numerA * 2

    document.getElementById("Resultado".innerText = "Resultado" + soma)

}
