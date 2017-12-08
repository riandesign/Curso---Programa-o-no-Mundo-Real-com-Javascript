var capacidade_do_tanque = 20; // 20 litros
var combustivel_que_tenho = 3; // 3 litros

while (combustivel_que_tenho < capacidade_do_tanque) {
  combustivel_que_tenho += 1; // + 1 litro
  document.getElementById('resultado').innerHTML += combustivel_que_tenho + ' litros<br />';
}

document.getElementById('resultado').innerHTML += 'Tanque cheio!';


// var capacidade_do_tanque = 20; // 20 litros
// var combustivel_que_tenho = 3; // 3 litros
//
// var mostra_resultado = setInterval(enche_tanque, 200);
//
//
// function enche_tanque() {
//   if (combustivel_que_tenho < capacidade_do_tanque) {
//     combustivel_que_tenho += 0.25; // + 1 litro
//     document.getElementById('resultado').innerHTML = 'Litros: ' + combustivel_que_tenho;
//   } else {
//     document.getElementById('resultado').innerHTML += '<br />Tanque cheio!';
//     clearInterval(mostra_resultado);
//   }
// }
