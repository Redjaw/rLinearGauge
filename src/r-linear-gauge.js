/*Copyright (c) 2017 Redjaw <davide.vernassa@gmail.com>

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the "Software"), to deal in the Software without
restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.*/
'use strict';
(function() {

    angular.module('r_linear_gauge', [])
        .directive('rLinearGauge', function($q) {
            return {
                scope: {
                    ngModel: "=",
                    target: "=",
                    thresholds: "=",
                    theme: "@?",
                    tickNumber: "@?"
                },
                templateUrl: '../src/templates/rLinearGauge.tpl.html',
                replace: true,
                link: function(scope, elem, attr) {
                    scope.maximumValues = [],
                        scope.minimumValues = [];
                    scope.totalTicks = scope.tickNumber != undefined ? parseInt(scope.tickNumber) : 10;

                    scope.getMinorTicks = function(num) {
                        return new Array(num);
                    }

                    scope.getMinMax = function() {
                        var deferred = $q.defer();
                        var promise = deferred.promise;
                        promise.then(function() {
                            angular.forEach(scope.thresholds, function(value, key) {
                                scope.maximumValues.push(value.max);
                                scope.minimumValues.push(value.min);
                            })
                        }).then(function() {
                            scope.min = Math.min.apply(Math, scope.minimumValues);
                            scope.max = Math.max.apply(Math, scope.maximumValues);
                        });
                        deferred.resolve();
                    };

                    scope.getMinMax();

                    scope.getTickOffset = function(element) {
                        return ((element + 1) / scope.totalTicks) * 100 + '%';
                    };

                    scope.normalize = function(value) {
                        return (value / scope.max) * 100 + '%';
                    };

                    scope.normalizeRange = function(value) {
                        return ((value.max - value.min) / scope.max) * 100 + '%';
                    };
                }
            };
        });

})();