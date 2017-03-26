(function (angular) {
    "use strict";

    angular.module("components").directive("controlPanel", ["$interval", function ($interval) {
        return {
            restrict: "E",
            require: "^timeRecorder",
            templateUrl: "app/components/control-panel/control-panel.template.html",
            controller: function () {},
            controllerAs: "ctrl",
            bindToController: true,
            scope: {},
            link: function (scope, element, attrs, ctrl) {

                function play() {
                    ctrl.state = true;
                }

                function pause() {
                    ctrl.state = false;
                }

                function add() {
                    var item = {};

                    ctrl.history.push({
                        created: Date.now(),
                        duration: 0
                    });

                    document.querySelector("#active-item-description").focus();

                    ctrl.activeItemIndex = ctrl.history.length - 1;
                    ctrl.activeItem = ctrl.history[ctrl.activeItemIndex];
                }

                function clear() {
                    ctrl.history = [];
                    ctrl.activeItemIndex = 0;
                    ctrl.activeItem = {};
                    ctrl.state = false;
                }

                scope.$watch(function () {
                    return ctrl.state;
                }, function (state) {
                    scope.ctrl.state = state;
                })

                function toggleState() {
                    ctrl.state ? pause() : play();
                }

                function state() {
                    return ctrl.state;
                }

                function addFive() {
                    ctrl.activeItem.duration += 300000;
                }

                function takeFive() {
                    ctrl.activeItem.duration -= 300000;
                }

                angular.element(document).on("keydown", function (e) {
                    if (e.altKey && e.keyCode == 'N'.charCodeAt(0) && !e.shiftKey) {
                        e.preventDefault();

                        scope.ctrl.add();
                        document.querySelector("#active-item-description").focus();
                        scope.$apply();
                    }
                });

                _.extend(scope.ctrl, {
                    play: play,
                    pause: pause,
                    clear: clear,
                    toggleState: toggleState,
                    state: state,
                    add: add,
                    addFive: addFive,
                    takeFive: takeFive
                });
            }
        }
    }]);
})(angular);