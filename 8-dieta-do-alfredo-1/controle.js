var total_horas = 0;
var total_chocolates = 0;
var add_horas = document.getElementById('add_horas');
var add_chocolate = document.getElementById('add_chocolate');

add_horas.onclick = function() {
  total_horas++;
  document.getElementById('total_horas').innerHTML = total_horas;
  verifica_calorias_obtidas();
}

add_chocolate.onclick = function() {
  total_chocolates++;
  document.getElementById('total_chocolates').innerHTML = total_chocolates;
  verifica_calorias_obtidas();
}

function verifica_calorias_obtidas() {
  var calorias_obtidas = total_chocolates - total_horas;
  document.getElementById('calorias_obtidas').innerHTML = calorias_obtidas;
}
