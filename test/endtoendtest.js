describe('click test', function() {
    beforeEach(function() {
        browser().navigateTo('/');
    });

    it('should check ng-click operation', function() {
        expect(binding('count')).toBe('0');
        element('#btn').click();
        expect(binding('count')).toBe('1');
    });
});