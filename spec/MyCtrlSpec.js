describe('MyCtrlSpec', function() {

	var MyCtrl, scope;

	beforeEach(module('app'));

	beforeEach(inject(function($rootScope, $controller) {
		scope = $rootScope.$new();
		MyCtrl = $controller('MyCtrl', {
			'$scope': scope
		})
	}))

	it('should call add', function() {
		spyOn(scope, 'add');
		scope.add(3, 4);
		expect(scope.add).toHaveBeenCalledWith(3, 4);
	});


	it('should add to numbers', function() {
		expect(scope.add(1, 2)).toEqual(3);
	})
})