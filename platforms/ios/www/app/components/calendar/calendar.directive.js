(function() {
	Calendar.$inject = [];
	function Calendar() {
		return {
			restrict: 'E',
			templateUrl: 'app/components/calendar/calendar.html',
			days: '=',
			link: function(scope, element, attrs) {

			}
		};
	}
	angular.module('ngapp').directive('calendar', Calendar);
})();