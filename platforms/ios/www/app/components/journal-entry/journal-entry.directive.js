(function() {
	JournalEntry.$inject = [];
	function JournalEntry() {
		return {
			restrict: 'E',
			templateUrl: 'app/components/journal-entry/journal-entry.html',
			entry: '=',
			link: function(scope, element, attrs) {

			}
		};
	}
	angular.module('ngapp').directive('journalEntry', JournalEntry);
})();