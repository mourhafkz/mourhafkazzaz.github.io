import "./functions.js";
var counter = 0;
$(document).on('mouseover', '.order', function () {
    let related_stroke = $(this).data('rel')
    $("#" + related_stroke).children().addClass("filter-blue")

})
$(document).on('mouseleave', '.order', function () {
    let related_stroke = $(this).data('rel')
    $("#" + related_stroke).children().removeClass("filter-blue")
})

$(document).on('click', '#reset', function () {
    var options = $("#options")
    var landing = $("#landing")
    $(".stroke").each(function (index) {
        if ($(this).parent().attr("id") === "landing") {
            options.append($(this))
        }
    });
    counter = 0;
    $('.order-area').empty()
    $('.stroke').removeClass('filter-green')
    $('.stroke').removeClass('filter-red')
    $('.options div').randomize();
})

//finds the first non-incrementing element
const findBreakingElement = arr => {
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] - arr[i - 1] > 1) {
            return arr[i]
        }
    }

    return false;
}

function isAscending(arr) {
    return arr.every(function (x, i) {
        return i === 0 || x >= arr[i - 1];
    });
}

$(document).on('click', '#valid', function () {
    var listItems = []
    var numItems = $('.stroke').length
    var el;
    var correct;
    var color;
    $(".stroke").each(function () {
        listItems.push(parseInt($(this).attr("id").substring(7, 20)))
    });
    console.log(numItems)

    el = findBreakingElement(listItems)
    console.log(listItems)
    console.log(el)

    if (el != false) {
        correct = listItems.splice(0, listItems.indexOf(el));

        for (var j = 0; j < listItems.length; j++) {
            $("#stroke-" + listItems[j]).addClass("filter-red")
        }
        for (var j = 0; j < correct.length; j++) {
            $("#stroke-" + correct[j]).addClass("filter-green")
        }
    }
    else {
        color = "filter-green"
        if (!isAscending(listItems)) color = "filter-red"

        for (var j = 0; j < listItems.length; j++) {
            $("#stroke-" + listItems[j]).addClass(color)
        }
    }
})


$(document).on('click', '.stroke', function () {
    var options = $("#options")
    var landing = $("#landing")
    if ($(this).parent().attr("id") === "options") {
        landing.append($(this))
        counter++;
        $('.order-area').append("<p class='order' data-rel= '" + $(this).attr("id") + "'>" + counter + "</p>")
    }

})

$(document).on('mouseover', '.stroke', function () {
    // let related_stroke = $(this).data('rel')
    // $("#" + related_stroke).children().addClass("filter-blue")
    if ($(this).parent().attr("id") === "options") {
        $(this).addClass("dragged")
        $("#landing").addClass('landing_notification')
    }

})
$(document).on('mouseleave', '.stroke', function () {
    // let related_stroke = $(this).data('rel')
    // $("#" + related_stroke).children().removeClass("filter-blue")
    $("#landing").removeClass('landing_notification')
    $(this).removeClass("dragged")
})






$(document).on('click', '#generate', function () {
    $(".hints").hide();
    var hanzi = $('#generate-text').val().split("")[0];
    $('.options').empty()
    $('.hints').empty()
    $('.landing').empty()
    $('.order-area').empty()
    findStrokes(hanziByID(hanzi));
    $('.options div').randomize();
    counter = 0
})
$(document).on('click', '#hint', function () {
    $(".hints").slideDown();
    setTimeout(() => $(".hints").slideUp(), 5000)
})



