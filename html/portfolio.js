$(document).ready(function(){

    var everything = $("blockquote")
    var something = 0

    function changeThing(){
        $(everything[something]).fadeOut(400, function(){
            if (something == everything.length - 1){
                something = 0
            }
            else{
                something++
            }
            $(everything[something]).fadeIn(400);
        });
    }
    var timer = setInterval(changeThing, 4000);


    $(window).on("scroll", function(){
        if($(this).scrollTop() > 800){
            $("#scrollToTop").fadeIn();
        }else{
            $("#scrollToTop").fadeOut();
        }
    });
    $("#scrollToTop").click(function(){
        $("html").animate({scrollTop: 0}, 500);
    })

    function progress(){
        var windowScrollTop = $(window).scrollTop();
        var docHeight = $(document).height();
        var windowHeight = $(window).height();
        var progress = (windowScrollTop / (docHeight - windowHeight)) * 100;

        $('.progressReader')
                .height(progress + "%")
                .css({
                    backgroundColor: '#4037b8'
                });
    }
    progress();
    $(document).on("scroll", progress);

    var darkModelg =    $("[class='icon-moon-o'] ");
    var lightModelg = $("[class='icon-sun-o']");
    var navlinks = document.getElementsByClassName("nav-link");
    
    $(darkModelg).on("click", function(){
        $(this).css({
            visibility: "hidden"
        })
        $(lightModelg).css({
            visibility: "visible",
        })
        $(lightModelg).css({
            color: "rgb(177, 177, 177)"
        })
        $("body").css({
            backgroundColor: "rgba(0, 0, 0, 0.9)",
            transition: ".45s ease-in-out"
        })
        $(navlinks).add(".aboutMe blockquote").css({
            color: "#fff"
        })
        $("button", ".carousel-dark .carousel-control-prev-icon").css({
            marginTop:"50px"
        })
        $(".socials i").css({
            backgroundColor: "#fff"
        })
        $(".socials i").hover(function(){
            $(this).css({
                color: "initial"
            })
        })
        $(".story, h4:not(#Contact h4), p:not(#Contact p), h2:not(span),.info, h3, h5, h6, .languageSkill .span, .pr-skill-name").css({
            color:"white"            
        })
    })

    $(lightModelg).on("click", function(){
        $(this).css({
            visibility: "hidden"
        })
        $(darkModelg).css({
            visibility: "visible",
        })
        $("body").css({
            backgroundColor: ""
        })
        $(navlinks).add(".aboutMe blockquote").css({
            color: ""
        })
        $(".story, h4:not(#Contact h4), p:not(#Contact p), h2:not(span),.info, h3, h5, h6, .languageSkill .span, .pr-skill-name").css({
            color:""            
        })
        $(".navbar-collapse li:first-child a").css({
            color: "#fff !important"
        })
    })

    // The Progress Bar
})