(function() {
	Journal.$inject = [];
	function Journal() {
		return {
			restrict: 'E',
			templateUrl: 'app/components/journal/journal.html',
			link: function(scope, element, attrs) {

			}
		};
	}
	angular.module('ngapp').directive('journal', Journal);
})();