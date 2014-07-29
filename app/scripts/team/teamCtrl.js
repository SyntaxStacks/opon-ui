angular.module('encoreApp')
    .controller('TeamCtrl', function ($scope, Salutation) {
        $scope.hello = Salutation.get({ name: 'Developer' });
    });
