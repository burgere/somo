"use strict";

angular.module("ngapp").service("Emotions", function($mdDialog){ // One of The Ways To Share Informations Across the Controllers

    var emotions = {
		"emotions": [
			{"name": "happy", "image": "img/happy.png"},
			{"name": "sad", "image": "img/sad.png"},
			{"name": "excited", "image": "img/excited.png"},
			{"name": "mad", "image": "img/mad.png"},
			{"name": "meh", "image": "img/meh.png"},
			{"name": "worried", "image":"img/worried.png"}
		]
    };

    this.getEmotions = function() {
    	return emotions;
    };

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