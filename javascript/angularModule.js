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
            console.log(event);
            var width = window.innerWidth;
            if(width>992){
                $('project').removeClass('projectAnimate');
                $(event.target).addClass('projectAnimate');
            }

        };

        self.removePicClass = function(event){
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
            self.modalActive = false;
            //$('.imgCol').removeClass('col-xs-12').addClass('col-xs-12 col-sm-6 col-md-4');
            self.modalSrc = null;
            var width = $(window).width();

            $(".helloModal").hide();
            $(".aboutActive").removeClass('aboutActive');

        };

        self.openModal = function(index){
            $('#myModal').modal('show');
            self.modalText1 = self.imgArray[index].modalText1;
            self.modalText2 = self.imgArray[index].modalText2;
            self.modalText3 = self.imgArray[index].modalText3;
            self.modalTitle = self.imgArray[index].title;
            self.modalSrc = 'images/'+ self.imgArray[index].src;
        };


        self.imgArray = [
            {src: 'tarantool.png', alt:'WEBSITE', title: 'Tarantool.io Site', message: 'Marketing website for one of the top NoSQL In-memory Database Software Company', href:'https://www.tarantool.io', features: '', git: 'https://github.com/Deg5112/tarantool-site', modalText1: "Tarantool was first released in 2008 in Mail.ru Group. It is publicly listed on the London Stock Exchange (MAIL:LSE) and is the 5th largest internet company in the world with over 150 million active users a month. Services span email, cloud, social networks, instant messengers, and games developed by a team of over 2,000 engineers spanning more than 10 global locations.", modalText2: "The Moscow team informed me this project should be done all vanilla so it would be easy for future devs to make content changes, hence, no frameworks. Don't be fooled, this site is Hyper Text Transfer Protocol Secure (HTTPS), Ranked higher in speed then other image heavy sites like Amazon, MemSQl, and more, and optimized for SEO. This site is a highly modularized PHP driven site and has a strategic caching strategy utilizing Gulp for asset revisioning, minification, and concatenation. This project involved coordination with the sales director in Silicon Valley, a designer in Pakistan, and a team of Software Engineers working on the core database product in Moscow."},
            {src: 'todo.png', alt:'APP', title: 'Todo', message: 'Node/Express Todo App', href:'http://www.todo.davidgoodman.club/', features: '', git: 'https://github.com/Deg5112/nodeTodo.git', modalText1: "MEAN Stack Todo application, meaning this app is built entirely on a NoSQL database called MongoDB, with Nodejs + Express as the backend stack, along with AngularJS on the front end, Web Sockets for real time data updates, and a newer CSS framework called materialize by Google. You can even share a list with a friend, and chat with them in the app.", modalText2: "Other features: Authentication & Social Sign-On strategies utilizing Passport.js, Mongoose ORM for interfacing with MongoDB, handlebars templating engine, express validator for backend form validation, connect-mongo for persistent sessions, Materialize Toasts/dialogs for flash messages, Email Verification & Password Resets, optimized for mobile. The goal for this project is to provide a boiler plate app that has all of the tools you need to build other MEAN stack applications"},
            {src:'apartmentShark.png', alt:'APP', title: 'apartmentShark', message: 'web application to track and manage your apartment hunt', href:'http://www.apartment-shark.davidgoodman.club', features: '', git: 'https://github.com/Deg5112/Final_Project.git', modalText1:"The final project of LearningFuze Web Development Bootcamp is supposed to a be a project that encompasses everything from front to backend skills, as well as an application that is ever-evolving and something that solved a problem. I call this app, apartmentShark", modalText2: "For me, I was going through an apartment hunt at the time, and found it quite painful that I had to go to 4-5 different websites to compare apartments, locations, statistics, and could never remember where I left off on my hunt. So I created an app that gives you a side by side by side by side comparison of an apartments features, pictures, location, and street view, and lets you save apartments you want to remember to check back up on, or show friends or perhaps a significant other."},
            {src: 'mboutique.png', alt:'WEBSITE', title: 'MBoutique', message: 'small business website', href:'http://www.mboutique.davidgoodman.club', features: '', git: 'https://github.com/Deg5112/Mboutique_Project.git', modalText1: "This was the first Project of LearningFuze bootcamp.", modalText2: "The idea was to code out and emulate a small business website, after being given the wireframe from a design team."},
            {src: 'memorymatch.png', alt:'GAME', title: 'Memory Match', message: "concentration game themed after HBO's 'Silicon Valley'", href:'http://www.memory-match.davidgoodman.club', features: '',  git: 'https://github.com/Deg5112/Memory_Match_Game_Project.git', modalText1: "Memory Match - Conentration game modelled after HBO\'s Silicon Valley. It has a pretty cool SIM city type of design.", modalText2: "This was the most fun project I got to work on in class. I believe that would be because it\'s as fun to play as it was to make."},
            {src: 'SGT.png', alt:'APP', title: 'Student Grade Table', message: 'Education Grade Table App for administrators', href:'http://www.sgt.davidgoodman.club', features: '', git: 'https://github.com/Deg5112/Student_Grade_Table_Project.git', modalText1: "This project is an app that resembles the functionality of a grade table application that an administrator or teach would have access too.", modalText2: "The first part of this project was to build the layout in Bootstrap, and then make the AJAX calls the backend which our senior developers wrote the PHP scripts that fed us back responses. I then re-wrote the scripts and replaced them with my own"},
            {src:'calculator.png', alt:'APP', title: 'Calculator', message: 'project I worked on to better understand logic & object oriented programming', href:'http://www.calculator.davidgoodman.club', features: '', git: 'https://github.com/Deg5112/Calculator_Project.git', modalText1: "What appears to be just a calculator, was actually the most difficult project, as well as one of my favorite projects I got to work.", modalText2: "That is because from beginning to end, I was immersed in logic, which is my more favorite part about javascript programming, is reading through logic and making a hypothesis about what should happen, testing it out, and potentially debugging what I need to do to fix the problem."},
            // {src:'blog.png', alt:'WEBSITE', title: 'Blog', message: 'A blog with a log-in system tied to a backend database', href:'http://davidgoodman.club/Blog', features: '', git: 'https://github.com/Deg5112/Blog.git', modalText1:"A project where we would build out the functionality needed for a blog. What initially started out as a group project, the Blog was a a project where I participated not only participated in developing the front as well as the backend of the blog, but acted as scrum master.", modalText2: "As scrum master, I assisted with planning out the scope of the project, helped the team prioritize all features that we\'d be able to complete by the deadline, and worked with waffle.io web based task management system that integrates with github to assign out and track the teams progress during this project."}
        ];

        self.clearArray = function(){
            $('a[rel="external"]').click(function() {
                window.open($(this).attr('href'));
                return false;
            });

            var tempArray = self.imgArray;
            self.imgArray = [];
            self.imgArray = tempArray;
        };

        self.updateActiveButton = function(num){
            self.activeButton = num;
            $log.info(self.activeButton);
        };
});
