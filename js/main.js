$(window).on("load", function(){
    var greeting = [ "<h1>Hello! </h1>", "<h1>I'm DJ.</h1>", "<h1>Welcome to my portfolio!</h1>", "<h1>Click below to learn more about me. :)</h1>" ];
    $("#continue").hide();

    new Typed('#insertion', {
        strings: greeting,
        typeSpeed: 100,
        backSpeed: 50,
        onComplete: function(self){
            $("#continue").toggle("bounce", {times: 5}, "slow");
        }
    });

    $("#continue").one("click", function(){
        $(".container").removeClass("hidden");
    });
    
    function toMainTop(){
        $('html, body').animate({
            scrollTop: $('.container').offset().top
        }, 1000);
    }

    $("#continue").on("click", function(){
        toMainTop();
        // $('.container').animate({

        // }, 1000);
    });

    


});