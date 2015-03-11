app.controller('MyCtrl', ['$scope',
	function($scope) {
		$scope.add = function(a, b) {
			return a + b;
		}
	}
]);