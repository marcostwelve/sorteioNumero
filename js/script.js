const body = document.querySelector("body");
const theme = document.querySelector(".theme");





theme.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
    if(body.classList == "dark-mode") {
        document.querySelector(".theme i").textContent = "light_mode";
    }
    else {
        document.querySelector(".theme i").textContent = "dark_mode";
    }
});


document.getElementById("sortear").onclick = function sorteio() {
    let numeroAleatorio = Math.floor(Math.random() * (10 - 1) + 1);
    let resultado = document.querySelector(".resultado");

    resultado.innerHTML = `<p>Número sorteado é: ${numeroAleatorio}</p>`

}

document.getElementById("limpar").onclick = function limparCampos() {
    let resultado = document.querySelector(".resultado");
    resultado.innerHTML = "";
}