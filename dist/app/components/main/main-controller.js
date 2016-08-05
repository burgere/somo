"use strict";

angular.module("ngapp").controller("MainController", function(shared, $state, $scope, $mdSidenav, $mdComponentRegistry, Emotions, $mdDialog, $rootScope, DayFactory){

    var ctrl = this;

    //this.auth = shared.info.auth;

    this.toggle = angular.noop;

    this.title = $state.current.title;

    $scope.day = DayFactory;

    $scope.$watch('day.getEmotion()', function(emotion) {
        $scope.emotion = emotion;
    });

    $scope.$watch('day.getJournalEntries()', function(entries) {
        $scope.journalEntries = entries; 
    });

    $scope.emotions = Emotions.getEmotions();
    $scope.journalEntries = $scope.day.getJournalEntries();

    $scope.days = [
        { name: "Monday" },
        { name: "Tuesday" },
        { name: "Wednesday" },
        { name: "Thursday" },
        { name: "Friday" }

    ];

    $scope.navigate = function(targetState) {
        $rootScope.navTo(targetState);
    };

    this.isOpen = function() { return false };
    $mdComponentRegistry
    .when("left")
    .then( function(sideNav){
      ctrl.isOpen = angular.bind( sideNav, sideNav.isOpen );
      ctrl.toggle = angular.bind( sideNav, sideNav.toggle );
    });

    this.toggleRight = function() {
    $mdSidenav("left").toggle()
        .then(function(){
        });
    };

    this.close = function() {
    $mdSidenav("right").close()
        .then(function(){
        });
    };
});
