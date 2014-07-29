angular.module('encoreApp')
    .controller('StatusCtrl', function ($scope, $http) {
        var req = {
            url: '',
            method: 'GET'
        };
        $http(req).
        success(function(data, status, headers, config) {
            $scope.status = data;
        }).
        error(function(data, status, headers, config) {
            $scope.status = [];
            $scope.notification = { message: 'status err', type: 'error' };
        });
    });
