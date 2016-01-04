$(function(){
    var paragraphBool = true;
    introAnimation();
    //checkScrollTop();
    $('#workSpanUnderline').addClass('aboutHeaderUnderlineClass');


    $(window).scroll(function(){
        console.log('scrolled!');
        var experience = $('#experience').offset().top;

        var getInTouch = $('#getInTouch').offset().top;
            console.log(getInTouch);
        var aboutSpanTop = $('#aboutSpan').offset().top;
        var scrollTop = $(this).scrollTop();
        console.log(scrollTop);
        var differenceBetween = aboutSpanTop - scrollTop;
        var differenceBetweenGetInTouch = getInTouch - scrollTop;
        var differenceBetweenExperience = experience - scrollTop;


        if(differenceBetween < 600 && paragraphBool) { //about
            console.log('equal');
            $('#about h2').addClass('aboutHeaderAnimationClass');
            $('.paragraphContainer .col-md-6:first-child').animate({left: '5%'}, 850, function () {

                $('#line-break').addClass('paragraphBreakAnimationClass');
                $('.paragraphContainer .col-md-6:first-child').animate({left: '0%'}, 325);
                $('.paragraphContainer .col-md-6:nth-child(2)').animate({right: '0%', opacity: '1'}, 700, function(){
                    $('#aboutSpanUnderline').addClass('aboutHeaderUnderlineClass');
                });
            });
            paragraphBool = false;
        }
        if(differenceBetweenGetInTouch < 615){
            $('#getInTouch p').addClass('getInTouchParagraphAnimationClass');
            $('#getInTouchUnderline').addClass('getInTouchUnderlineAnimationClass');
            $('.glyphicon-arrow-right').addClass('arrowMoveClass');
        }

        if(differenceBetweenExperience < 500){
            experienceAnimate();
        }
    });


    $(window).resize(function(){
        var width = window.innerWidth;
        if(width>767){
            $('#navDropDown').removeClass('dropDownActive').addClass('dropDownUnactive');
        }
    });


    $('.navbar-toggle').click(function(){
        var elClass = $('#navDropDown').attr('class');
        if(elClass !== 'dropDownActive'){
            $('#navDropDown').removeClass('dropDownUnactive').addClass('dropDownActive');
        }else{
            $('#navDropDown').removeClass('dropDownActive').addClass('dropDownUnactive');
        }


    });
    function introAnimation(){
        $('#brandCircle').on('webkitAnimationEnd', function(){
            console.log('end!');
            $('#bottomContainer > h2').addClass('introHeaderAnimate');
            $('#bottomContainer > p').addClass('introParagraphAnimate');
            $('#bottomContainer > a .btn').addClass('introButtonAnimate');
        });

        $('#brandCircle').addClass('introAnimate');
    }



    function experienceAnimate(){
        $('#experienceSpan').animate({
            top: '0em',
            opacity: 1
        }, 2000,function(){
            $('#experienceUnderline').addClass('transformClass');
            $('#smallDiv').animate({width: '15em'}, 800, function(){
                $('#experience .col-md-4').addClass('bounce');
                setTimeout(function(){
                    $('#experience .col-md-4:first-child .container-fluid').addClass('addHeight');
                    $('#experience .col-md-4:nth-child(2) .container-fluid').addClass('addHeight2');
                    $('#experience .col-md-4:nth-child(3) .container-fluid').addClass('addHeight3');
                }, 770);
            });

        });
        //cards bounce up, and on bounce down, the other animation happens
    }
});

//docReady end
