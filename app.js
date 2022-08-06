function pin() {
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + '';
    if (pinString.length == 4) {
        return pin;
    }
    else {
        return pin();
    }
}

function pinGenerate() {
    const getPin = pin();
    const pinShow = document.getElementById('pin-show').value = getPin;
}

document.getElementById('keypad').addEventListener('click', function (event) {
    const number = event.target.innerText;
    const numberInput = document.getElementById('pin-type');
    if (isNaN(number)) {
        if (number == 'C') {
            numberInput.value = '';
        }
    }
    else {

        const previousInput = numberInput.value;
        const newInput = previousInput + number;
        numberInput.value = newInput;
    }
})