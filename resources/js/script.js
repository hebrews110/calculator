var currentNumber = 1;
var num1 = null;
var num2 = null;
var click = 0;


var $screen = $("#screen");
var $number = $(".number");



$number.on('click', function() {
    click++;
    if (click > 12) {
        return;
    }

    var numberPressed = $(this).html();
    $screen.append(numberPressed);
    $("#clear").css('background-color', '#cc1423');

    if (currentNumber == 1) {
        if (num1 == null) {
            num1 = numberPressed;
        } else {
            num1 = num1 + numberPressed;
        }
    }

    if (currentNumber == 2) {
        if (num2 == null) {
            num2 = numberPressed;
        } else {
            num2 = num2 + numberPressed;
        }
        $("#equal").css('background-color', '#cc1423');
    }
});



function more(){
    if (click > 12) {
    }
    if (currentNumber == 2) {
        findAnswer();
        $screen.empty();
        $screen.append(num1);
    }

    currentNumber = 2;
}

$("#plus").on('click', function() {
    if(num1 != null) {
        more();
        $screen.append("+");
        op = "+";
    };

    return;
})


$("#minus").on('click', function() {
    if(num1 != null) {
        more();
        $screen.append("-");
        op = "-";
    };

    return;
})

$("#multiply").on('click', function() {
    if(num1 != null) {
        more();
        $screen.append("*");
        op = "*";
    };

    return;
})


$("#divide").on('click', function() {
    if(num1 != null) {
        more();
        $screen.append("/");
        op = "/";
    };

    return;
})


$("#clear").on('click', function() {
    $screen.empty();

    num1 = null;
    num2 = null;
    currentNumber = 1;
    click = 0;

    $("#clear").css('background-color', 'gray');
    $("#equal").css('background-color', 'gray');
});



function findAnswer() {
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

    if (op == "+") {
        answer = num1 + num2;
    }
    if (op == "-") {
        answer = num1 - num2;
    }
    if (op == "*") {
        answer = num1 * num2;
    }
    if (op == "/") {
        answer = num1 / num2;
    }

    num1 = answer;
    num2 = null;
    currentNumber = 1;
}



$("#equal").on('click', function() {
    var element = document.getElementById('equal');
    var style = window.getComputedStyle(element);
    var backgroundColor = "background-color";
    var buttonColor = element.style.backgroundColor;

    if(buttonColor == 'gray') {
        return;
    }

    findAnswer();
    a = answer;

    if (a % 1 === 0) {
        answer = a.toFixed(0);
    } else {
        answer = a.toFixed(5);
    }
    
    $screen.empty();
    var answerLength = answer.toString();
    click = answerLength.length;
    $screen.append(answer);
})
