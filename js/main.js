$(window).on("load", function(){
    var greeting = [ "<h1>Hello! </h1>", "<h1>I'm DJ.</h1>", "<h1>Welcome to my portfolio!</h1>", "<h1>Click below to learn more about me. :)</h1>" ];
    $(".expanded").hide();
    $("#close").hide();

    $("#contact").tooltip({
        content: "Contact Info"
    });
    $("#about").tooltip({
        content: "About Me"
    });
    $("#tech").tooltip({
        content: "Tech"
    });
    $("#works").tooltip({
        content: "Works"
    });
    $("#resume").tooltip({
        content: "Resume"
    });
    new Typed('#insertion', {
        strings: greeting,
        typeSpeed: 10,
        backSpeed: 5,
        // zoom-zoom for testing and modifying
        // typeSpeed: 1,
        // backSpeed: 1,
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
        $("#"+this.id).tooltip("close");
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