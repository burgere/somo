(function() {
	DayFactory.$inject = ['$mdDialog'];

	function DayFactory($mdDialog) {
		
		var day = {
			"emotion": null,
			"journalEntries":
				[
					{"message": "I feel sad because I skimmed my knee."},
					{"message": "I feel happy because I aced a test."},
					{"message": "I feel worried because I didn't see Sarah today."},
				]				
		};

		var getEmotion = function() {
			return day.emotion;			
		};

		var setEmotion = function(emotion) {
			day.emotion = emotion;			
		};

		var addJournalEntry = function(entry) {
			day.journalEntries.push(entry);
		};

		var getJournalEntries = function() {
			return day.journalEntries;
		};

		var removeJournalEntry = function(index) {
			day.journalEntries.splice(index, 1);
		};

		return {
			day: day, 
			getEmotion: getEmotion,
			setEmotion: setEmotion,
			addJournalEntry: addJournalEntry,
			getJournalEntries: getJournalEntries,
			removeJournalEntry: removeJournalEntry
		};
	}
	angular.module('ngapp').factory('DayFactory', DayFactory);
})();