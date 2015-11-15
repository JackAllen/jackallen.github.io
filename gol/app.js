var app = angular.module("GameOfLife", []);

app.controller("MainController", ["$scope","$interval", MainController]);

var makeAlive = function (x, y) {
    return (x == 1 && y == 1) ||
        (x == 1 && y == 3) ||
        (x == 4 && y == 1) ||
        (x == 5 && y == 2) ||
        (x == 5 && y == 3) ||
        (x == 5 && y == 4) ||
        (x == 4 && y == 4) ||
        (x == 3 && y == 4) ||
        (x == 2 && y == 4);
}