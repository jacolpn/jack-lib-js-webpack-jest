var linguagens = require('./src/linguagens-de-programacao.json');
var capitalize = function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
};
module.exports = {
  linguagens: linguagens,
  capitalize: capitalize
};
