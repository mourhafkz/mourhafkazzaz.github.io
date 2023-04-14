$(document).ready(function () {
    function convert(obj) {
        return Object.keys(obj).map(key => ({
            field: key,
            value: obj[key],
        }));
    }


    $("#article_question, #phrase_question, #word_question, #conjugate_question").click(function (event) {

        filename = $(this).attr('id').split('_')[0] + 's.json'  //article_question to articles.json

        $.getJSON('data/' + filename, function (data) {
            // random word
            var random_entry = data.data[Math.floor(Math.random() * data.data.length)]
            if (random_entry.status == 0) {
                if (filename == "conjugates.json") {
                    // random pronoun from conjugation table
                    new_obj = convert(random_entry)
                    var random_key = new_obj[Math.floor(Math.random() * new_obj.length)]

                    if (random_key.field != "verb" && random_key.field != "status") {
                        $('#front').html('<p>' + random_key.field + ' _________</p><p class="tense_display">(' + random_entry.verb + ')</p>');
                        $('#back').html('<p>' + random_key.field + ' ' + random_key.value + '</p>');
                    } else {
                        // reclick the button if no a pronoun field
                        $("#conjugate_question").trigger('click');
                    }

                } else {
                    $('#front').html('<p>' + random_entry.task + '</p>');
                    $('#back').html('<p>' + random_entry.solution + '</p>');
                }
            }


        })

    });


});