(function () {
    'use strict';

    angular.module('angular-component-template', []);

})();
(function () {
    'use strict';

    angular
        .module('angular-component-template')
        .directive('angularComponent', componentDirective);

    componentDirective.$inject = [];

    function componentDirective() {

        var directive = {
            restrict: 'E',
            templateUrl: 'component.template.html',
            controller: ComponentController,
            controllerAs: 'vm',
            scope: {
                property: '='
            }
        };

        return directive;
    }

    ComponentController.$inject = [];

    function ComponentController() {
        var vm = this;
        
        //Properties
        
        //Methods
        
        //Events
        
        activate();
        
        //Method Definition
        function activate() {
            console.log('Component Activated');
        }
    }

})();

(function(){angular.module("angular-component-template").run(["$templateCache", function($templateCache) {$templateCache.put("component.template.html","<h1 class=\"title\" ng-bind=\"property\"></h1>\r\n<p class=\"text\">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>");}]);})();