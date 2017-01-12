'use strict'
let app = angular.module('MuseumReservation', ['ui.router', 'authorsController'])

app.config(['$stateProvider', '$urlRouterProvider', 
    function($stateProvider, $urlRouterProvider){
        
    $urlRouterProvider.otherwise('/dashboard')
    
    $stateProvider
        .state('home', {
            url: '/home',
            template : '<h2>Home</h2>'
        })
        .state('museums', {
            url: '/museums',
            templateUrl: 'views/museums.html',
            controller: 'museumsController'
        })
        

        .state('visit', {
            url: '/visit',
            templateUrl : 'views/visit.html', 
            controller: 'visitController'
        })
        
        .state('contact', {
            url: '/contact',
            template : '<h2>Contact<h2>' 
            
        })
}])

