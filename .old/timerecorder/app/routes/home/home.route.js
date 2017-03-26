(function (angular) {
    "use strict";

    var HOME_STATE_ROUTE = "authRequired.home"

    angular.module("routes").config(["$stateProvider", function ($stateProvider) {
        $stateProvider.state(HOME_STATE_ROUTE, {
            abstract: true,
            template: "<ui-view flex></ui-view>"
        });
    }]);
})(angular);