let ctrl = angular.module('messageController')

const Server="https://proiect-kristo-marina-marinak.c9user.io"
ctrl.controller('messageController',
['$scope', '$http', function($scope,
$http{
$scope.contructor = () => {
    $http.get(SERVER + '/museums')
    .then((reponse) => {
        
    })
    .catch((error) => {
        console.log(error)
        $scope.message = 'a problem occured'
    }
    )
}
$scope.constructor()
)])