const animeList = document.querySelectorAll('input[name="fav_anime"]');
let resultado = document.getElementById("resultado-voto");
let resultadoTxt = document.getElementById("resultado-txt")



findSelected = () => {
    let selected = document.querySelector('input[name="fav_anime"]:checked').value;
    console.log(selected)
    if(selected == "DragonBall"){
        resultado.src = "./img/goku.png"
        resultadoTxt.innerText = "Seu gosto é MAIS DE 8 MIL"
        console.log(selected)
    }else if(selected == "OnePiece"){
        resultado.src = "./img/luffy.png"
        resultadoTxt.innerText = "Boa! One Piece is real!"
        console.log(selected)
    }else if(selected == "CavZod"){
        resultado.src = "./img/seiya.png"
        resultadoTxt.innerText = "Seu gosto despertou o 7º sentido"
        console.log(selected)
    }else if(selected == "HxH"){
        resultado.src = "./img/gon.png"
        resultadoTxt.innerText = "O Gon fica feliz em saber! JAN - KEN - PÔ"
        console.log(selected)
    }
}

animeList.forEach(radioBtn => {
    radioBtn.addEventListener("change", findSelected)
})