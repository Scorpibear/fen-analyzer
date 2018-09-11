# fen-analyzer
Chess FEN (Forsyth-Edwards Notation) positions analyzer. Having FEN as input helps to identify, e.g. how many pieces left on the board

## Example
```javascript
const fenAnalyzer = require('fen-analyzer');

const piecesCount = fenAnalyzer.getPiecesCount('rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1') // 32

const isBlack = fenAnalyzer.isBlack('rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1') // false

```
