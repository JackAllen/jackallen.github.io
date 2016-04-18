(function (angular) {
    "use strict";

    angular.module("routes").controller("HomeIndexController", ["history", "$scope", "TimespentTaskService", function (history, $scope, TimespentTaskService) {
        var ctrl = this;
        var items = [];

        ctrl.activeItemIndex = window.localStorage.activeItem || 0;

        ctrl.activeItem = history[ctrl.activeItemIndex];

        

        $scope.$watch(function () {
            return ctrl.history;
        }, function () {
            if (ctrl.history) {
                TimespentTaskService.save(angular.copy(ctrl.history));
            }
        }, true);

        function removeItem(index) {
            history.splice(index, 1);
        }

        _.extend(ctrl, {
            history: history,
            removeItem: removeItem
        });
    }]);
})(angular);