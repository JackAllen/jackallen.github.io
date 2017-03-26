(function(){
    "use strict";
    
    var TIMESPENT_TASK_STORE = "tasks";
    
    angular.module("services").factory("TimespentTaskStore", ["$window", function($window){    
            
        function get(){
            var tasks = $window.localStorage[TIMESPENT_TASK_STORE];
            return (tasks && JSON.parse(tasks)) || [];
        }
        
        function save(tasks){
            $window.localStorage[TIMESPENT_TASK_STORE] = JSON.stringify(tasks);
            return true;
        }
        
        return {
            get: get,
            save: save
        }
    }]);
})();