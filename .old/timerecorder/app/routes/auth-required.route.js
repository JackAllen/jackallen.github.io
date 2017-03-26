(function (angular) {
    "use strict";

    var AUTH_REQUIRED_STATE_ROUTE = "authRequired"

    angular.module("routes").config(["$stateProvider", function ($stateProvider) {        
        $stateProvider.state(AUTH_REQUIRED_STATE_ROUTE, {
            abstract: true,
            views: {
                '': {
                    template: "<auth-required flex></auth-required>",
                    controller: function () {},
                    controllerAs: "ctrl",
                    resolve: {}
                }
            }
        });
    }]);
})(angular);