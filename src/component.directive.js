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
