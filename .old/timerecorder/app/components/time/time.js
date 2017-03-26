(function (angular) {
    "use strict";

    angular.module("components").directive("time", function () {
        return {
            restrict: "E",
            templateUrl: "app/components/time/time.template.html",
            scope: {
                date: "="
            },
            link: function(scope, element, attrs, ctrl) {
            }
        }
    });
})(angular);