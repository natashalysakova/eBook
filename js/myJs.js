/**
 * Created by hatassska on 12.04.2015.
 */
function ShowPage(pageTitle) {
    $('#body').load(pageTitle + '.html', function() {
        if(pageTitle=="examples")
        {
            ShowExample(1);
        }
        if(pageTitle == "theory")
        {
            ShowTheory(1);
        }
    });
}

function ShowTheory(teoryId) {
    $('#theoryText').load('t' + teoryId + '.html');
}

function ShowExample(exampleId) {
    $('#examplesText').load('e' + exampleId + '.html');
}

function SendResult() {

    ClearResult(false);

    var isCorrect = true;
    var answers = [1, 3, 2, 2, 2, 3, 3, 2, 3, 1];

    for (var i = 1; i <= 10; i++) {
        var qName = "question" + i.toString();
        var val = 0;

        var radios = document.getElementsByName(qName);
        for (var j = 0, length = radios.length; j < length; j++) {
            if (radios[j].checked) {
                // do whatever you want with the checked radio
                val = radios[j].value;
                break;
            }
        }

        if (val != answers[i - 1]) {
            isCorrect = false;
            $('#test' + i).addClass("has-error");
        }
        else {
            $('#test' + i).addClass("has-success");
        }
    }

    if (isCorrect) {
        $('#hurra').show();
    }
    else {
        $('#fail').show();
    }
}

function ClearResult(isCleanCheckboxes) {



    for (var i = 1; i <= 10; i++) {
        $('#test' + i).removeClass("has-error");
        $('#test' + i).removeClass("has-success");

        if (isCleanCheckboxes) {
            var qName = "question" + i.toString();
            var radios = document.getElementsByName(qName);
            for (var j = 0, length = radios.length; j < length; j++) {
                radios[j].checked = false;
            }
        }
    }

    $('#hurra').hide();
    $('#fail').hide();
}

$(function () {
    $('#body').load('main.html');
});


