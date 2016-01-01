var app = angular.module('portfolio', ['ngRoute', 'ngAnimate']);

app.controller('landingController', function($scope, $log){

});


//app.config(function($routeProvider){
//   $routeProvider
//       .when('/', {
//           templateUrl: 'landing.html',
//           controller: 'landingController'
//       })
//       .when('/home', {
//           templateUrl: 'home.html'
//       })
//       .otherwise({
//           templateUrl: 'landing.html'
//       });
//
//});


$(function(){



    $('#brandCircle').on('webkitAnimationEnd', function(){
        console.log('end!');
        $('#bottomContainer > h2').addClass('introHeaderAnimate');
        $('#bottomContainer > p').addClass('introParagraphAnimate');
        $('#bottomContainer > a .btn').addClass('introButtonAnimate');
    });
    $('#brandCircle').on('webkitAnimationStart', function(){
       console.log('start');
    });

   $('#brandCircle').addClass('introAnimate');


});

