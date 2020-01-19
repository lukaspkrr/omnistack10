module.exports = function parseStringToArray(array) {
  return array.split(',').map(e => e.trim())
}