angular.module('encoreApp')
    .controller('TeamStatusCtrl', function ($scope, $http) {
          //var id = $routeParams.id;
          var req = {
              url: '',
              method: 'GET'
          };
          $http(req).
          success(function(data, status, headers, config) {
              $scope.teamStatus = data;
          }).
          error(function(data, status, headers, config) {
              $scope.teamStatus = [];
              $scope.notification = { message: 'teamStatus err', type: 'error' };
          });
    });
