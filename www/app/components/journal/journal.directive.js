(function() {
	Journal.$inject = ['$mdDialog', 'DayFactory'];
	function Journal($mdDialog, DayFactory) {
		return {
			restrict: 'E',
			templateUrl: 'app/components/journal/journal.html',
			link: function(scope, element, attrs) {
				scope.showDialogue = function() {
					$mdDialog.show({
						controller: JournalDialogController,
						templateUrl: 'app/components/journal/journal-dialog.html',
					});
				};
				function JournalDialogController(scope, $mdDialog) {
					scope.close = function() {
						$mdDialog.hide();
					};
					scope.addJournalEntry = function(text) {
						var entry = {
							"message": text
						};
						DayFactory.addJournalEntry(entry);
						$mdDialog.hide();
					};
				};
			}
		};
	}
	angular.module('ngapp').directive('journal', Journal);
})();