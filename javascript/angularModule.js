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
            {src: 'mboutique.png', alt:'WEBSITE', title: 'MBoutique', message: 'small business website', href:'http://deg5112.github.io/mboutique/' },
            {src: 'memorymatch.png', alt:'GAME', title: 'Memory Match', message: "concentration game themed after HBO's 'Silicon Valley'", href:'http://deg5112.github.io/memory_match/'  },
            {src: 'SGT.png', alt:'APP', title: 'Student Grade Table', message: 'Education Grade Table App for administrators', href:'http://deg5112.github.io/SGT/' },
            {src:'calculator.png', alt:'APP', title: 'Calculator', message: 'project I worked on to better understand logic & object oriented programming', href:'http://deg5112.github.io/calculator/' },
            {src:'tictactoe.png', alt:'GAME', title: 'TicTacToe', message: 'Hack-a-thon tictactoe group project', href:'http://deg5112.github.io/hacka-tictactoe-athon/' },
            {src:'blog.png', alt:'WEBSITE', title: 'Blog', message: 'A blog with a log-in system tied to a backend database', href:'' },
            {src:'apartmentShark.png', alt:'APP', title: 'apartmentShark', message: 'web application to track and manage your apartment hunt', href:'' }
        ];

        self.clearArray = function(){

            self.imgArray = [];
            self.imgArray = [
                {src: 'mboutique.png', alt:'WEBSITE', title: 'MBoutique', message: 'small business website' },
                {src: 'memorymatch.png', alt:'GAME', title: 'Memory Match', message: "concentration game themed after HBO's 'Silicon Valley'" },
                {src: 'SGT.png', alt:'APP', title: 'Student Grade Table', message: 'Education Grade Table App for administrators'},
                {src:'calculator.png', alt:'APP', title: 'Calculator', message: 'built to better understand logic & object oriented programming'},
                {src:'tictactoe.png', alt:'GAME', title: 'TicTacToe', message: 'Hack-a-thon tictactoe group project'},
                {src:'blog.png', alt:'WEBSITE', title: 'Blog', message: 'A blog with a log-in system tied to a backend database'},
                {src:'apartmentShark.png', alt:'APP', title: 'apartmentShark', message: 'Final Project from LearningFuze Bootcamp'}
            ];
        };

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


//$(function(){
//
//
//
//    $('#brandCircle').on('webkitAnimationEnd', function(){
//        console.log('end!');
//        $('#bottomContainer > h2').addClass('introHeaderAnimate');
//        $('#bottomContainer > p').addClass('introParagraphAnimate');
//        $('#bottomContainer > a .btn').addClass('introButtonAnimate');
//    });
//
//
//   $('#brandCircle').addClass('introAnimate');
//
//
//});

