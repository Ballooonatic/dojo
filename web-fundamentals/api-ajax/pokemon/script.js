function drawPokemon() {   
    for (let i = 1; i < 152; i++) {
        var img = document.createElement("img");
        img.setAttribute("src","https://pokeapi.co/media/img/"+i+".png")
        document.body.insertAdjacentElement("beforeend", img);
    }
}