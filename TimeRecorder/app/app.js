(function (angular) {
    "use strict";

    var config = angular.module("config", ['ui.router']);
    var services = angular.module("services", []);
    var routes = angular.module("routes", [config.name, services.name]);
    var components = angular.module("components", []);
    var helpers = angular.module("helpers", []);

    angular.module("main", [config.name, routes.name, components.name, helpers.name]);
})(angular);