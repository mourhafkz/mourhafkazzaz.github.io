const strokes = document.querySelectorAll('.stroke')
const landing = document.querySelector('.landing')

strokes.forEach(stroke => {
    stroke.addEventListener('dragstart', dragStart)
    stroke.addEventListener('touchstart', dragStart)
    stroke.addEventListener('dragend', dragEnd)
    stroke.addEventListener('touchend', dragEnd)
});

landing.addEventListener('dragover', dragOver)
landing.addEventListener('drop', dragDrop)

let draggedItem;
let counter = 0;

function dragStart(e) {

    draggedItem = e.target.parentElement;
    $("#" + draggedItem.id).children().addClass("dragged")
    $("#" + landing.id).addClass("landing_notification")

}

function dragEnd(e) {
    $("#" + draggedItem.id).children().removeClass("dragged")
    $("#" + landing.id).removeClass("landing_notification")
}


function dragDrop(e) {
    if (e.target.id === "landing") {
        landing.append(draggedItem)
        counter++;
        $('.order-area').append("<p class='order' data-rel= '" + draggedItem.id + "'>" + counter + "</p>")
    }
    else if (e.target.className === "stroke" || draggedItem.className === "stroke") {
        landing.append(draggedItem)
        counter++;
        $('.order-area').append("<p class='order' data-rel= '" + draggedItem.id + "'>" + counter + "</p>")
    }
    else {
        console.log("dropped outside")
    }
    // $("#" + draggedItem.id).children().removeClass("dragged")
}
function dragOver(e) {
    e.preventDefault()
}


$(document).on('mouseover', '.order', function () {
    let related_stroke = $(this).data('rel')
    $("#" + related_stroke).children().addClass("filter-blue")

})
$(document).on('mouseleave', '.order', function () {
    let related_stroke = $(this).data('rel')
    $("#" + related_stroke).children().removeClass("filter-blue")
})

$(document).on('click', '#reset', function () {
    let strokes = document.querySelectorAll('.stroke')
    let options = document.querySelector('.options')

    strokes.forEach(stroke => {
        // console.log(stroke)
        options.append(stroke)

    });
    counter = 0;
    $('.order-area').empty()
    $('.stroke').removeClass('filter-green')
    $('.stroke').removeClass('filter-red')
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
    $(".stroke").each(function () {
        listItems.push(parseInt($(this).attr("id").substring(7, 20)))
    });


    el = findBreakingElement(listItems)





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

$(document).on('contextmenu', function (e) {
    // stop long touch hold from poping up context menus
    return false;
});