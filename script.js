function generateNumber() {

    const input1 = Math.ceil(document.querySelector(".input-1").value)
    const input2 = Math.floor(document.querySelector(".input-2").value)

    if (input2 > input1) {
        const result = Math.floor(Math.random() * (input1 - input2 + 1)) + input2

        alert(result)
    }
    if (input2 < input1) {
        alert("O valor MÍNIMO NÃO pode ser maior que o valor MÀXIMO")
    } else if (input2 == input1) {
        alert("Os valores não podem ser iguais")
    }
}