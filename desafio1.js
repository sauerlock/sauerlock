const precoCombustivel = 5.90;
const kmPorLitros = 10;
const distanciaKM = 200;

function valorViagem() {
   const mediaDistancia = distanciaKM / kmPorLitros;
   const precoViagem = mediaDistancia * precoCombustivel;
   return (precoViagem);
};
console.log(valorViagem().toFixed(2));