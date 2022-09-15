$('#menu-icon').click(function(){
    $('.menu-popup').animate({"margin-left": "-=2000"});
    setTimeout(function(){
        $('.menu-popup').show(function(){
            $('.menu-popup').animate({"margin-left": "+=2000"}, 1000);
            $('#menu-icon').hide();
        });
    }, 0250);
});

$('#menu-popup-icon').click(function(){
    $('.menu-popup').hide();
    $('#menu-icon').show();
});