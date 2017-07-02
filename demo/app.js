'use strict';
var myApp = angular.module('demoApp', ['r_linear_gauge']);
myApp.config(['$compileProvider', function ($compileProvider) {
  $compileProvider.debugInfoEnabled(false);
}]);
myApp.controller('mainCtrl', function($scope,$interval) {
    $scope.demoModel=24;
    $scope.demoThresholds = [{
        'color':'#039BE5',
        'min':0,
        'max':60
    },{
        'color':'#0288D1',
        'min':60,
        'max':80
    },{
        'color':'#0277BD',
        'min':80,
        'max':180
    }]

    $interval(function(){
        $scope.demoModel = Math.random()*180;
    }, 3000);

});
