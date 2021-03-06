angular.module("com.sh.demo",
    [
        "ngRoute",
        "ngAnimate",
        "com.sh.demo.services",
        "com.sh.demo.controllers",
        "com.sh.demo.directives"
    ])
.config(["$routeProvider",function($routeProvider){

    $routeProvider.when("/login",{
        templateUrl:"app/views/Login-view.html",
        controller:"LoginController"
    }).when("/main",{
        templateUrl:"main.html",
        controller:"mainController"
    })
    .otherwise("/login");
}])