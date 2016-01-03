$(function(){
    var paragraphBool = true;

    checkScrollTop();

    function checkScrollTop(){
        var scrollTop = $(this).scrollTop();
        if(scrollTop>20 && paragraphBool) {

            console.log('end!');
            $('.paragraphContainer .col-md-6:first-child').animate({left: '5%'}, 850, function () {

                $('#line-break').addClass('paragraphBreakAnimationClass');

                $('.paragraphContainer .col-md-6:first-child').animate({left: '0%'}, 325);

                $('.paragraphContainer .col-md-6:nth-child(2)').animate({right: '0%'}, 700, function(){

                    $('#aboutSpanUnderline').addClass('aboutHeaderUnderlineClass');
                });
            });
            paragraphBool = false;
        }
    }

    $(window).scroll(function(){
        var scrollTop = $(this).scrollTop();
        if(scrollTop>20 && paragraphBool) {

            console.log('end!');
            $('.paragraphContainer .col-md-6:first-child').animate({left: '5%'}, 850, function () {

                $('#line-break').addClass('paragraphBreakAnimationClass');
                $('.paragraphContainer .col-md-6:first-child').animate({left: '0%'}, 325);
                $('.paragraphContainer .col-md-6:nth-child(2)').animate({right: '0%'}, 700, function(){
                    $('#aboutSpanUnderline').addClass('aboutHeaderUnderlineClass');
                });
            });
            paragraphBool = false;
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
});