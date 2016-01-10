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

        self.openModal = function(index){
            self.modalActive = true;
            console.log(index);
            self.modalText1 = self.imgArray[index].modalText1;
            self.modalText2 = self.imgArray[index].modalText2;
            self.modalText3 = self.imgArray[index].modalText3;
            console.log(self.modalText);

        };
        self.imgArray = [
            {src: 'mboutique.png', alt:'WEBSITE', title: 'MBoutique', message: 'small business website', href:'http://deg5112.github.io/mboutique/', features: '', git: 'https://github.com/Deg5112/Mboutique_Project.git', modalText1: "This was the first Project of LearningFuze bootcamp.", modalText2: "The idea was to code out and emulate a small business website, after being given the wireframe from a design team.", modalText3: "Initially this took quite a bit of time. After going back through this and iterating over it again in bootstrap later on in the course, it only took a couple of hours. Then, I went back and practiced angular routing on this as well, made it mobile responsive, and added a little bit of javascript to allow a language translation feature, with google\'s translate api."},
            {src: 'memorymatch.png', alt:'GAME', title: 'Memory Match', message: "concentration game themed after HBO's 'Silicon Valley'", href:'http://deg5112.github.io/memory_match/', features: '',  git: 'https://github.com/Deg5112/Memory_Match_Game_Project.git', modalText1: "Memory Match - Conentration game modelled after HBO\'s Silicon Valley. It has a pretty cool SIM city type of design.", modalText2: "This was the most fun project I got to work on in class. I believe that would be because it\'s as fun to play as it was to make.", modalText3: "This is where my Javascript skills absolutely exploded in comparison to where I was before I joined LearningFuze Bootcamp. Learning how to more effecitvely use the console to my advantage really helped out a lot. Getting the fundamentals on procedural programming, jquery, logic flow, etc. My biggest sense of accomplishment was being able to run synchronus functions which let 5-6 different css/jquery animations to run, which makes a really unique effect when a player matches a card. Being able to see my game on my phone and play it when I\'m standing on line in the grocery store has inspriing me to keep pushing forward in programming and see what else I can accomplish. When my friends tell me they play this game, it makes me want to keep developing."},
            {src: 'SGT.png', alt:'APP', title: 'Student Grade Table', message: 'Education Grade Table App for administrators', href:'http://deg5112.github.io/SGT/', features: '', git: 'https://github.com/Deg5112/Student_Grade_Table_Project.git', modalText1: "This project is an app that resembles the functionality of a grade table application that an administrator or teach would have access too.", modalText2: "The first part of this project was to build the layout in Bootstrap, and then make the AJAX calls the backend which our senior developers wrote the PHP scripts that fed us back responses.", modalText3: "After we learned PHP & mySQL, I wrote all of the CRUD (Create, Read, Update, Delete) scripts on the backend, that handled those queries. Then as I learned angularJS I went back and refactored that entire application into angular. First I wrote a function that enables the filter field to work, so you can filter by student, or course, then I learned how to do that in angular. Auto-complete was also a fun feature to build, that sends an AJAX request to the backend everytime the user lifts up his or her finger from the keyboard on the course input field."},
            {src:'calculator.png', alt:'APP', title: 'Calculator', message: 'project I worked on to better understand logic & object oriented programming', href:'http://deg5112.github.io/calculator/', features: '', git: 'https://github.com/Deg5112/calculator.git', modalText1: "What appears to be just a calculator,was actually the most difficult project, as well as one of my favorite projects I got to work.", modalText2: "That is because from beginning to end, I was immersed in logic, which is my more favorite part about javascript programming, is reading through logic and making a hypothesis about what should happen, testing it out, and potentially debugging what I need to do to fix the problem.", modalText3: "The first go around was an all procedural programatic approach. I then wripped the code base down, and redid it in all object oriented, which was really the only was to ramp up my understanding of OOP. The hardest part about this project was write a function that was able to handle order of operations and parentheses. Besides that, writing the logic that handles if a user presses any button, in any order, a million different ways and times, was quite tricky to write, but it worked out in the end."},
            {src:'tictactoe.png', alt:'GAME', title: 'TicTacToe', message: 'Hack-a-thon tictactoe group project', href:'http://deg5112.github.io/hacka-tictactoe-athon/', features: '', git: 'https://github.com/Deg5112/hacka-tictactoe-athon.git', modalText1: "This was our first hackathon, modeled after tic tac toe.", modalText2: "I was paired up with 3 other team members, and we were all delegated different parts of the app to create. My contribution was figuring out a way to have an image, follow the mouse for a first person shooter type of feel, I also made the X and O animations when a user clicks on a duck, along with the audio that follows it.", modalText3: "I also wrote the javascript function that handles the win condition. So every time a user clicks on a duck, the function runs to check if player X or player O won the game or not. This was another great experience where I got to work with a team, learn how to resolve merge conflicts. The most important lesson I learned was to get a working minimum viable product out the door as fast as possible, and worry about the design after the functionality works."},
            {src:'blog.png', alt:'WEBSITE', title: 'Blog', message: 'A blog with a log-in system tied to a backend database', href:'', features: '', git: 'https://github.com/Deg5112/Blog.git', modalText1:"What initially started out as a group project, the Blog was a a project where I participated not only participated in developing the front as well as the backend of the blog, but acted as scrum master.", modalText2: "As scrum master, I assisted with planning out the scope of the project, helped the team prioritize all features that we\'d be able to complete by the deadline, and worked with waffle.io web based task management system that integrates with github to assign out and track the teams progress during this project.", modalText3: "I helped code out the backend in PHP, built out the database in mySQL, and wrote the scripts that fetched data from SQL and passed it back to the front end. I also built out a log-in system, in which when a user is logged in, I wrote javascript code on stores an authentication token in that clients local storage, so anytime they refresh the page, they don\'t have to log back in. The cool part about the project was learning about how users would ideally navigate a blog, and developing a platform that would enable a user friendly, unique experience.This was another great learning opportunity to use AngularJS for routing, services, and controllers."},
            {src:'apartmentShark.png', alt:'APP', title: 'apartmentShark', message: 'web application to track and manage your apartment hunt', href:'', features: '', git: 'https://github.com/Deg5112/Final_Project.git', modalText1:"The final project of LearningFuze Bootcamp is supposed to a be a project that encompassess everything from front to backend skills, as well as an application that is ever-evolving and something that solved a problem. I call this app, apartmentShark", modalText2: "For me, I was going through an apartment hunt at the time, and found it quite painful that I had to go to 4-5 different websites to compare apartments, locations, statistics, and could never remember where I left off on my hunt. So I created an app that stores gives you a side by side by side by side comparison of an apartments features, pictures, location, and street view, and lets you save apartments you want to remember to check back up on, or show friends or perhaps a significant other.", modalText3: "A challenge I had was not being able to send zillow javascript ajax request, which I had to figure out how to do in PHP with cURL request. Another challenge is Zillow and other sites don\'t let you use their search feature for apartments, but let you pull data once you have already found the address. In the future, I\'ll be looking forward to adding a chrome extension, so you can add apartments to the app without even having the app open. Also, i\'ll be looking at a google calendar integration so you can submit calendar appointments from the app directly, to help remember which apartments you have showings for, and sync up your notes with what will be on your google calendar.This was done entirely in AngularJS, and I\'m excited to get deeper into angular as I move forward with this project"}
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

