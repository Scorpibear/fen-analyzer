const piecesRegexp = /[prnbqk]/gi;
const fenError = new Error('Incorrect FEN was provided. Please, recheck with https://en.wikipedia.org/wiki/Forsyth%E2%80%93Edwards_Notation');

/**
 * get count of pieces on the board. Throws error if FEN is invalid
 * @param {string} fen FEN as string
 */
module.exports.getPiecesCount = (fen) => {
  try {
    return fen.split(' ')[0].match(piecesRegexp).length;
  } catch (ex) {
    throw fenError;
  }
};

/**
 * returns true if provided FEN is black
 */
module.exports.isBlack = (fen) => fen.search(' b ') !== -1;

/**
 * Normalize fen, removing en passant note if en passant is not possible.
 * Throws error if FEN is invalid
 * @param {string} fen FEN string
 */
module.exports.normalize = (fen) => {
  try {
    const enPassantRegexp = /(pP)|(Pp)/;
    const [board, color, castling, enPassant, reset, move] = fen.split(' ');
    const boardLines = board.split('/');
    const keep = ((color === 'b' && enPassantRegexp.test(boardLines[4]))
      || (color === 'w' && enPassantRegexp.test(boardLines[3])));
    return `${board} ${color} ${castling} ${keep ? enPassant : '-'} ${reset} ${move}`;
  } catch (ex) {
    throw fenError;
  }
};
