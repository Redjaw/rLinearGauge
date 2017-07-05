'use strict';
var myApp = angular.module('demoApp', ['r_linear_gauge']);
myApp.config(['$compileProvider', function($compileProvider) {
    $compileProvider.debugInfoEnabled(false);
}]);
myApp.controller('mainCtrl', function($scope, $interval) {
    $scope.demoModel = 24;
    $scope.demoModel2 = -10;
    $scope.demoModel3 = -50;
    $scope.demoThresholds = [{
        'color': '#039BE5',
        'min': 0,
        'max': 60
    }, {
        'color': '#0288D1',
        'min': 60,
        'max': 80
    }, {
        'color': '#0277BD',
        'min': 80,
        'max': 180
    }];

    $scope.demo2Thresholds = [{
        'color': '#FFB74D',
        'min': -50,
        'max': 10
    }, {
        'color': '#FFA726',
        'min': 10,
        'max': 70
    }, {
        'color': '#FF9800',
        'min': 70,
        'max': 180
    }, {
        'color': '#FB8C00',
        'min': 180,
        'max': 210
    }];

    $scope.demo3Thresholds = [{
        'color': '#8BC34A',
        'min': -100,
        'max': -80
    }, {
        'color': '#FFC107',
        'min': -80,
        'max': -40
    }, {
        'color': '#F44336',
        'min': -40,
        'max': -10
    }]

    $interval(function() {
        $scope.demoModel = Math.random() * 180;
    }, 5000);

});