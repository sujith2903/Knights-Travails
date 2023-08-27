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

const node = function ([a, b]) {
    
    let path = []
    let currentPosition = [a, b]
    let nextPositions = possibleMoves([a, b])
    
    return {path,currentPosition,nextPositions}
}

let queue = []

const knightsTravails = function ([a, b], [x, y]) {

    let knight = node([a, b])
    queue.push(knight)

    while (queue.length > 0) {
        let current = queue.shift()
        current.path.push([current.currentPosition[0], current.currentPosition[1]])

        if (current.currentPosition[0] == x && current.currentPosition[1] == y) {
            console.log(`You have reached the target in ${current.path.length-1} steps in the path : `)
            return current.path
        }

        current.nextPositions.forEach((position) => {
            let newNode = node(position)
            queue.push(newNode)
            current.path.forEach((path) => {
                newNode.path.push(path)
            })
        })
    }
}


