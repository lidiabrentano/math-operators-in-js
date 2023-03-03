let firstNumber = Number(prompt("Digite o primeiro número:"))
let secondNumber = Number(prompt("Digite o segundo número:"))

const sum = firstNumber + secondNumber
const subtraction = firstNumber - secondNumber
const multiplication = firstNumber * secondNumber
const division = (firstNumber / secondNumber).toFixed(2)
const remainder = firstNumber % secondNumber

let even = remainder === 0
let equal = firstNumber === secondNumber

alert(`A soma dos dois números é: ${sum}`)
alert(`A subtração dos dois números é: ${subtraction}`)
alert(`A multiplicação dos dois números é: ${multiplication}`)
alert(`A divisão dos dois números é: ${division}`)
alert(`O resto da divisão dos dois números é: ${remainder}`)

if(even) {
    alert(`A soma dos dois números é par: ${sum}`)
} else {
    alert(`A soma dos dois números é ímpar: ${sum}`)
}

if(equal) {
    alert(`Os números inseridos são iguais`)
} else {
    alert(`Os números inseridos são diferentes`)
}