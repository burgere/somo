(function() {
	EmotionsList.$inject = [];
	function EmotionsList() {
		return {
			restrict: 'E',
			templateUrl: 'app/components/emotions-list/emotions-list.html',
			emotions: '=',
			link: function(scope, element, attrs) {

			}
		};
	}
	angular.module('ngapp').directive('emotionsList', EmotionsList);
})();