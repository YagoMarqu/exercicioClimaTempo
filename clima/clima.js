function Localiza(){
    cidade = document.getElementById("cidade").value
    var minusculo = cidade.toLowerCase()
    resultado = minusculo.replace(/ /g, "%20")

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${resultado}&appid=64ed82577ced7f69cb1687f0ce536131`).then(response => {
            return response.json()
        }).then(corpo => {
            console.log(corpo)
            grau = parseInt(corpo.main.temp) - 273,15
            console.log(grau)

            sensacao = parseInt(corpo.main.feels_like) - 273,15
            console.log(sensacao)

            
            
            
            document.getElementById("nome").innerHTML = "<h2><strong>Cidade: </strong>" + corpo.name + "</h2>";
            document.getElementById("temp").innerHTML = "<p><strong>Temperatura: </strong>" + grau + "°</p>";
            document.getElementById("feels_like").innerHTML = "<p><strong>Sensação térmica: </strong>" + sensacao + "°</p>";
            document.getElementById("umidade").innerHTML = "<p><strong>Umidade: </strong>" + corpo.main.humidity + "%</p>";
            document.getElementById("ventania").innerHTML = "<p><strong>Vento: </strong>" + corpo.wind.speed + " km/h</p>";
        })
}
function mapa() {
    const cidadeInput = document.getElementById("cidade");
    const cidade = cidadeInput.value;

    const googleEarthUrl = `https://earth.google.com/web/search/${cidade}`;

    window.open(googleEarthUrl, "_blank");
}