function addBalao() {
    var img = document.getElementById("img");
    var p1 = Math.floor(Math.random() * 500);
    var p2 = Math.floor(Math.random() * 400);
    img.setAttribute("style", "left:" + p1 + "px;top:" + p2 + "px;");
    img.setAttribute("onclick", "esplodir(this)");
    document.body.appendChild(img);
    placar();
}

function esplodir(elemento) {
    document.body.removeChild(elemento);
}

function start() {
    setInterval(addBalao, 1000);
}
function pause() {
    alert("Para voltar ao jogo aperte OK");
}

function placar() {
    setTimeout(function () {
        var hits = document.querySelector(".hits");
        var valorInteiro = parseInt(hits.textContent);
        var soma = parseInt(valorInteiro) + parseInt(01);
        hits.textContent = soma;
    }, 1);
    var hits = document.querySelector(".hits");
    hits.classList.add("animationContador");
    setTimeout(function () {
        hits.classList.remove("animationContador")
    }, 440)
}