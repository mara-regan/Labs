document.getElementById("menu-button").addEventListener("click", () => {
    const menu = document.getElementById("menu")
    menu.classList.toggle("open")
})

const hideContainers = () => {
    const containers = document.querySelectorAll(".container")
    containers.forEach(container => {
        container.classList.remove("active")
    })
}

const showContainers = (containerId) => {
    hideContainers()
    const container = document.getElementById(containerId)
    container.classList.add("active")
}

document.getElementById("letters-link").addEventListener("click", (event) => {
    event.preventDefault()
    showContainers("letters-container")
    document.getElementById("menu").classList.remove("open")
})

document.getElementById("numbers-link").querySelector("a").addEventListener("click", (event) => {
    event.preventDefault()
    showContainers("numbers-container")
    document.getElementById("menu").classList.remove("open")
})