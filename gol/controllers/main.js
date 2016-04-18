var MainController = function ($scope, $interval) {
    $scope.height = 20;
    $scope.width = 40;

    $scope.processGrid = function () {
        $scope.grid = new grid($scope.width, $scope.height);
    }

    $scope.processGrid()

    processNeighbours($scope)
    processAliveNeighbours($scope)

    var go;

    $scope.process = function () {
        $interval.cancel(go)
        go = $interval(function () {
            process($scope)
            processNeighbours($scope)
            processAliveNeighbours($scope)
        }, 100)
    }

    $scope.changeCell = function (index) {
        $scope.grid.cells[index].alive = !$scope.grid.cells[index].alive
        processNeighbours($scope)
        processAliveNeighbours($scope)
    }

}

var processStep = function ($scope) {
    process($scope)
    processNeighbours($scope)
    processAliveNeighbours($scope)
}

var processNeighbours = function ($scope) {
    for (var c = 0; c < $scope.grid.cells.length; c++) {
        getNeighbours($scope, $scope.grid.cells[c])
    }
}

var getNeighbours = function ($scope, cell) {
    var top = 0;
    var left = 0;
    var bottom = $scope.height - 1;
    var right = $scope.width - 1;

    var neighbours = []

    if (cell.x != left) {
        neighbours.push(getCell($scope.grid, cell.x - 1, cell.y))
    }

    if (cell.x != right) {
        neighbours.push(getCell($scope.grid, cell.x + 1, cell.y))
    }

    if (cell.y != top) {
        neighbours.push(getCell($scope.grid, cell.x, cell.y - 1))
    }

    if (cell.y != bottom) {
        neighbours.push(getCell($scope.grid, cell.x, cell.y + 1))
    }

    if (cell.y != bottom && cell.x != right) {
        neighbours.push(getCell($scope.grid, cell.x + 1, cell.y + 1))
    }

    if (cell.y != top && cell.x != left) {
        neighbours.push(getCell($scope.grid, cell.x - 1, cell.y - 1))
    }

    if (cell.y != top && cell.x != right) {
        neighbours.push(getCell($scope.grid, cell.x + 1, cell.y - 1))
    }

    if (cell.y != bottom && cell.x != left) {
        neighbours.push(getCell($scope.grid, cell.x - 1, cell.y + 1))
    }

    cell.neighbours = neighbours;
}

var processAliveNeighbours = function ($scope) {
    for (var c = 0; c < $scope.grid.cells.length; c++) {
        var cell = $scope.grid.cells[c];

        var aliveNeighbours = 0;

        for (var n = 0; n < cell.neighbours.length; n++) {
            var neighbour = cell.neighbours[n];
            if (neighbour.alive) {
                aliveNeighbours++;
            }
        }

        cell.aliveNeighbours = aliveNeighbours
    }
}
var getCell = function (grid, x, y) {
    for (var c = 0; c < grid.cells.length; c++) {
        var cell = grid.cells[c];
        if (cell.x == x && cell.y == y) {
            return cell;
        }
    }
}



var grid = function (width, height) {
    var cells = [];

    for (var h = 0; h < height; h++) {
        for (var w = 0; w < width; w++) {
            cells.push(new cell(w, h))
        }
    }

    return {
        cells: cells,
        width: width,
        height: height
    }
}

var cell = function (x, y) {
    return {
        x: x,
        y: y,
        alive: makeAlive(x, y),
        neighbours: [],
        aliveNeighbours: 0
    }
}


var process = function ($scope) {
    var cells = [];

    for (var c = 0; c < $scope.grid.cells.length; c++) {
        var cell = $scope.grid.cells[c];

        var newCell = {
            x: cell.x,
            y: cell.y,
            alive: false,
            neighbours: [],
            aliveNeighbours: 0
        }

        if (cell.alive && (cell.aliveNeighbours == 2 || cell.aliveNeighbours == 3)) {
            newCell.alive = true;
        } else if (!cell.alive && cell.aliveNeighbours == 3) {
            newCell.alive = true;
        } else {
            newCell.alive = false;
        }

        cells.push(newCell);
    }

    $scope.grid = {
        cells: cells,
        width: $scope.width,
        height: $scope.height
    };
}