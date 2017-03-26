(function (angular) {
    "use strict";

    angular.module("config").config(['$locationProvider', '$urlRouterProvider', '$httpProvider', '$compileProvider', '$rootScopeProvider',
    function ($locationProvider, $urlRouterProvider, $httpProvider, $compileProvider, $rootScopeProvider) {

            $locationProvider.html5Mode(true);

            $httpProvider.defaults.headers.common['Content-Type'] = 'application/json';
            $httpProvider.defaults.headers.common.Accept = 'application/json';
            $httpProvider.useApplyAsync(true);

            $compileProvider.debugInfoEnabled(false);

            $rootScopeProvider.digestTtl(8);

            $urlRouterProvider.rule(function ($injector, $location) {
                let path = $location.path();

                if (path !== '/' && path.slice(-1) === '/') {
                    $location.replace().path(path.slice(0, -1));
                }
            });

            $urlRouterProvider.otherwise('/');
    }]);
})(angular);