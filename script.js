const billAmountInput = document.getElementById('billAmount');
const tipPercentAmount = document.querySelectorAll('input[name=tipPercent]');
const calcBtn = document.getElementById('calcTip');
const resetBtn = document.getElementById('reset');
const showTipAmount = document.querySelector('.displayTipAmount');
const showTotalBill = document.querySelector('.displayTotalBill');
const result = document.querySelector('.results');
let billAmount = 0;
let tipAmount = 0;
let totalBill = 0;
let tipPercent = 0;

calcBtn.addEventListener('click', calculateTip);

function calculateTip() {
    //convert html tipPercent vals
    tipPercentAmount.forEach(function(amt) {
        if (amt.checked === true) {
            tipPercent = amt.value / 100;
            return tipPercent;
        }
    });
    // do not calculate if billAmountInput.value is empty
    if (billAmountInput.value) {
        tipAmount = (billAmountInput.value * tipPercent).toFixed(2);
        showTipAmount.firstElementChild.textContent = `$${tipAmount}`;
        tipAmount = parseFloat(tipAmount);
        billAmount = parseFloat(billAmountInput.value);
        totalBill = parseFloat(billAmount + tipAmount);
        showTotalBill.firstElementChild.textContent = `$${(totalBill).toFixed(2)}`;
        result.classList.add('active');
    }
}

resetBtn.addEventListener('click', resetForm);

function resetForm() {
    billAmountInput.value = '';
    result.classList.remove('active');
    tipPercentAmount[1].checked = true;
}




//TIME 
// document.getElementById('timeBtn').addEventListener('click', handleClick);
// let picElem = document.getElementById('pic');

// let curTime;

// function getCurTime() {
//     curTime = new Date().getHours();
// }

// function handleClick() {
//     getCurTime();

//     if (curTime >= 5 && curTime <= 24) {
//         picElem.firstElementChild.src = '../IMG_7319.jpg';
//     } else if (curTime >= 1 && curTime <= 6) {
//         picElem.firstElementChild.src = '../IMG_7319.jpg';
//     } else if (curTime > 6 && curTime < 17) {
//         picElem.firstElementChild.src = '../IMG_7319.jpg';
//     }

// }