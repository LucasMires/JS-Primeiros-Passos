// Atividade \\
let nome = "Lucas"
let sobrenome = "Mires"
let anoNascimento = 2003
let idade = 2022
let cidade = "Rio de Janeiro"

console.log(`Eu sou ${nome} ${sobrenome} e tenho ${idade - anoNascimento} e moro em ${cidade}`)
// Atividade Finalizada \\

// Extras \\
let nome1 = document.querySelector("#nome")
let nascimento = document.querySelector("#anoNascimento")
let cidade1 = document.querySelector("#cidade")

nome1.innerText = nome + " " + sobrenome
nascimento.innerText = anoNascimento
cidade1.innerText = cidade