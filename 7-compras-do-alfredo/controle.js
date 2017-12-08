var produtos = [
  'Mamão',
  'Banana',
  'Fandangos',
  'Macarrão',
  'Leite Condensado'
]

for (var i = 0; i < produtos.length; i++) {
  document.getElementById('resultado').innerHTML += produtos[i];

  if (i < produtos.length - 1) {
    document.getElementById('resultado').innerHTML += ', ';
  }
}
