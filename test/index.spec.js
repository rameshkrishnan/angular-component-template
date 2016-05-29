describe('angularComponent Directive', function () {
    'use strict';
    
    beforeEach(module('angular-component-template'));

    var scope, template,
        title = 'Hello World';
    
    beforeEach(inject(function($rootScope, $compile) {
        scope = $rootScope.$new();
        var element = angular.element('<angular-component property="\'' + title + '\'"></angular-component>');
        template = $compile(element)(scope);
        scope.$digest();
    }));

    it("should have title", function() {
        expect(template.html()).toMatch(title);
    });

});