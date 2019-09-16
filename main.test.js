const fenAnalyzer = require('./main');

describe('getPiecesCount', () => {
  test('returns 32 for start position', () => {
    expect(fenAnalyzer.getPiecesCount('rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1')).toBe(32);
  });
  test('return 7 for 7men position', () => {
    expect(fenAnalyzer.getPiecesCount('8/3k4/2rP4/3K1p2/4p3/5P2/8/8 w - - 0 56')).toBe(7);
  });
  test('throws error if it is not a FEN', () => {
    expect(() => { fenAnalyzer.getPiecesCount('1.d4 d5'); }).toThrowError(/Incorrect FEN was provided/);
  });
});

describe('isBlack', () => {
  test('returns true for black position', () => {
    expect(fenAnalyzer.isBlack('rnbqkbnr/ppp1pppp/8/3p4/4P3/5N2/PPPP1PPP/RNBQKB1R b KQkq - 1 2')).toBeTruthy();
  });
  test('returns false for white position', () => {
    expect(fenAnalyzer.isBlack('rnbqkbnr/ppp1pppp/8/3p4/4P3/8/PPPP1PPP/RNBQKBNR w KQkq d6 0 2')).toBeFalsy();
  });
});

describe('normalize', () => {
  test('removes en passant note if it is not possible', () => {
    const fen = 'rnbqkb1r/ppp2ppp/4pn2/3p4/2PP4/5N2/PP2PPPP/RNBQKB1R w KQkq d6 0 4';
    const nFen = 'rnbqkb1r/ppp2ppp/4pn2/3p4/2PP4/5N2/PP2PPPP/RNBQKB1R w KQkq - 0 4';
    expect(fenAnalyzer.normalize(fen)).toEqual(nFen);
  });
  test('remove en passant when pawn is not near this rank', () => {
    const fen = 'rnbqkb1r/1ppppppp/5n2/p2P4/8/8/PPP1PPPP/RNBQKBNR w KQkq a6 0 3';
    const nFen = 'rnbqkb1r/1ppppppp/5n2/p2P4/8/8/PPP1PPPP/RNBQKBNR w KQkq - 0 3';
    expect(fenAnalyzer.normalize(fen)).toEqual(nFen);
  });
  test('keeps en passant when capture by black is possible', () => {
    const fen = 'rnbqkbnr/p1pppppp/8/8/1pPP4/5N2/PP2PPPP/RNBQKB1R b KQkq c3 0 3';
    expect(fenAnalyzer.normalize(fen)).toEqual(fen);
  });
  test('keeps en passant when capture by white is possible', () => {
    const fen = 'rnbqkb1r/pp1ppppp/5n2/2pP4/8/8/PPP1PPPP/RNBQKBNR w KQkq c6 0 3';
    expect(fenAnalyzer.normalize(fen)).toEqual(fen);
  });
  test('throws error if it is not a FEN', () => {
    expect(() => { fenAnalyzer.normalize(null); }).toThrowError(/Incorrect FEN was provided/);
  });
});
