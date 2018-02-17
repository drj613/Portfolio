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

    function hideThings(exceptThis){
        let icons = ["#contact", "#about", "#tech", "#works", "#resume"];

        for (let i=0; i < icons.length; i++){
            if(icons[i]!= exceptThis){
                $(icons[i]).hide();
            }
        }
    }

    function Icon(id, closeHTML, openHTML){
        this.id = id;
        this.closeHTML = closeHTML,
        this.openHTML = openHTML,
        this.state = "closed"

        function toggleOpenClose(){
            if (this.state === "closed"){
                this.state = "opened";
                $(id).removeClass("icon");
                $(id).addClass("expanded");
            } else {
                $(id).removeClass("expanded");
                $(id).addClass("icon");
            }
        }
    }

    // Constants for innards or expanded icons
    const aboutMe = '<p>Hi!</p>';
    const techUsed = '<p>Hi!</p>';
    const worksDone = '<p>Hi!</p>';
    const resume = '<p>Hi!</p>';

    // Objects for tracking state of icons and their content
    var aboutIcon = new Icon(
        '#about',
        '<i class="fa fa-user"></i>',
        aboutMe);
    var techIcon = new Icon(
        '#tech',
        '<i class="fa fa-wrench"></i>',
        techUsed);
    var worksIcon = new Icon(
        '#works',
        '<i class="fa fa-briefcase">',
        worksDone);
    var resumeIcon = new Icon(
        '#resume',
        '<span> <i class="fa fa-file-text"></i><i class="fa fa-sub fa-user"></i></span>',
        resume);
    var allIcons = [aboutIcon, techIcon, worksIcon, resumeIcon];

    // Determine which icon was clicked on, then pass it into iconObject to manipulate
    var iconObject = "";
    $(".icon").on("click", function(){
        let selectedIcon = this.id;

        for (var i=0; i<allIcons.length, i++;){
            if(selectedIcon === allIcons[i].id){
                iconObject = allIcons[i];
            }
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