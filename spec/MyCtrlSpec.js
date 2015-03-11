describe('MyCtrlSpec', function() {

	var MyCtrl, scope;

	beforeEach(module('app'));

	beforeEach(inject(function($rootScope, $controller) {
		scope = $rootScope.$new();
		MyCtrl = $controller('MyCtrl', {
			'$scope': scope
		})
	}))

	it('should add to numbers', function() {
		expect(scope.add(1, 2)).toEqual(3);
	})
})