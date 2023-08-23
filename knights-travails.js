const possibleMoves = function ([u, v]) {
        
    let possibleMovesArray = [] 

    for (let i = -2; i <= 2; i++) {
        for (j = -2; j <= 2; j++) {
            let moves = []
            if (Math.abs(i) + Math.abs(j) == 3) {

                let nextU = u + i
                if (nextU >= 0 && nextU <= 7) {
                    moves.push(nextU)
                }

                let nextV = v + j
                if (nextV >= 0 && nextV <= 7) {
                    moves.push(nextV)
                }
                if (moves.length == 2) {
                    possibleMovesArray.push(moves)
                }
            }
        }
    }
    return possibleMovesArray
}

const knightsTravails = function ([a, b], [x, y]) {
    
    
}