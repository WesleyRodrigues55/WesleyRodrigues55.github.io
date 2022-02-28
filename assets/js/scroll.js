// scroll slow
$(document).ready(function() {

    $("#go-topo").click(function() {
        var posicao = $("#topo").offset().top;
        $("html, body").animate({
            scrollTop: posicao
        }, 1000);
    });

    $("#go-sobre").click(function() {
        var posicao = $("#sobre").offset().top;
        $("html, body").animate({
            scrollTop: posicao
        }, 1000);
    });

    $("#go-projetos").click(function() {
        var posicao = $("#projetos").offset().top;
        $("html, body").animate({
            scrollTop: posicao
        }, 1000);
    });

    $("#go-servicos").click(function() {
        var posicao = $("#servicos").offset().top;
        $("html, body").animate({
            scrollTop: posicao
        }, 1000);
    });

    $("#go-contato").click(function() {
        var posicao = $("#contato").offset().top;
        $("html, body").animate({
            scrollTop: posicao
        }, 1000);
    });
});