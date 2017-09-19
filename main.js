const piecesRegexp = /[prnbqk]/gi;

module.exports.getPiecesCount = function(fen) {
  try{
    return fen.split(' ')[0].match(piecesRegexp).length;
  } catch(ex) {
    throw 'Incorrect FEN was provided. Please, recheck with https://en.wikipedia.org/wiki/Forsyth%E2%80%93Edwards_Notation';
  }
}