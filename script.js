$(document).ready(function () {

    $("#article_question, #phrase_question, #word_question").click(function (event) {

        filename = $(this).attr('id').split('_')[0] + 's.json'  //article_question to articles.json

        $.getJSON('data/' + filename, function (data) {

            var random_entry = data.data[Math.floor(Math.random() * data.data.length)]
            if (random_entry.status == 0) {
                $('#front').html('<p>' + random_entry.task + '</p>');
                $('#back').html('<p>' + random_entry.solution + '</p>');
            } else {
                $('#front').html('<p>' + random_entry.task + '</p>');
                $('#back').html('<p>' + random_entry.solution + '</p>');
            }

        })

    });


});