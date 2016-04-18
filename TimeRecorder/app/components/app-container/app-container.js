(function (angular) {
    "use strict";

    angular.module("components").directive("appContainer", function () {
        return {
            restrict: "E",
            controller: function(){
                this.hello = "eelo";
            },
            controllerAs: "ctrl",
            bindToController: true,
            templateUrl: "app/components/app-container/app-container.template.html",
            link: function () {

            }
        }
    });
})(angular);