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
});
