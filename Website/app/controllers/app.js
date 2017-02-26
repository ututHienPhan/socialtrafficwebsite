/**
 * Created by UTHEO on 13/02/2017.
 */
var app = angular.module('WarningMaps', ['ngRoute', 'ngResource']);

app.controller('HomeController', function($scope, $http)
{

});

app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/home', {
            templateUrl: 'views/home.html', controller: 'HomeController'
        })
        .when('/maps', {
            templateUrl: 'views/maps.html', controller: 'MapsController'
        })
        .when('/chart', {
            templateUrl: 'views/chart.html', controller: 'ChartController'
        })
        .when('/about', {
            templateUrl: 'views/about.html', controller: 'AboutController'
        })
        .otherwise({
            redirectTo: '/home'
        });

}]);