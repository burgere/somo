"use strict";

angular.module("ngapp", [ "ngTouch", "ui.router", "ngMdIcons", "ngMaterial", "ngCordova", "ngStorage" ])
// ngTouch is No Longer Supported by Angular-Material

.run(function($rootScope, $cordovaDevice, $cordovaStatusbar, $state){
  document.addEventListener("deviceready", function () {
    $cordovaStatusbar.overlaysWebView(false); // Always Show Status Bar
    $cordovaStatusbar.styleHex('#fc8264'); // Status Bar With Red Color, Using Angular-Material Style
    window.plugins.orientationLock.lock("portrait");
  }, false);
  /* Hijack Android Back Button (You Can Set Different Functions for Each View by Checking the $state.current)
  document.addEventListener("backbutton", function (e) {
      if($state.is('init')){
        navigator.app.exitApp();
      }  else{
        e.preventDefault();
      }
    }, false);*/
    $rootScope.navTo = function(state, params) {
        $state.go(state, params);
    };
})

.config(function($mdThemingProvider) { // Angular-Material Color Theming
  $mdThemingProvider.theme('default')
    .primaryPalette('red')
    .accentPalette('red');
});
