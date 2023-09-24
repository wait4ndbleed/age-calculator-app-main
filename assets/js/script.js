let dayInput = document.querySelector('.day-i');
let test = parseInt(document.querySelector('.day-i').value);
let monthInput = document.querySelector('.month-i');
let yearInput = document.querySelector('.year-i');
let button = document.querySelector('.calc');
let daySpan = document.querySelector('.day-res span');
let monthSpan = document.querySelector('.month-res span');
let yearSpan = document.querySelector('.year-res span');
let dayError = document.querySelector('.day-e');
let monthError = document.querySelector('.month-e');
let yearError = document.querySelector('.year-e');
let dayErrorMsg = false;
let monthErrorMsg = false;
let yearErrorMsg = false;
let d = new Date();
let day = d.getDate();
let month = d.getMonth() + 1;
let year = parseInt(d.getFullYear());

button.addEventListener('click', handleButtonClick);

function handleButtonClick() {
    let yearRes = year - parseInt(yearInput.value);
    let monthRes = month - parseInt(monthInput.value);
    let dayRes = day - parseInt(dayInput.value);

    if (parseInt(dayInput.value) > 31 || parseInt(dayInput.value) < 1 || isNaN(parseInt(dayInput.value)) || dayInput.value === '') {
        error();
        if (dayInput.value === '') {
            dayError.innerHTML = 'This field is required';
        } else {
            dayError.innerHTML = 'Must be a valid day';
        }
        dayErrorMsg = true;
        daySpan.innerHTML = '--';
        monthSpan.innerHTML = '--';
        yearSpan.innerHTML = '--';
    } else {
        dayError.innerHTML = '';
        dayErrorMsg = false;
    }
    
    if (parseInt(monthInput.value) > 12 || parseInt(monthInput.value) < 1 || isNaN(parseInt(monthInput.value)) || monthInput.value === '') {
        error();
        if (monthInput.value === '') {
            monthError.innerHTML = 'This field is required';
        } else {
            monthError.innerHTML = 'Must be a valid month';
        }
        monthErrorMsg = true;
        daySpan.innerHTML = '--';
        monthSpan.innerHTML = '--';
        yearSpan.innerHTML = '--';
    } else {
        monthError.innerHTML = '';
        monthErrorMsg = false;
    }


    if (parseInt(yearInput.value) > year || parseInt(yearInput.value) < 1 || isNaN(parseInt(yearInput.value)) || yearInput.value === '') {
        error();
        if (yearInput.value === '') {
            yearError.innerHTML = 'This field is required';
        } else {
            yearError.innerHTML = 'Must be a valid month';
        }
        yearErrorMsg = true;
        daySpan.innerHTML = '--';
        monthSpan.innerHTML = '--';
        yearSpan.innerHTML = '--';
    } else {
        yearError.innerHTML = '';
        yearErrorMsg = false;
    }
    
    if (!dayErrorMsg && !monthErrorMsg && !yearErrorMsg) {
        cleanError();
        if (dayRes < 0) {
            dayRes = 30 + dayRes;
            monthRes -= 1;
        }

        if (monthRes < 0) {
            monthRes = 12 + monthRes;
            yearRes -= 1;
        }

        yearSpan.innerHTML = yearRes;
        monthSpan.innerHTML = monthRes;
        daySpan.innerHTML = dayRes;
        
    }
}

function error() {
    
    document.querySelector('.day').style.color = 'hsl(0, 100%, 67%)';
    dayInput.style.borderColor = 'hsl(0, 100%, 67%)';
    document.querySelector('.month').style.color = 'hsl(0, 100%, 67%)';
    monthInput.style.borderColor = 'hsl(0, 100%, 67%)';
    document.querySelector('.year').style.color = 'hsl(0, 100%, 67%)';
    yearInput.style.borderColor = 'hsl(0, 100%, 67%)';
}

function cleanError() {
    document.querySelector('.day').style.color = 'hsl(0, 1%, 44%)';
    dayInput.style.borderColor = 'hsl(0, 0%, 86%)';
    dayInput.style.cssText = '.day-i:focus { border: 1px solid hsl(259, 100%, 65%); }';
    document.querySelector('.month').style.color = 'hsl(0, 1%, 44%)';
    monthInput.style.borderColor = 'hsl(0, 0%, 86%)';
    monthInput.style.cssText = '.month-i:focus { border: 1px solid hsl(259, 100%, 65%); }';
    document.querySelector('.year').style.color = 'hsl(0, 1%, 44%)';
    yearInput.style.borderColor = 'hsl(0, 0%, 86%)';
    yearInput.style.cssText = '.year-i:focus { border: 1px solid hsl(259, 100%, 65%); }';
}