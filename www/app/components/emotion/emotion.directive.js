(function() {
	Emotion.$inject = ['shared', '$mdDialog', 'DayFactory'];
	function Emotion(shared, $mdDialog, DayFactory) {
		return {
			restrict: 'E',
			templateUrl: 'app/components/emotion/emotion.html',
			emotion: '=',
			link: function(scope, element, attrs) {
				scope.showDialogue = function() {
					$mdDialog.show({
						controller: EmotionDialogController,
						templateUrl: 'app/components/emotion/emotion-dialog.html',
						locals: {
							emotion: scope.emotion
						}
					});
				};
				function EmotionDialogController(scope, $mdDialog, emotion) {
					scope.emotion = emotion;
					scope.close = function() {
						$mdDialog.hide();
					};
					scope.saveEmotion = function(emotion) {
						DayFactory.setEmotion(emotion);
						$mdDialog.hide();
					};
				};
			}
		};
	}
	angular.module('ngapp').directive('emotion', Emotion);
})();