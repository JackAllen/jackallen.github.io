(function (angular) {
    "use strict";

    angular.element(document).ready(function () {
        angular.bootstrap(document.querySelector('[data-app]'), ["main"], { strictDi: true });
    });
})(angular);