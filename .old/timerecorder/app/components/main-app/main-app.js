(function (angular) {
    "use strict";

    angular.module("components").directive("mainApp", function () {
        return {
            restrict: "E",
            templateUrl: "app/components/main-app/main-app.template.html"
        }
    });
})(angular);