angular.module('encoreApp')
    .controller('StatusCtrl', function ($scope, Salutation) {
        $scope.hello = Salutation.get({ name: 'Developer' });
    });
