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
})