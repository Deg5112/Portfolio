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
        self.modalActive = false;
        self.modalText1 = null;
        self.modalText2 = null;
        self.modalText3 = null;
        self.modalImg = null;
        self.modalTitle = null;
        self.modalSrc = null;
        self.dynamicClass = null;
        self.currentModal = null;

        self.addPicClass = function(event){
            $('project').removeClass('projectAnimate');
            $(event.target).addClass('projectAnimate');

        };

        self.removePicClass = function(){
            $(event.target).removeClass('projectAnimate');
        };


        self.changePicBool = function(){
            if(self.picAnimateBool){
                self.picAnimateBool = false;
            }else{
                self.picAnimateBool = true;
            }
        };

        self.modalRemove = function(){
            console.log('span clicked!!');
            self.modalActive = false;
            //$('.imgCol').removeClass('col-xs-12').addClass('col-xs-12 col-sm-6 col-md-4');
            self.modalSrc = null;
            $(".helloModal").hide();
            $(".aboutActive").removeClass('aboutActive');

        };

        self.openModal = function(index){

            var $colClicked = $($('.imgCol')[index]);  //self current modal is an index


            var offset = $colClicked.find('#modal').position().top;
            offset = offset + 'px';
            self.modalActive = true;//THIS CHANGES THE MODALS TO SHOW

            //THEN WE NEED TO HIDE ALL OF THE MODALS
            $('.helloModal').hide();
            var distanceFromLeft = $($('.imgCol')[index]).position().left;

            console.log(distanceFromLeft, 'DISTANCEFROMLEFT');
            //THEN WE NEED TO SHOW THE ONE FOR WHICH FIGURE WAS CLICKED ON..
            //is an array of column objects find the one.. and then jquery method it to show
            var modalEl = $($('.imgCol')[index]).find('#modal');
            var pixels = '-' + distanceFromLeft + 'px';
            console.log(pixels, 'PIXELS');

            modalEl.show();
            $('html, body').animate({scrollTop: offset}, 10);
            //
                var $curCol = $($('.imgCol')[index]);
            $curCol.find('#modal').animate({left: pixels},1000);
            //
            //modalEl.animate({right: distanceFromLeft}, 2000);
            //
            //you're going to have to get the distance of the left side of the modal from the left side of the sreen, and then push that to the left by the difference.

            //TODO you need to write the logic that pushes the other two columsn if it's the first or second in the row

            self.modalText1 = self.imgArray[index].modalText1;
            self.modalText2 = self.imgArray[index].modalText2;
            self.modalText3 = self.imgArray[index].modalText3;
            self.modalTitle = self.imgArray[index].title;
            self.modalSrc = 'images/'+ self.imgArray[index].src;

        };
        self.imgArray = [
            {src: 'mboutique.png', alt:'WEBSITE', title: 'MBoutique', message: 'small business website', href:'http://deg5112.github.io/Mboutique_Project/', features: '', git: 'https://github.com/Deg5112/Mboutique_Project.git', modalText1: "This was the first Project of LearningFuze bootcamp.", modalText2: "The idea was to code out and emulate a small business website, after being given the wireframe from a design team."},
            {src: 'memorymatch.png', alt:'GAME', title: 'Memory Match', message: "concentration game themed after HBO's 'Silicon Valley'", href:'http://deg5112.github.io/Memory_Match_Game_Project/', features: '',  git: 'https://github.com/Deg5112/Memory_Match_Game_Project.git', modalText1: "Memory Match - Conentration game modelled after HBO\'s Silicon Valley. It has a pretty cool SIM city type of design.", modalText2: "This was the most fun project I got to work on in class. I believe that would be because it\'s as fun to play as it was to make."},
            {src: 'SGT.png', alt:'APP', title: 'Student Grade Table', message: 'Education Grade Table App for administrators', href:'http://davidgoodman.club/Student_Grade_Table_Project/', features: '', git: 'https://github.com/Deg5112/Student_Grade_Table_Project.git', modalText1: "This project is an app that resembles the functionality of a grade table application that an administrator or teach would have access too.", modalText2: "The first part of this project was to build the layout in Bootstrap, and then make the AJAX calls the backend which our senior developers wrote the PHP scripts that fed us back responses."},
            {src:'calculator.png', alt:'APP', title: 'Calculator', message: 'project I worked on to better understand logic & object oriented programming', href:'http://deg5112.github.io/Calculator_Project/', features: '', git: 'https://github.com/Deg5112/calculator.git', modalText1: "What appears to be just a calculator,was actually the most difficult project, as well as one of my favorite projects I got to work.", modalText2: "That is because from beginning to end, I was immersed in logic, which is my more favorite part about javascript programming, is reading through logic and making a hypothesis about what should happen, testing it out, and potentially debugging what I need to do to fix the problem."},
            {src:'tictactoe.png', alt:'GAME', title: 'TicTacToe', message: 'Hack-a-thon tictactoe group project', href:'http://deg5112.github.io/hacka-tictactoe-athon/', features: '', git: 'https://github.com/Deg5112/hacka-tictactoe-athon.git', modalText1: "This was our first hackathon, modeled after tic tac toe.", modalText2: "I was paired up with 3 other team members, and we were all delegated different parts of the app to create. My contribution was figuring out a way to have an image, follow the mouse for a first person shooter type of feel, I also made the X and O animations when a user clicks on a duck, along with the audio that follows it."},
            {src:'blog.png', alt:'WEBSITE', title: 'Blog', message: 'A blog with a log-in system tied to a backend database', href:'http://davidgoodman.club/Blog', features: '', git: 'https://github.com/Deg5112/Blog.git', modalText1:"A project where we would build out the functionality needed for a blog. What initially started out as a group project, the Blog was a a project where I participated not only participated in developing the front as well as the backend of the blog, but acted as scrum master.", modalText2: "As scrum master, I assisted with planning out the scope of the project, helped the team prioritize all features that we\'d be able to complete by the deadline, and worked with waffle.io web based task management system that integrates with github to assign out and track the teams progress during this project."},
            {src:'apartmentShark.png', alt:'APP', title: 'apartmentShark', message: 'web application to track and manage your apartment hunt', href:'http://davidgoodman.club/apartmentShark', features: '', git: 'https://github.com/Deg5112/Final_Project.git', modalText1:"The final project of LearningFuze Web Development Bootcamp is supposed to a be a project that encompasses everything from front to backend skills, as well as an application that is ever-evolving and something that solved a problem. I call this app, apartmentShark", modalText2: "For me, I was going through an apartment hunt at the time, and found it quite painful that I had to go to 4-5 different websites to compare apartments, locations, statistics, and could never remember where I left off on my hunt. So I created an app that gives you a side by side by side by side comparison of an apartments features, pictures, location, and street view, and lets you save apartments you want to remember to check back up on, or show friends or perhaps a significant other."}
        ];

        self.clearArray = function(){

            self.imgArray = [];
            self.imgArray = [
                {src: 'mboutique.png', alt:'WEBSITE', title: 'MBoutique', message: 'small business website', href:'http://deg5112.github.io/Mboutique_Project/', features: '', git: 'https://github.com/Deg5112/Mboutique_Project.git', modalText1: "This was the first Project of LearningFuze bootcamp.", modalText2: "The idea was to code out and emulate a small business website, after being given the wireframe from a design team."},
                {src: 'memorymatch.png', alt:'GAME', title: 'Memory Match', message: "concentration game themed after HBO's 'Silicon Valley'", href:'http://deg5112.github.io/Memory_Match_Game_Project/', features: '',  git: 'https://github.com/Deg5112/Memory_Match_Game_Project.git', modalText1: "Memory Match - Conentration game modelled after HBO\'s Silicon Valley. It has a pretty cool SIM city type of design.", modalText2: "This was the most fun project I got to work on in class. I believe that would be because it\'s as fun to play as it was to make."},
                {src: 'SGT.png', alt:'APP', title: 'Student Grade Table', message: 'Education Grade Table App for administrators', href:'http://davidgoodman.club/Student_Grade_Table_Project/', features: '', git: 'https://github.com/Deg5112/Student_Grade_Table_Project.git', modalText1: "This project is an app that resembles the functionality of a grade table application that an administrator or teach would have access too.", modalText2: "The first part of this project was to build the layout in Bootstrap, and then make the AJAX calls the backend which our senior developers wrote the PHP scripts that fed us back responses."},
                {src:'calculator.png', alt:'APP', title: 'Calculator', message: 'project I worked on to better understand logic & object oriented programming', href:'http://deg5112.github.io/Calculator_Project/', features: '', git: 'https://github.com/Deg5112/calculator.git', modalText1: "What appears to be just a calculator,was actually the most difficult project, as well as one of my favorite projects I got to work.", modalText2: "That is because from beginning to end, I was immersed in logic, which is my more favorite part about javascript programming, is reading through logic and making a hypothesis about what should happen, testing it out, and potentially debugging what I need to do to fix the problem."},
                {src:'tictactoe.png', alt:'GAME', title: 'TicTacToe', message: 'Hack-a-thon tictactoe group project', href:'http://deg5112.github.io/hacka-tictactoe-athon/', features: '', git: 'https://github.com/Deg5112/hacka-tictactoe-athon.git', modalText1: "This was our first hackathon, modeled after tic tac toe.", modalText2: "I was paired up with 3 other team members, and we were all delegated different parts of the app to create. My contribution was figuring out a way to have an image, follow the mouse for a first person shooter type of feel, I also made the X and O animations when a user clicks on a duck, along with the audio that follows it."},
                {src:'blog.png', alt:'WEBSITE', title: 'Blog', message: 'A blog with a log-in system tied to a backend database', href:'http://davidgoodman.club/Blog', features: '', git: 'https://github.com/Deg5112/Blog.git', modalText1:"A project where we would build out the functionality needed for a blog. What initially started out as a group project, the Blog was a a project where I participated not only participated in developing the front as well as the backend of the blog, but acted as scrum master.", modalText2: "As scrum master, I assisted with planning out the scope of the project, helped the team prioritize all features that we\'d be able to complete by the deadline, and worked with waffle.io web based task management system that integrates with github to assign out and track the teams progress during this project."},
                {src:'apartmentShark.png', alt:'APP', title: 'apartmentShark', message: 'web application to track and manage your apartment hunt', href:'http://davidgoodman.club/apartmentShark', features: '', git: 'https://github.com/Deg5112/Final_Project.git', modalText1:"The final project of LearningFuze Web Development Bootcamp is supposed to a be a project that encompasses everything from front to backend skills, as well as an application that is ever-evolving and something that solved a problem. I call this app, apartmentShark", modalText2: "For me, I was going through an apartment hunt at the time, and found it quite painful that I had to go to 4-5 different websites to compare apartments, locations, statistics, and could never remember where I left off on my hunt. So I created an app that gives you a side by side by side by side comparison of an apartments features, pictures, location, and street view, and lets you save apartments you want to remember to check back up on, or show friends or perhaps a significant other."}
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

