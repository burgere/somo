(function(){
  'use strict';

  angular
      .module('ngapp').controller('LoginController', LoginController);

  LoginController.$inject = ['$rootScope', '$scope', 'shared', '$mdDialog'];

  function LoginController ($rootScope, $scope, shared, $mdDialog) {
	$scope.loginDialogData = {
		"title": "Login",
		"placeholder": "PIN",
		"textContent": "Enter your number!",
		"ok": "All done!",
		"cancel": "Nevermind"
	};

	$scope.promptLogin = function() {
		$mdDialog.show({
			controller: LoginController,
			templateUrl: 'app/components/login/login-dialog.html'
		});
	};

  	$scope.login = function() {
  		$rootScope.navTo('main');
  		$scope.close();
  	};

  	$scope.close = function() {
  		$mdDialog.hide();
  	};


  }

})();