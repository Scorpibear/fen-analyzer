const fenAnalyzer = require('./main');

describe('getPiecesCount', () => {
  test('returns 32 for start position', () => {
    expect(fenAnalyzer.getPiecesCount('rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1')).toBe(32);
  });
  test('return 7 for 7men position', () => {
    expect(fenAnalyzer.getPiecesCount('8/3k4/2rP4/3K1p2/4p3/5P2/8/8 w - - 0 56')).toBe(7);
  });
  test('throws error if it is not a FEN', () => {
    expect(() => {fenAnalyzer.getPiecesCount('1.d4 d5')}).toThrowError(/Incorrect FEN was provided/);
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
