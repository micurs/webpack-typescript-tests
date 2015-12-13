var unique = require('uniq');

module.exports = function( values ) {
  return JSON.stringify(unique(values));
};
