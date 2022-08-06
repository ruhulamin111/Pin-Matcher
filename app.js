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

function verifyPin() {
    const pin = document.getElementById('pin-show').value;
    const pinType = document.getElementById('pin-type').value;
    const fail = document.getElementById('fail')
    const success = document.getElementById('success')
    if (pin == pinType) {
        success.style.display = 'block';
        fail.style.display = 'none';
    }
    else {
        const fail = document.getElementById('fail')
        fail.style.display = 'block';
        success.style.display = 'none';
    }
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