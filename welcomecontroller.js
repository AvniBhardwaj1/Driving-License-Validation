angular.module('myApp', [])
.controller('WelcomeController', function($scope, $window) {
    $scope.redirectToAnotherPage = function() {
        // Redirect to another HTML page
        $window.location.href = "main.html";
    };
});
