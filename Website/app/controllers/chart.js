/**
 * Created by UTHEO on 14/02/2017.
 */
var app = angular.module('WarningMaps', ['ngRoute', 'ngResource']);


app.controller('ChartController', function($scope, $http, $log)
{
    $scope.accidentD = 0;
    $scope.accidentC = 0;
    $scope.fireD = 0;
    $scope.fireC = 0;
    $scope.accchoose = 'Accidents of month';
    $scope.firechoose = 'Fires of month';
    $scope.jsond = '';
    //doi tuong ngay
    var d = new Date();
    $scope.startday = d.getFullYear() + "-" + d.getMonth();
    $scope.endday = d.getFullYear() + "-" + d.getMonth() + "-" + d.getDate();

    $scope.onClickMonth = function()
    {
       /* var getdata = $http.get('https://socialtrafficapi.herokuapp.com/api/users/HienPhan');
        getdata.success(function(response){
            $scope.a = respone.data;
            console.log(a);
         }).error(function(response){
            $scope.a = response;
            window.alert($scope.a);
        });*/
        var postData = {
            date: "2017/02/07"
        };
        $http({
            method: 'GET',
            url:'https://socialtrafficapi.herokuapp.com/api/users/HienPhan'
        }).success(function (response) {
            $scope.a = respone.data;
            console.log(a);
        }).error(function (response) {
            window.alert('Khong ket noi dc voi server');
            });
        $scope.accchoose = 'Accidents of the month';
        $scope.firechoose = 'Fires of the month';
        $scope.accidentC = 11;
        $scope.fireC = 22;
        $scope.accidentD = 10;
    }
    $scope.onClickYear = function()
    {
        $scope.accchoose = 'Accidents of the year';
        $scope.firechoose = 'Fires of the year';
        $scope.accidentC = 19;
        $scope.fireC = 29;
        $scope.accidentD = 10;
        $scope.fireD = 10;
    }
    $scope.ChartDay = [
        {
            'time':'20/2',
            'accident':1,
            'fire':0
        },
        {
            'time':'21/2',
            'accident':1,
            'fire':1
        },
        {
            'time':'22/2',
            'accident':0,
            'fire':1
        },
        {
            'time':'23/2',
            'accident':2,
            'fire':2
        },
        {
            'time':'24/2',
            'accident':1,
            'fire':1
        },
        {
            'time':'25/2',
            'accident':1,
            'fire':3
        },
        {
            'time':'26/2',
            'accident':4,
            'fire':1
        }
    ];
    $scope.ChartWeek = [
        {
            'time':'30/1',
            'accident':13,
            'fire':10
        },
        {
            'time':'6/2',
            'accident':13,
            'fire':10
        },
        {
            'time':'13/2',
            'accident':8,
            'fire':7
        },
        {
            'time':'20/2',
            'accident':9,
            'fire':9
        }
    ];
    $scope.ChartMonth = [
        {
            'time':'2/2016',
            'accident':13,
            'fire':10
        },
        {
            'time':'3/2016',
            'accident':19,
            'fire':18
        },
        {
            'time':'4/2016',
            'accident':10,
            'fire':11
        },
        {
            'time':'5/2016',
            'accident':22,
            'fire':21
        },
        {
            'time':'6/2016',
            'accident':11,
            'fire':10
        },
        {
            'time':'7/2016',
            'accident':12,
            'fire':14
        },
        {
            'time':'8/2016',
            'accident':20,
            'fire':17
        },
        {
            'time':'9/2016',
            'accident':12,
            'fire':23
        },
        {
            'time':'10/2016',
            'accident':31,
            'fire':20
        },
        {
            'time':'11/2016',
            'accident':18,
            'fire':16
        },
        {
            'time':'12/2016',
            'accident':30,
            'fire':14
        },
        {
            'time':'1/2017',
            'accident':56,
            'fire':23
        }
    ];
    //ve bieu do
    google.charts.load('current', {'packages':['corechart']});
    google.charts.setOnLoadCallback(drawChart);
    function drawChart() {
        //bieu do theo tuan
        var data_week = new google.visualization.DataTable();
        data_week.addColumn('string', 'Time');
        data_week.addColumn('number', 'Accident');
        data_week.addColumn('number', 'Fire');
        var numberRow = 0;
        numberRow = $scope.ChartWeek.length;
        data_week.addRows(numberRow);
        var i = 0;
        for(i = 0;  i < numberRow; i++ ){
            data_week.setCell(i, 0, $scope.ChartWeek[i].time);
            data_week.setCell(i, 1, $scope.ChartWeek[i].accident);
            data_week.setCell(i, 2, $scope.ChartWeek[i].fire);
        }
        var options_week = {
            title: 'Accident and fire chart on week',
            curveType: 'function',
            legend: {position: 'bottom'},
        }
        var chart_col = new google.visualization.ColumnChart(document.getElementById('draw_chart_week'));
        chart_col.draw(data_week, options_week);

        //bieu do theo ngay
        var data_day = new google.visualization.DataTable();
        data_day.addColumn('string', 'Time');
        data_day.addColumn('number', 'Accident');
        data_day.addColumn('number', 'Fire');
        var numberRow = 0;
        numberRow = $scope.ChartDay.length;
        data_day.addRows(numberRow);
        var i = 0;
        for(i = 0;  i < numberRow; i++ ){
            data_day.setCell(i, 0, $scope.ChartDay[i].time);
            data_day.setCell(i, 1, $scope.ChartDay[i].accident);
            data_day.setCell(i, 2, $scope.ChartDay[i].fire);
        }
        var options_day = {
            title: 'Accident and fire chart by day',
            curveType: 'function',
            legend: {position: 'bottom'},
        }
        var chart_col = new google.visualization.LineChart(document.getElementById('draw_chart_day'));
        chart_col.draw(data_day, options_day);

        //bieu do theo thang
        var data_month = new google.visualization.DataTable();
        data_month.addColumn('string', 'Time');
        data_month.addColumn('number', 'Accident');
        data_month.addColumn('number', 'Fire');
        var numberRow = 0;
        numberRow = $scope.ChartMonth.length;
        data_month.addRows(numberRow);
        var i = 0;
        for(i = 0;  i < numberRow; i++ ){
            data_month.setCell(i, 0, $scope.ChartMonth[i].time);
            data_month.setCell(i, 1, $scope.ChartMonth[i].accident);
            data_month.setCell(i, 2, $scope.ChartMonth[i].fire);
        }
        var options_month = {
            title: 'Accident and fire chart by month',
            curveType: 'function',
            legend: {position: 'bottom'},
        }
        var chart_col = new google.visualization.LineChart(document.getElementById('draw_chart_month'));
        chart_col.draw(data_month, options_month);
    }


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