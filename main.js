const piecesRegexp = /[prnbqk]/gi;

module.exports.getPiecesCount = fen => {
  try{
    return fen.split(' ')[0].match(piecesRegexp).length;
  } catch(ex) {
    throw 'Incorrect FEN was provided. Please, recheck with https://en.wikipedia.org/wiki/Forsyth%E2%80%93Edwards_Notation';
  }
}

module.exports.isBlack = fen => {
  return fen.search(' b ') != -1;
}
