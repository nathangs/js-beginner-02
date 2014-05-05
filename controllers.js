
var maxNumberApp = angular.module('maxNumberApp', []);

maxNumberApp.controller('NumberList', function ($scope) {
    $scope.numbers = [];

    $scope.addValue = function () {
        $scope.numbers.push({ value: '' });
    };

    $scope.calculateHighestValue = function () {
        var highestValue = "";
        var resultMessage = document.getElementById("result-message");
        for (var i = 0; i < $scope.numbers.length; i++) {
            var currentValue = parseFloat($scope.numbers[i].value);
            if (highestValue == "") {
                highestValue = currentValue;
            }
            if (currentValue > highestValue) {
                highestValue = currentValue;
            }
        }
        resultMessage.innerText = "Highest value is: " + highestValue;
    };

});