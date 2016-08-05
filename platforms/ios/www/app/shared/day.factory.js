(function() {
	DayFactory.$inject = ['$mdDialog'];

	function DayFactory($mdDialog) {
		
		var day = {
			"emotion": null,
			"journalEntries": null				
		};

		var getEmotion = function() {
			return day.emotion;			
		};

		var setEmotion = function(emotion) {
			day.emotion = emotion;			
		};

		return {
			day: day, 
			getEmotion: getEmotion,
			setEmotion: setEmotion
		};
	}
	angular.module('ngapp').factory('DayFactory', DayFactory);
})();

// angular.module("ngapp").factory("DayFactory", function($mdDialog){ // One of The Ways To Share Informations Across the Controllers

// 	var day = {
// 		"emotion": null,
// 		"journalEntries": null
// 	};

// 	var getEmotion = function() {
// 		return day.emotion;
// 	};

// 	var setEmotion = function(emotion) {
// 		day.emotion = emotion;
// 	};
	
// 	return DayFactory;
// });