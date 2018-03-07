$(window).on("load", function(){
    var greeting = [ "<h1>Hello! </h1>", "<h1>I'm DJ.</h1>", "<h1>Welcome to my portfolio!</h1>", "<h1>Click below to learn more about me. :)</h1>" ];
    $("#continue").hide();
    $(".expanded").hide();
    $("#close").hide();

    new Typed('#insertion', {
        strings: greeting,
        // typeSpeed: 100,
        // backSpeed: 50,
        typeSpeed: 1,
        backSpeed: 1,
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

    let icons = ["#contact", "#about", "#tech", "#works", "#resume"];

    function hideIcons(){
        for (let i=0; i<icons.length; i++){
            $(icons[i]).hide();
        }
    }
    function showIcons(){
        for (let i=0; i<icons.length; i++){
            $(icons[i]).show();
        }
    }

    // Determine which icon was clicked on
    
    $(".icon").on("click", function(){
        let toShow = "#" + "full" + this.id;
        hideIcons();
        $(toShow).toggle("puff");
        $("#close").show();
    });

    $(".expanded").on("click", function(){
        showIcons();
        $(".expanded").hide();
        $("#close").hide();
    });

    $("#close").on("click", function(){
        showIcons();
        $(".expanded").hide();
        $("#close").hide();
    });

    $(document).keyup(function(e) {
        if (e.keyCode == 27) { 
            showIcons();
            $(".expanded").hide();
            $("#close").hide();
       }
   });


    // Testing animation for icons
    // $("#contact").on("click", function(){
    //     clickedId = this.id
    //     console.log(clickedId);
    //     hideThings("#" +this.id);
    //     $("#contact").animate({
    //         height: "100%",
    //         width: "100%",
    //         position: "absolute",
    //         top: "0",
    //         left: "0"
    //     }, 1500, function(){
    //         console.log("Boom!");
    //     })
    // });


});