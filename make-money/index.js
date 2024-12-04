const form = document.getElementById("form")
const numberInput = document.getElementById("number")
const coinContainer = document.getElementById("coin-container")

form.addEventListener("submit", (event) => {
    event.preventDefault()

const quantity = parseInt(numberInput.value)
console.log(quantity)

const selectedCoin = document.querySelector('input[name="coin"]:checked')
const coinType = selectedCoin.value

for (let i = 0; i < quantity; i++) {
    const coinChoice = document.createElement("div")
    coinChoice.textContent = coinType
    coinChoice.classList.add(coinType)
    coinContainer.appendChild(coinChoice)

    coinChoice.addEventListener("click", (event) => {
    event.target.remove()
}
)
}
})