$(document).ready(function () {



    function convert(obj) {
        return Object.keys(obj).map(key => ({
            field: key,
            value: obj[key],
        }));
    }

    function load_json(filename) {
        var res = []
        $.ajax({
            url: filename,
            async: false,
            dataType: 'json',
            success: function (json) {
                res = json.data;
            }
        });
        return res
    }

    function containsObject(obj, list) {
        var i;
        for (i = 0; i < list.length; i++) {
            if (list[i] === obj) {
                return true;
            }
        }

        return false;
    }

    var articles = load_json('data/articles.json');
    var phrases = load_json('data/phrases.json');
    var words = load_json('data/words.json');
    var conjugates = load_json('data/conjugates.json');


    var appeared_once = []
    var appeared_once_conjugates = []
    $("#article_question, #phrase_question, #word_question, #conjugate_question, #conjugation_table").click(function (event) {

        expected_filename = $(this).attr('id').split('_')[0] + 's'  //article_question to articles.json

        var filename;
        if (expected_filename == 'articles') { filename = articles; }
        else if (expected_filename == 'phrases') { filename = phrases; }
        else if (expected_filename == 'words') { filename = words; }
        else if (expected_filename == 'conjugates') { filename = conjugates; }
        else { filename = conjugates; }

        // pick random word
        var random_entry = filename[Math.floor(Math.random() * filename.length)]

        // if appeared before reclick    
        if (filename != conjugates) {
            if (containsObject(random_entry, appeared_once) == true) {
                return false;
            } else {
                appeared_once.push(random_entry)
            }
        }


        // status 0 means not learned yet
        if (random_entry.status == 0) {
            if (filename == conjugates) {
                table = false;
                if ($(this).attr('id') == "conjugation_table") table = true;


                if (table == false) {

                    // random pronoun from conjugation table
                    new_obj = convert(random_entry)
                    var random_key = new_obj[Math.floor(Math.random() * new_obj.length)]

                    if (random_key.field != "verb" && random_key.field != "status") {
                        $('#front').html('<div class="p_area"><p>' + random_key.field + ' ____</p><p class="tense_display">' + random_entry.verb + '</p></div>');
                        $('#back').html('<div class="p_area"><p>' + random_key.field + ' ' + random_key.value + '</p></div>');
                    } else {
                        // reclick the button if no a pronoun field
                        $("#conjugate_question").trigger('click');
                    }
                }
                else {

                    $('#front').html('<div class="p_area"><p class="tense_display">' + random_entry.verb + '</p></div>');
                    html = '<div class="p_area">'
                    for (key in random_entry) {
                        if (key != "verb" && key != "status") {
                            html += "<p>" + key + "  " + random_entry[key] + "</p>"
                        }
                        // console.log(random_entry[key])
                    }
                    $('#back').html(html + "</div>");

                }

            }
            else {
                $('#front').html('<p>' + random_entry.task + '</p>');
                $('#back').html('<p>' + random_entry.solution + '</p>');
            }

        }

    });

});