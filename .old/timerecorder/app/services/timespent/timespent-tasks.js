(function () {
    "use strict";

    angular.module("services").factory("TimespentTaskService", ["TimespentTaskStore", function (TimespentTaskStore) {

        function get() {
            return TimespentTaskStore.get();
        }

        function save(tasks) {
            TimespentTaskStore.save(tasks);
        }

        function remove(index) {
            var tasks = get();
            save(_.slice(tasks, index));
        }

        return {
            get: get,
            save: save,
            remove: remove
        }
    }]);
})();