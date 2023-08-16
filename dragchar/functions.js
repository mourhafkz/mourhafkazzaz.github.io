import "./dndScript.js";
if (!localStorage["svg"]) {
    localStorage.setItem("svg", '<svg version="1.1" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" class="hanzi-svg" draggable><g stroke="#c1c1c1" stroke-dasharray="3" stroke-width="3" transform="scale(4, 4)"><line x1="0" y1="0" x2="256" y2="256"></line><line x1="256" y1="0" x2="0" y2="256"></line><line x1="128" y1="0" x2="128" y2="256"></line><line x1="0" y1="128" x2="256" y2="128"></line></g><g transform="scale(1, -1) translate(0, -900)"></g></svg>')
}
if (!localStorage["hanzi-9573"]) {
    var resp = [];
    const Http = new XMLHttpRequest();
    const url = './dictionary.json';
    Http.open("GET", url);
    Http.responseType = 'json';
    Http.send();
    Http.onreadystatechange = (e) => {
        if (Http.readyState == 4 && Http.status == 200) {
            resp = Http.response;
            for (var i = 0; i < resp.length; i++) {
                localStorage.setItem(charId(resp[i]["character"]), JSON.stringify(resp[i]));
            }
        }
    }
}

function saveDoc() {
    html2canvas(document.getElementById("page")).then(function (canvas) {
        document.body.appendChild(canvas);
    });
}

function charId(hanzi) {
    return hanzi.charCodeAt(0);
}
$.fn.randomize = function (selector) {
    (selector ? this.find(selector) : this).parent().each(function () {
        $(this).children(selector).sort(function () {
            return Math.random() - 0.5;
        }).detach().appendTo(this);
    });
    return this;
};

function hanziByID(hanzi) {
    return hanzi.charCodeAt(0);
}

function dispalyBox(hanzi, ind) {
    localStorage.setItem("svg", '<svg version="1.1" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" class="hanzi-svg" draggable="true"><g stroke="#c1c1c1" stroke-dasharray="3" stroke-width="3" transform="scale(4, 4)"></g><g transform="scale(1, -1) translate(0, -900)"></g></svg>')
    $('.options').append("<div class='stroke' id='stroke" + "-" + String(ind) + "' draggable>" + localStorage["svg"] + "</div>")
    $('.hints').append("<div class='step' id='step" + "-" + String(ind) + "'>" + localStorage["svg"] + "</div>")
}

function strokeProcess(hanzi, strokes) {
    var currentBox = "";
    var currentStep = "";
    for (var i = 0; i < strokes.length; i++) {
        dispalyBox(hanzi, i);
        if (i < strokes.length) {
            for (var z = 0; z <= i; z++) {
                currentBox = strokes[z]; //currentBox + 
                currentStep = currentStep + strokes[z];
            }
            $("#stroke" + "-" + i).children().children("g").eq(1).html(currentBox)
            $("#step" + "-" + i).children().children("g").eq(1).html(currentStep)
        }
    }
    $('.hints').append("<div>" + JSON.parse(localStorage[hanzi])["pinyin"][0] + "</div>")
}

function findStrokes(hanzi) {
    $.ajax({
        url: './paths/' + hanzi + '.path',
        async: false,
        cache: false,
        dataType: "json",
        success: function (data, textStatus, jqXHR) {
            var strokeInfo = data;
            strokeProcess(hanzi, strokeInfo)
        }
    });
}

window.findStrokes = findStrokes
window.hanziByID = hanziByID