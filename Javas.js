const display = document.querySelector('#display');
const buttons = document.querySelectorAll('button');

let operations = '';

buttons.forEach((item) => {
    item.onclick = () => {
        // item.id = button's value
        if (item.id == 'clear'){
            console.log('cleared');
            operations = '';
            display.innerText = '';
        } else if (item.id == 'backspace'){
            let string = display.innerText.toString();
            display.innerText = string.substr(0, string.length - 1);
        } else if( operations != '' && item.id == 'eql'){
            console.log('eval', operations);
            display.innerText = eval(operations);
            operations = display.innerText;
        }else if( operations == '' && item.id == 'eql'){
            display.innerText = 'Error!';
        } else {
            display.innerText = item.id;
            operations += item.id;
            console.log(item.id);
        }
    }
});

const themeToggleBtn = document.querySelector('.theme-toggler');
const calculator  = document.querySelector('.calculator');
const toggleIcon = document.querySelector('.toggler-icon');

let isDark = true;

themeToggleBtn.onclick = () => {
    calculator.classList.toggle('dark');
    themeToggleBtn,classList.toggle('active');
    isDark = !isDark;
}