const main = () => {
    let paragraph = document.getElementById("grow-me")
    paragraph.classList.add("big")
    
    paragraph = document.getElementById("shrink-me")
    paragraph.classList.remove("big")

    let list = document.querySelectorAll("li")
    list.forEach((item) => {
    console.log(item.textContent)
    })

    let link = document.getElementById("link")
    link.href = "https://www.example.com"
    link.textContent = "somewhere"

    paragraph = document.getElementById("hide-me")
    paragraph.style.display = "none"

    paragraph = document.getElementById("show-me")
    paragraph.style.display = "block"

    const userName = document.getElementById("name").value
    const welcomeMessage = document.getElementById("welcome")
    welcomeMessage.textContent = "Welcome " + userName + "!"
}
main ()