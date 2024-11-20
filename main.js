$(document).ready(function(){
    // Модальне вікно при наведенні на кнопку
    $("#hoverButton").mouseover(function(){
        $("#modal").show();
    }).mouseleave(function(){
        $("#modal").hide();
    });

    // Відкриття модального вікна при кліку
    $("a.btn-ghost-call").click(function(event) {
        event.preventDefault();
        $("#myOverlay").fadeIn(297, function(){
            $("#myModal").css("display", "block").animate({opacity: 1}, 198);
        });
    });

    // Закриття модального вікна
    $("#myModal_close, #myOverlay").click(function(){
        $("#myModal").animate({opacity: 0}, 198, function(){
            $(this).css("display", "none");
            $("#myOverlay").fadeOut(297);
        });
    });

    // Завантаження додаткових блоків з новинами
    $("#loadNews").click(function(){
        $("#newsContainer").append("<div class='new-news-item'>Новина 1</div><div class='new-news-item'>Новина 2</div><div class='new-news-item'>Новина 3</div>");
    });

    // Кнопка "Вгору"
    var btn = $('.totop');
    $(window).scroll(function() {
        if ($(window).scrollTop() > 2200) {
            btn.addClass('totop-v');
        } else {
            btn.removeClass('totop-v');
        }
    });

    btn.on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({scrollTop:0}, '300');
    });
});
