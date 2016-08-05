(function() {
	Emotion.$inject = ['shared', '$mdDialog'];
	function Emotion(shared, $mdDialog) {
		return {
			restrict: 'E',
			templateUrl: 'app/components/emotion/emotion.html',
			emotion: '=',
			link: function(scope, element, attrs) {
				// scope.data = {
				// 	"emotion": scope.emotion,
				// 	"title": "You're feeling " + scope.emotion.name + ".",
				// 	"placeholder": "I'm feeling " + scope.emotion.name + " because...",
				// 	"textContent": "Want to tell me more?",
				// 	"ok": "All done!",
				// 	"cancel": "Nevermind",
				// 	"img": scope.emotion.image,
				// 	"ariaLabel": "Tell me more.." 
				// };
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
					}
				};
			}
		};
	}
	angular.module('ngapp').directive('emotion', Emotion);
})();