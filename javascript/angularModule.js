var app = angular.module('portfolio', ['ngAnimate']);

app.controller('workController', function($scope, $log){
        var self = this;
        self.activeButton = null;
        self.filter = null;
        self.imgArray = [
            {src: 'mboutique.png', alt:'WEBSITE'},
            {src: 'memorymatch.png', alt:'GAME'},
            {src: 'SGT.png', alt:'APP'},
            {src:'calculator.png', alt:'APP'},
            {src:'tictactoe.png', alt:'GAME'},
            {src:'blog.png', alt:'WEBSITE'},
            {src:'apartmentShark.png', alt:'APP'}
        ];

        self.updateActiveButton = function(num){
            self.activeButton = num;
            $log.info(self.activeButton);
        };

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

