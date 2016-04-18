(function (angular) {
    "use strict";

    var HOME_STATE_ROUTE = "authRequired.home.index"

    angular.module("routes").config(["$stateProvider", function ($stateProvider) {
        $stateProvider.state(HOME_STATE_ROUTE, {
            url: "/",
            templateUrl: "app/routes/home/index/home-index.template.html",
            controller: "HomeIndexController",
            controllerAs: "ctrl",
            resolve: {
                history: ["TimespentTaskService", function (TimespentTaskService) {
                    return TimespentTaskService.get();
                }]
            }
        });
    }]);
})(angular);