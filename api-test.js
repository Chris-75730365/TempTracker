const claveApi = "97e3c5046c88448fa1b200010262709";
const idioma = "es";
const ciudad = "Cusco";

const apiClimaActual = `https://api.weatherapi.com/v1/current.json?q=${ciudad}&lang=${idioma}&key=${claveApi}`;

async function obtenerClima() {
    const response = await fetch(apiClimaActual);
    const data = await response.json();

    console.log(data);
}

obtenerClima();