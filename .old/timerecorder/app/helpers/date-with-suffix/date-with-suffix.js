(function (angular) {
    "use strict";

    angular.module("helpers").filter("dateWithSuffix", ["$filter", function ($filter) {
        
        var suffixes = ["th", "st", "nd", "rd"];
        
        return function(input, format) {
            
            var dtfilter = $filter('date')(input, format);
            
            var indexOfSuffix = dtfilter.indexOf("ff");
            
            if(indexOfSuffix > -1){
                var date = new Date(input).getDate();
                var suffixIndex = (date < 30) ? date % 20 : date % 30;
                var suffix = (suffixIndex <= 3) ? suffixes[suffixIndex] : suffixes[0];
                
                dtfilter = dtfilter.replace("ff", suffix);
            }
            
            return dtfilter;
        }
    }]);
})(angular);