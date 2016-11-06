var app = angular.module('ngdemo.controllers', []);

app.controller('ImageListCtrl', ['$scope', 'ImagesFactory', 'ImageFactory', '$location',
    function ($scope, ImagesFactory, ImageFactory, $location) {

        // // callback for ng-click 'editUser':
        // $scope.editUser = function (userId) {
        //     $location.path('/user-detail/' + userId);
        // };

        // // callback for ng-click 'deleteUser':
        // $scope.deleteUser = function (userId) {
        //     UserFactory.delete({ id: userId });
        //     $scope.users = UsersFactory.query();
        // };

        // callback for ng-click 'deleteUser':
        $scope.deleteImage = function (imageId) {
            ImageFactory.delete({ id: imageId });
            $scope.images = ImagesFactory.query();
        };


        // // callback for ng-click 'createUser':
        // $scope.createNewUser = function () {
        //     $location.path('/user-creation');
        // };

        $scope.images = ImagesFactory.query();
    }]);
  /* ... */
app.controller('ContainerListCtrl', ['$scope', 'ContainersFactory', 'ContainerFactory', '$location',
    function ($scope, ContainersFactory, ContainerFactory, $location) {

        // // callback for ng-click 'editUser':
        // $scope.editUser = function (userId) {
        //     $location.path('/user-detail/' + userId);
        // };

        // // callback for ng-click 'deleteUser':
        // $scope.deleteUser = function (userId) {
        //     UserFactory.delete({ id: userId });
        //     $scope.users = UsersFactory.query();
        // };

        // // callback for ng-click 'deleteUser':
        // $scope.deleteImage = function (imageId) {
        //     ImageFactory.delete({ id: imageId });
        //     $scope.images = ImagesFactory.query();
        // };


        // // callback for ng-click 'createUser':
        // $scope.createNewUser = function () {
        //     $location.path('/user-creation');
        // };

        $scope.containers = ContainersFactory.query();
    }]);
