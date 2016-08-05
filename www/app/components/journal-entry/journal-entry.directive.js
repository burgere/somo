(function() {
	JournalEntry.$inject = ['DayFactory'];
	function JournalEntry(DayFactory) {
		return {
			restrict: 'E',
			templateUrl: 'app/components/journal-entry/journal-entry.html',
			entry: '=',
			index: '=',
			link: function(scope, element, attrs) {
			}
		};
	}
	angular.module('ngapp').directive('journalEntry', JournalEntry);
})();