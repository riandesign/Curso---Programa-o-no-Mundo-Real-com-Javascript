var mostrou_cpf = false;
var tem_plano_de_saude = true;

if (mostrou_cpf || tem_plano_de_saude) {
  document.getElementById('resultado').innerHTML = 'Alfredo não tem desconto <i class="material-icons">mood</i>';
} else {
  document.getElementById('resultado').innerHTML = 'Alfredo não tem desconto <i class="material-icons">mood_bad</i>';
}
