# fen-analyzer
[![Build Status](https://travis-ci.org/Scorpibear/fen-analyzer.svg?branch=master)](https://travis-ci.org/Scorpibear/fen-analyzer)
[![Coverage Status](https://codecov.io/gh/Scorpibear/fen-analyzer/branch/master/graph/badge.svg)](https://codecov.io/gh/Scorpibear/fen-analyzer)
[![npm version](https://badge.fury.io/js/fen-analyzer.svg)](https://www.npmjs.com/package/fen-analyzer)

Chess FEN (Forsyth-Edwards Notation) positions analyzer. Having FEN as input helps to identify, e.g. how many pieces left on the board

## Example
```javascript
const fenAnalyzer = require('fen-analyzer');

const piecesCount = fenAnalyzer.getPiecesCount('rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1')
 // piecesCount === 32

const isBlack = fenAnalyzer.isBlack('rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1') // isBlack === false

const fen = 'rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR b KQkq e3 0 1';
fen = fenAnalyzer.normalize(fen);
 // fen === 'rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR b KQkq - 0 1'



```
