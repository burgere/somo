"use strict";

angular.module("ngapp").service("shared", function($mdDialog){

    this.showDialogue = function(data) {
      var dialogue = $mdDialog.prompt()
	      .title(data.title)
	      .textContent(data.textContent)
	      .placeholder(data.placeholder)
	      .ariaLabel(data.ariaLabel)
	      .ok(data.ok)
	      .cancel(data.cancel);

	      $mdDialog.show(dialogue);
    };

    var journalEntries = {
		"entries": [
			{"day": "Monday", "message": "I feel sad because I skimmed my knee."},
			{"day": "Tuesday", "message": "I feel happy because I aced a test."},
			{"day": "Wednesday", "message": "I feel worried because I didn't see Sarah today."},
			{"day": "Thursday", "message": "I feel ok because nothing really happened."},
			{"day": "Friday", "message": "I feel happy because today is Friday"},
			{"day": "Monday", "message":"I feel sad because today is Monday."}
		]
    };


    this.getJournalEntries = function() {
    	return journalEntries;
    }
});
