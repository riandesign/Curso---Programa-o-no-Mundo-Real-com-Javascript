var total_horas = 0;
var total_calorias = 0;
var lista_lanches = document.getElementById('lista_lanches');
var add_horas = document.getElementById('add_horas');

var lanches = [
  ['Banana', 0.1],
  ['Chocolate', 0.5],
  ['Batata Frita', 0.4]
];

for (var i = 0; i < lanches.length; i++) {
  var li = document.createElement('li');
  var lanche = lanches[i][0];
  li.appendChild(document.createTextNode(lanche));
  lista_lanches.appendChild(li);
}

add_horas.onclick = function() {
  total_horas++;
  document.getElementById('total_horas').innerHTML = total_horas;
  verifica_calorias_obtidas();
}

lista_lanches.addEventListener('click', function(e) {
  if (e.target.tagName == 'LI'){
    var lanche_escolhido = e.target.innerHTML;

    for (var i = 0; i < lanches.length; i++) {
      if (lanche_escolhido == lanches[i][0]) {
        total_calorias += lanches[i][1];
      }
    }

    document.getElementById('total_calorias').innerHTML = total_calorias;
    verifica_calorias_obtidas();
  }
});


function verifica_calorias_obtidas() {
  var calorias_obtidas = total_calorias - total_horas;
  document.getElementById('calorias_obtidas').innerHTML = calorias_obtidas;
}
