$(document).ready(function() {

    $("p").css("color", "blue");
    $(".paragraph").css("fontSize", "50px");
    $(".anchor").css({
        "background": "olive",
        "color": "red"
    });
    $("form *").prop("disabled", true);

    $(".anchor").prepend("↗");
    $(".anchor").attr("target", "_blank")
    $(".anchor").each(function () {
        $(this).attr("href", function (index, value) {
            let protocol = value.substring(0, value.indexOf(':'));
            if (protocol === 'http') {
                let href = value.substring(value.indexOf(':'), value.length);
                return protocol + 's' + href;
            }
        });
    });


    $('body').append('<button id = "knopka">Knopka</button>');
    $("#knopka").click(function () {

        $("a").each(function () {
            $(this).text(function (index, text) {
                if (text.substr(0, 1) === '↗') {
                    return text.substring(1, text.length);
                }
            });
        });

        $(".anchor").removeAttr("target");
    });

    
    $("#fadeOut").click(() => {
        $("#fadeOut").parent().siblings().children().fadeOut();
    });

    $("#fadeIn").click(() => {
        $("#fadeIn").parent().siblings().children().fadeIn();
    });

    $("#fadeTo").click(() => {
        $("#fadeTo").parent().siblings().children().fadeTo(1000, 0.4, "linear", () => alert('Fade To succeded!'));
    });

    $("#slideDown").click(() => {
        $("#slideDown").parent().siblings().children().slideDown();
    });

    $("#slideToggle").click(() => {
        $("#slideToggle").parent().siblings().children().slideToggle();
    });

    $("#toggle").click(() => {
        $("#toggle").parent().siblings().children().toggle();
    });
});


$("#ajax").click(() => {
    $.ajax({
        url: "https://inxaoc.github.io/example/ajax-1.html"
    }).done((e) => {
        let pageContent = document.createElement("div");
        pageContent.innerHTML = e;
        $("body").append(pageContent);
    });
});
