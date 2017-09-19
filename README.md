# fen-analyzer
Chess FEN (Forsyth-Edwards Notation) positions analyzer. Having FEN as input helps to identify, e.g. how many pieces left on the board

## Example
```javascript
const fenAnalyzer = require('fen-analyzer');

let piecesCount = fenAnalyzer.getPiecesCount('rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1')

console.log(piecesCount); // 32
```
