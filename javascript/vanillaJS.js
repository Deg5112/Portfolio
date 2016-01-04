$(function(){
    var paragraphBool = true;
    experienceAnimate();

    function experienceAnimate(){
        $('#experienceSpan').animate({
            top: '0em',
            opacity: 1
        }, 2000,function(){
            $('#experienceUnderline').addClass('transformClass');
            $('#smallDiv').animate({width: '15em'}, 2000);
        });


    }


    introAnimation();
    checkScrollTop();
    $('#workSpanUnderline').addClass('aboutHeaderUnderlineClass');


    $(window).scroll(function(){
        var getInTouch = $('#getInTouch').offset().top;
            console.log(getInTouch);
        var aboutSpanTop = $('#aboutSpan').offset().top;
        var scrollTop = $(this).scrollTop();
        console.log(scrollTop);
        var differenceBetween = aboutSpanTop - scrollTop;
        var differenceBetweenGetInTouch = getInTouch - scrollTop;
        if(differenceBetween < 644 && paragraphBool) {
            console.log('equal');
            $('#about h2').addClass('aboutHeaderAnimationClass');
            $('.paragraphContainer .col-md-6:first-child').animate({left: '5%'}, 850, function () {

                $('#line-break').addClass('paragraphBreakAnimationClass');
                $('.paragraphContainer .col-md-6:first-child').animate({left: '0%'}, 325);
                $('.paragraphContainer .col-md-6:nth-child(2)').animate({right: '0%'}, 700, function(){
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

    function checkScrollTop(){
        console.log(paragraphBool);

        var getInTouch = $('#getInTouch').offset().top;
        console.log(getInTouch);
        var aboutSpanTop = $('#aboutSpan').offset().top;
        var scrollTop = $(this).scrollTop();
        console.log(scrollTop);
        var differenceBetween = aboutSpanTop - scrollTop;
        var differenceBetweenGetInTouch = getInTouch - scrollTop;
        if(differenceBetween < 644 && paragraphBool) {
            $('#about h2').addClass('aboutHeaderAnimationClass');
            $('.paragraphContainer .col-md-6:first-child').animate({left: '5%'}, 850, function () {
                $('#line-break').addClass('paragraphBreakAnimationClass');
                $('.paragraphContainer .col-md-6:first-child').animate({left: '0%'}, 325);
                $('.paragraphContainer .col-md-6:nth-child(2)').animate({right: '0%'}, 700, function(){
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
    }
});

//docReady end
