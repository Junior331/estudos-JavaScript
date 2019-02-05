 function addBalao() {
    var Img = document.createElement("img");
    Img.setAttribute('src', 'https://pngimage.net/wp-content/uploads/2018/05/bal%C3%A3o-roxo-png.png');
    Img.setAttribute('height', '75px');
    Img.setAttribute('width', '75px');
    var p1 = Math.floor(Math.random() * 900);
    var p2 = Math.floor(Math.random() * 500);
    Img.setAttribute("style","left:"+p1+"px;top:"+p2+"px;");
    Img.setAttribute("onclick", "esplodir(this)");
    Img.style.position = 'absolute';

    document.body.appendChild(Img);
}

function esplodir(elemento) {
    document.body.removeChild(elemento);
    placar();

}

function start() {
    setInterval(addBalao, 1000);
}


function pause(elemento) {
    alert("Para voltar ao jogo aperte em OK");
}

function placar() {
    setTimeout(function () {
        var pontos = document.querySelector(".pontos");
        var valorInteiro = parseInt(pontos.textContent);
        var soma = parseInt(valorInteiro) + parseInt(01);
        pontos.textContent = soma;
    }, 1);
    var pontos = document.querySelector(".pontos");
    pontos.classList.add("animationContador");
    setTimeout(function () {
        pontos.classList.remove("animationContador")
    }, 440)
}