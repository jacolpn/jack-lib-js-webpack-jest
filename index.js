const linguagens = require('./src/linguagens-de-programacao.json')
const capitalize = word => word.charAt(0).toUpperCase() + word.slice(1);

module.exports = { linguagens, capitalize };
