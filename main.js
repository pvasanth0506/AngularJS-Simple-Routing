var sample = angular.module('sampleApp', ['ui.router']);

sample.controller('homeCtrl', ['$scope', function ($scope) {
    $scope.pageDesc = "Welocome to home page";
}]);

sample.controller('contactsCtrl', ['$scope', function ($scope) {
    $scope.pageDesc = "Welocome to Contacts page"
}]);

sample.controller('aboutCtrl', ['$scope', function ($scope) {
    $scope.pageDesc = "Welocome to About  page"
}]);