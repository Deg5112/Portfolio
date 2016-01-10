var paragraphBool = null;
$(function(){
    checkDistance();

    $('.navbar-nav a, #navDropDown a').click(function(){
       var text = $(this).text().toLowerCase();
        smoothScroll(text);
    });



    $('a[rel="external"]').click(function() {
        window.open($(this).attr('href'));
        return false;
    });



    $('form input').on('focus', function(){
       $('#mobileSpan').hide();
        $('#formMessage').text('');
    });

    var width = window.outerWidth;
    $('#contactSpanUnderline').addClass('aboutHeaderUnderlineClass'); //TODO still need to make the scroll function for this

    if(width>992){
        $('.glyphicon.glyphicon-arrow-down').hide();
    }
    $(window).resize(function(){
        var width = window.outerWidth;
        if(width>992){
            $('.glyphicon.glyphicon-arrow-down').hide();
        }
    });
    $(window).load(function(){
        $('#loading').fadeOut();
    });

    $('#experience .col-md-4').on('click tap', function(){
        smallExperienceAnimate(this);
    });


    $('form button').on('click tap', function(){
       var name = $('form .form-group:first-child input').val();
        var email = $('form .form-group:nth-child(2) input').val();
        var phone1 = $('#phone1').val();
        var phone2 = $('#phone2').val();
        var phone3 = $('#phone3').val();
        var message = $('#textArea').val();

        $.ajax({
            method: 'POST',
            dataType: 'json',
            url: 'http://localhost:8888/lfz/Portfolio/php_mailer/mail_example/mail_withmailer.php',
            data: {name: name, email: email, message: message, phone1: phone1, phone2: phone2, phone3: phone3},
            success: function(response){

            },
            error: function(response){
                console.log(response);
            }
        });
        name = $('form .form-group:first-child input').val('');
        email = $('form .form-group:nth-child(2) input').val('');
        phone1 = $('#phone1').val('');
        phone2 = $('#phone2').val('');
        phone3 = $('#phone3').val('');
        message = $('#textArea').val('');
        $('#mobileSpan').toggle();


        $('#formMessage').text('Thank you, your message has been sent');
    });


    paragraphBool = true;
    introAnimation();
    $('#workSpanUnderline').addClass('aboutHeaderUnderlineClass');


    $(window).on('scroll touchmove', function(){

      checkDistance();

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

    $('#getInTouch button').on('click tap', function(){
        getInTouchButtonScroll();
    });

});

//Docready end
function getInTouchButtonScroll(){
    var offset = $('#contact').offset().top;
    $('html, body').animate({scrollTop: offset-100}, 2000);
}


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

function smoothScroll(text){
    var id = '#' + text;
    var offset = $(id).offset().top -100;
    $('html, body').animate({scrollTop: offset}, 2000);
    $('#navDropDown').removeClass('dropDownActive').addClass('dropDownUnactive');
}



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

function checkDistance(){

    var experience = $('#experience').offset().top;
    var getInTouch = $('#getInTouch').offset().top;
    var aboutSpanTop = $('#aboutSpan').offset().top;
    var contact = $('#contact').offset().top;
    var scrollTop = $(this).scrollTop();
    var differenceBetween = aboutSpanTop - scrollTop;
    var differenceBetweenGetInTouch = getInTouch - scrollTop;
    var differenceBetweenExperience = experience - scrollTop;
    var differenceBetweenContact = contact - scrollTop;


    if(differenceBetween < 400 && paragraphBool) { //about
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

    if(differenceBetweenExperience < 400){
        experienceAnimate();
    }

    if(differenceBetweenContact < 400){
        contactAnimate();
    }
}

function contactAnimate(){
    $('#contact h2').addClass('contactHeaderAnimationClass').css('opacity', 1);
    $('.transition').addClass('formTransition');
}


