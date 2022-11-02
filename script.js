
const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');

const relogio = setInterval(function time() {
    var dateToday = new Date();
    var hr = dateToday.getHours();
    var min = dateToday.getMinutes();
    var seg = dateToday.getSeconds();

    horas.textContent = hr;
    minutos.textContent = min;
    segundos.textContent = seg;
})