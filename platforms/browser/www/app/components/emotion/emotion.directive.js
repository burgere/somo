(function() {
	Emotion.$inject = ['Emotions'];
	function Emotion(Emotions) {
		return {
			restrict: 'E',
			templateUrl: 'app/components/emotion/emotion.html',
			emotion: '=',
			link: function(scope, element, attrs) {
				scope.data = {
					"emotion": scope.emotion,
					"title": "You're feeling " + scope.emotion.name + ".",
					"placeholder": "I'm feeling " + scope.emotion.name + " because...",
					"textContent": "Want to tell me more?",
					"ok": "All done!",
					"cancel": "Nevermind",
					"img": scope.emotion.image,
					"ariaLabel": "Tell me more.." 
				};
				scope.showDialogue = function() {
					Emotions.showDialogue(scope.data);
				};
			}
		};
	}
	angular.module('ngapp').directive('emotion', Emotion);
})();