$(function(){
    var paragraphBool = true;

    checkScrollTop();

    function checkScrollTop(){
        var aboutSpanTop = $('#aboutSpan').offset().top;
        console.log(aboutSpanTop);
        var scrollTop = $(this).scrollTop();
        console.log(scrollTop);
        var differenceBetween = aboutSpanTop - scrollTop;

        if(differenceBetween < 644 && paragraphBool) {

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

        var aboutSpanTop = $('#aboutSpan').offset().top;
        console.log(aboutSpanTop);
        var scrollTop = $(this).scrollTop();
        console.log(scrollTop);
        var differenceBetween = aboutSpanTop - scrollTop;


        if(differenceBetween < 644 && paragraphBool) {

            console.log('equal');
            $('.paragraphContainer .col-md-6:first-child').animate({left: '5%'}, 850, function () {

                $('#line-break').addClass('paragraphBreakAnimationClass');
                $('.paragraphContainer .col-md-6:first-child').animate({left: '0%'}, 325);
                $('.paragraphContainer .col-md-6:nth-child(2)').animate({right: '0%'}, 700, function(){
                    $('#aboutSpanUnderline').addClass('aboutHeaderUnderlineClass');
                });
            });
            paragraphBool = false;
        }

        if(scrollTop > 760){
            console.log('true');
            $('#workSpanUnderline').addClass('aboutHeaderUnderlineClass');
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