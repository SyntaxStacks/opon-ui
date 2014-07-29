angular.module('encoreApp')
    .controller('TeamCtrl', function ($scope, $http) {
          var req = {
              url: '',
              method: 'GET'
          };
          $http(req).
          success(function(data, status, headers, config) {
              $scope.teams = data;
          }).
          error(function(data, status, headers, config) {
              $scope.teams = [];
              $scope.notification = { message: 'team err', type: 'error' };
          });
    });
