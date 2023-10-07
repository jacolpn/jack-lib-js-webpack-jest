// const linguagens = require('./linguagens-de-programacao.json')

// module.exports = { all: linguagens };
var capitalize = function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
};

export { capitalize };
