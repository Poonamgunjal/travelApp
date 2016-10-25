export default function appController($scope, $http) {
    'ngInject';

    $scope.mailContent = '';
    $scope.model = {};
    $scope.countries = ['Australia', 'Brazil', 'Canada',
        'China', 'Denmark', 'France', 'Hong Kong', 'India', 'Japan', 'Malaysia'];

    $scope.dateOptions = {
        dateDisabled: disabled,
        formatYear: 'yy',
        maxDate: new Date(2020, 5, 22),
        minDate: new Date(),
        startingDay: 1
    };
    $scope.open1 = function () {
        $scope.popup1.opened = true;
    };
    function disabled(data) {

    };

    $scope.send = function () {

        $http({
            method: 'GET',
            url: 'http://192.168.10.64:3006/postEmail?email=' + $scope.model.email +
            '&fName=' + $scope.model.fname +
            '&lName=' + $scope.model.lname +
            '&location=' + $scope.model.selected +
            '&startdt=' + $scope.model.dt +
            '&returndt=' + $scope.model.dt1 +
            '&mobile=' + $scope.model.mobileNo
        })
        $scope.model = {};
    };

}