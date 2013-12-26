'use strict';

describe('true test', function() {
    it('should be true', function() {
        expect(true).toBe(true);
    });
});

describe('click test', function() {
    beforeEach(function() {
        //browser().navigateTo('http://localhost:3000');
    });

    it('should check ng-click operation', function() {
        var initialValue = element('#inp').text();
        element('#inp').click();
        expect(element('#inp').text()).toBe(initialValue++);

        /*expect(binding('count')).toBe('0');
        //element(' :button').click();
        element('button[ng-click="newToken()"]').click();
        expect(binding('count')).toBe('1');*/
    });
});