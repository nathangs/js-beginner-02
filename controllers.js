
var maxNumberApp = angular.module('maxNumberApp', []);

maxNumberApp.controller('NumberList', function ($scope) {
    $scope.numbers = [{ value: '' }, { value: '' }, { value: '' }];
    var resultMessageElement = document.getElementById("result-message");

    $scope.addValue = function () {
        $scope.numbers.push({ value: '' });
    };

    $scope.resetValues = function () {
        $scope.numbers = [{ value: '' }, { value: '' }, { value: '' }];
        resultMessageElement.innerText = "";
    };

    $scope.calculateHighestValue = function () {
        var highestValue = "";
        for (var i = 0; i < $scope.numbers.length; i++) {
            var currentValue = parseFloat($scope.numbers[i].value);
            if (highestValue == "") {
                highestValue = currentValue;
            }
            if (currentValue > highestValue) {
                highestValue = currentValue;
            }
        }
        resultMessageElement.innerText = "Highest value is: " + highestValue;
    };

    //$scope.onSubmit = function () {
    //    $scope.calculateHighestValue();
    //}

});