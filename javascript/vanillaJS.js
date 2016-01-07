$(function(){

    $('#experience .col-md-4').click(function(){
        smallExperienceAnimate(this);
    });


    function smallExperienceAnimate(element){
        var width = window.outerWidth;
        $('#experience .col-md-4 .container-fluid .glyphicon.glyphicon-arrow-down').css('display', 'inline-block');

        if(width<=992){
            $('#experience .col-md-4:first-child .container-fluid').removeClass('addHeight');
            $('#experience .col-md-4:nth-child(2) .container-fluid').removeClass('addHeight2');
            $('#experience .col-md-4:nth-child(3) .container-fluid').removeClass('addHeight3');
            console.log('true');

            if(element===$('#experience .col-md-4:first-child')[0] ){

                    $('#experience .col-md-4:first-child .container-fluid').addClass('addHeight');
                $('#experience .col-md-4:first-child .container-fluid .glyphicon.glyphicon-arrow-down').css('display', 'none');
            }
            if(element===$('#experience .col-md-4:nth-child(2)')[0] ){

                    $('#experience .col-md-4:nth-child(2) .container-fluid').addClass('addHeight2');
                $('#experience .col-md-4:nth-child(2) .container-fluid .glyphicon.glyphicon-arrow-down').css('display', 'none');

            }
            if(element===$('#experience .col-md-4:nth-child(3)')[0] ){

                    $('#experience .col-md-4:nth-child(3) .container-fluid').addClass('addHeight3');
                $('#experience .col-md-4:nth-child(3)  .container-fluid .glyphicon.glyphicon-arrow-down').css('display', 'none');

            }
        }
    }





    $('form button').click(function(){
       var name = $('form .form-group:first-child input').val();
        var email = $('form .form-group:nth-child(2) input').val();
        var message = $('form .form-group:nth-child(3) textarea').val();
        console.log(name, email, message);
        $.ajax({
            method: 'POST',
            dataType: 'json',
            url: 'http://localhost:8888/lfz/Portfolio/php_mailer/mail_example/mail_withmailer.php',
            data: {name: name, email: email, message: message},
            success: function(response){
                if(response.success){
                    console.log(true);
                }else{
                    console.log(false);
                }
            },
            error: function(response){
                console.log(response);
            }
        });
        return;
    });

    $('#contactSpanUnderline').addClass('aboutHeaderUnderlineClass');

    //$('nav a').click(function(){
    //
    //});






    var paragraphBool = true;
    introAnimation();
    //checkScrollTop();
    $('#workSpanUnderline').addClass('aboutHeaderUnderlineClass');


    $(window).on('scroll touchmove', function(){

        var experience = $('#experience').offset().top;
        var getInTouch = $('#getInTouch').offset().top;
        var aboutSpanTop = $('#aboutSpan').offset().top;
        var scrollTop = $(this).scrollTop();
        console.log(scrollTop);
        var differenceBetween = aboutSpanTop - scrollTop;
        var differenceBetweenGetInTouch = getInTouch - scrollTop;
        var differenceBetweenExperience = experience - scrollTop;

        if(differenceBetween < 600 && paragraphBool) { //about
            $('#about h2').addClass('aboutHeaderAnimationClass');
            $('.paragraphContainer .col-md-6:first-child').animate({left: '5%', opacity: 1}, 850, function () {

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

        if(differenceBetweenExperience < 250){
            experienceAnimate();
        }

    });

    $(document).on("scrollstop",function(event){
        console.log('stopped!');
    });


    $(window).resize(function(){
        var width = window.innerWidth;
        if(width>767){
            $('#navDropDown').removeClass('dropDownActive').addClass('dropDownUnactive');
        }
    });


    $('.navbar-toggle').on('click tap', function(){
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
                var width = window.outerWidth;
                console.log('width', width);
                if(width>992){
                    $('#experience .col-md-4').addClass('bounce');
                    setTimeout(function(){
                        $('#experience .col-md-4:first-child .container-fluid').addClass('addHeight');
                        $('#experience .col-md-4:nth-child(2) .container-fluid').addClass('addHeight2');
                        $('#experience .col-md-4:nth-child(3) .container-fluid').addClass('addHeight3');
                    }, 770);
                }
            });
        });
        //cards bounce up, and on bounce down, the other animation happens
    }


});

//docReady end
