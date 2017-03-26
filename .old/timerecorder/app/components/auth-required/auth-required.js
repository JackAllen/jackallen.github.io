(function(angular){
    "use strict"
    
    angular.module("components").directive("authRequired", function(){
        return {
            restrict: "E", 
            controller: function(){
                this.wht = "waht";
            },
            controllerAs: "ctrl",
            bindToController: true,           
            templateUrl:"app/components/auth-required/auth-required.template.html"
        }
    });
})(angular);