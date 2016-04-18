(function (angular) {
    "use strict";

    angular.module("components").directive("stopWatch", ["$interval", function ($interval) {
        return {
            restrict: "E",
            require: "^timeRecorder",
            templateUrl: "app/components/stop-watch/stop-watch.template.html",
            controller: "StopWatchController",
            controllerAs: "ctrl",
            bindToController: true,
            scope: {
                item: "="
            },
            link: function (scope, element, attrs, ctrl) {
                var timer;

                function start() {
                    stop();

                    if (!scope.ctrl.item) {
                        return;
                    }
                    
                    ctrl.state = true;

                    scope.ctrl.item.started = Date.now();
                    
                    timer = $interval(function () {
                        scope.ctrl.item.duration += 1000;
                    }, 1000);
                }

                function stop() {
                    ctrl.state = false;
                    $interval.cancel(timer);
                }

                scope.$watch(function () {
                    return ctrl.state;
                }, function (state) {
                    state ? start() : stop();
                });

                scope.$on("destroy", function () {
                    $interval.cancel(timer);
                    timer = undefined;
                });
            }
        }
    }]);
})(angular);