(function (angular) {
    "use strict";

    angular.module("components").directive("timeRecorder", ["TimespentTaskService", function (TimespentTaskService) {
        return {
            restrict: "E",
            templateUrl: "app/components/time-recorder/time-recorder.template.html",
            bindToController: true,
            controller: "TimeRecorderController",
            controllerAs: "ctrl",
            scope: {
                history: "="
            },
            link: function (scope, element, attrs, ctrl) {
                ctrl.activeItemIndex = JSON.parse(window.localStorage.activeItem) || 0;
                ctrl.activeItem = ctrl.history[ctrl.activeItemIndex];
                ctrl.state = ctrl.activeItem ? true : false;
                scope.date = Date.now();

                scope.$watch(function () {
                    return ctrl.activeItemIndex;
                }, function (activeItemIndex) {
                    var activeItem = ctrl.history[activeItemIndex];

                    if (!activeItem) {
                        return;
                    }

                    window.localStorage.activeItem = activeItemIndex;

                    activeItem.started = Date.now();
                    ctrl.activeItem = activeItem;
                });
            }
        }
    }]);
})(angular);