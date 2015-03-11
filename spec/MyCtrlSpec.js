describe('MyCtrlSpec', function() {

	// placeholders for angular controller and scope
	var MyCtrl, scope;

	// build angular module, controllers depend on it
	beforeEach(module('app'));

	// inject controller with fake scope
	beforeEach(inject(function($rootScope, $controller) {
		scope = $rootScope.$new();
		MyCtrl = $controller('MyCtrl', {
			'$scope': scope
		})
	}))

	it('should call add with arguments', function() {
		spyOn(scope, 'add');
		scope.add(3, 4);
		expect(scope.add).toHaveBeenCalledWith(3, 4);
	});


	it('should add two numbers when called', function() {
		expect(scope.add(1, 2)).toEqual(3);
	})
})