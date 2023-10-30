// Fecha objetivo: 30 de mayo de este año
const fechaObjetivo = new Date(2024, 4, 30);

// Función para actualizar el cronómetro
function actualizarCronometro() {
  const ahora = new Date();
  const diferencia = fechaObjetivo - ahora;

  // Calcula los días, horas, minutos y segundos restantes
  const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
  const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

  // Muestra el cronómetro en un elemento HTML
  document.getElementById("cronometro").innerHTML =
    dias + " dias " + horas + " horas " + minutos + " minutos " + segundos + " s";

  // Verifica si la fecha objetivo ha pasado
  if (diferencia <= 0) {
    document.getElementById("cronometro").innerHTML = "¡Tiempo cumplido!";
  }
}

// Actualiza el cronómetro cada segundo
setInterval(actualizarCronometro, 1000);

// Llama a la función para asegurarse de que el cronómetro se actualice de inmediato
actualizarCronometro();
