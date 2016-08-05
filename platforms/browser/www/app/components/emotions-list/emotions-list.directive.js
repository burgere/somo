(function() {
	EmotionsList.$inject = [];
	function EmotionsList() {
		return {
			restrict: 'E',
			templateUrl: 'app/components/emotions-list/emotions-list.html',
			emotions: '=',
			link: function(scope, element, attrs) {
				console.log(scope.emotions);
			}
		};
	}
	angular.module('ngapp').directive('emotionsList', EmotionsList);
})();