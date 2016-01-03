var app = angular.module('portfolio', ['ngAnimate']);

app.service('getScrollTopService', function(){
    var self = this;
    self.imagesBool = null;
    self.returnScrollTop = function(scrollTop){
        //console.log(scrollTop);

        if(scrollTop>500){
            self.imagesBool = true;
            //console.log(self.imagesBool);

        }
        else{
            self.imagesBool = false;
            //console.log(self.imagesBool);

        }
    };
});


app.controller('workController', function($scope, $log, getScrollTopService){
        var self = this;
        self.activeButton = null;
        self.filter = null;
        //self.imageBool=true;
        self.imgArray = [
            {src: 'mboutique.png', alt:'WEBSITE'},
            {src: 'memorymatch.png', alt:'GAME'},
            {src: 'SGT.png', alt:'APP'},
            {src:'calculator.png', alt:'APP'},
            {src:'tictactoe.png', alt:'GAME'},
            {src:'blog.png', alt:'WEBSITE'},
            {src:'apartmentShark.png', alt:'APP'}
        ];

        self.clearArray = function(){
            self.imgArray = [];
            self.imgArray = [
                {src: 'mboutique.png', alt:'WEBSITE'},
                {src: 'memorymatch.png', alt:'GAME'},
                {src: 'SGT.png', alt:'APP'},
                {src:'calculator.png', alt:'APP'},
                {src:'tictactoe.png', alt:'GAME'},
                {src:'blog.png', alt:'WEBSITE'},
                {src:'apartmentShark.png', alt:'APP'}
            ];
        };

        self.updateActiveButton = function(num){
            self.activeButton = num;
            $log.info(self.activeButton);
            $scope.digest();
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

