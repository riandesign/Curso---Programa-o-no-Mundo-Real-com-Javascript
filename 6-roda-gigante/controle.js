var voltas = 20;
var volta_que_vomita = 10;


for (var i = 1; i <= voltas; i++) {
  document.getElementById('resultado').innerHTML += 'Volta: ' + i + '<br />';

  if (i == 10) {
    document.getElementById('resultado').innerHTML += '<strong style="color: red">Vomitou!</strong><br />';
  }
}
