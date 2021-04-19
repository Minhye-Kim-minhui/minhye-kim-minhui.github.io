document.write("Quiz Time!");

var number1 = Math.ceil(Math.random() * 9);
var number2 = Math.ceil(Math.random() * 9);
var result = number1 * number2;

var body = document.body;
var word = document.createElement('div');
word.id = "question";
word.textContent = String(number1) + 'X' + String(number2) + ' is?';
document.body.append(word);

var css1 = document.createElement('style')
css1.texContent = "#question{text-align:center;border : 5px solid powderblue;padding : 20px;width : 220px;}";
document.head.append(css1);

var form = document.createElement('form');
document.body.append(form);
var inputArea = document.createElement('input');
inputArea.type = 'number';
form.append(inputArea);
var btn = document.createElement('button');
btn.textContent = 'submit';
form.append(btn);

var outputArea = document.createElement('div');
document.body.append(outputArea);

form.addEventListener('submit', function (e){
    e.preventDefault();
    if (result === Number(inputArea.value)){
    outputArea.textContent = 'Correct!<3';
    number1 = Math.ceil(Math.random() * 9);
    number2 = Math.ceil(Math.random() * 9);
    result = number1 * number2;
    word.texContent = String(number1) + 'X' + String(number2) + ' is?';
    inputArea.value = '';
    inputArea.focus();
    }else {
    outputArea.textContent = 'Wrong!';
    inputArea.value = '';
    inputArea.focus();
    }
});
