// aumentar los likes
function aumentarLike(idContador) {
    let contadorLike = document.querySelector(`#${idContador}`);
    let numeroLikes = Number(contadorLike.innerText);
    numeroLikes ++;
    contadorLike.innerText = numeroLikes;
}

document.querySelector("#btnLikeLinn").addEventListener("click", function() {
    aumentarLike("contadorLinn");
});

document.querySelector("#btnLikeLina").addEventListener("click", function() {
    aumentarLike("contadorLina");
});

document.querySelector("#btnLikeMateo").addEventListener("click", function() {
    aumentarLike("contadorMateo");
});