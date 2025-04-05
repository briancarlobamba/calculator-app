/* const display = document.getElementById("display");

function appendToDisplay(input) {
    if (display.value === "ERROR") 
        return;

    if (input === '.') {
        const lastNumber = display.value.split(/[\+\-\*\/\(\)]/).pop(); 
        if (lastNumber.includes('.')) {
            return; 
        }
    }

    display.value += input;
}



function clearDisplay() {
    display.value = "";
};

function calculate() {
    if (display.value.trim() === "") {
        return;
    }
    
    try {
        display.value = eval(display.value)
    }
    catch(error) {
        display.value = "ERROR"
    }
};


function deleteDisplay() {
    if (display.value === "ERROR") return; 
    display.value = display.value.slice(0, -1);
} */

const display = document.getElementById("display");

function appendToDisplay(input) {
    if (display.value === "ERROR") return;

    const lastChar = display.value.slice(-1);
    const operators = ['+', '-', '*', '/'];

    if (input === '.') {
        const lastNumber = display.value.split(/[\+\-\*\/]/).pop();
        if (lastNumber.includes('.')) return;
    }

    if (display.value === '' && operators.includes(input) && input !== '-') {
        return;
    }

    if (
        operators.includes(lastChar) &&
        operators.includes(input)
    ) {
        if (display.value.length === 1 && display.value === '-') {
            return; 
        }

        display.value = display.value.slice(0, -1) + input;
        return;
    }

    display.value += input;
}


function clearDisplay() {
    display.value = "";
}

function deleteDisplay() {
    if (display.value === "ERROR") return;
    display.value = display.value.slice(0, -1);
}

function calculate() {
    if (display.value.trim() === "") return;

    try {
        const result = eval(display.value);
        display.value = result;
    } catch (error) {
        display.value = "ERROR";
    }
}

document.addEventListener("keydown", function (e) {
    const key = e.key;

    if (!isNaN(key) || ['+', '-', '*', '/', '.'].includes(key)) {
        appendToDisplay(key);
    } else if (key === 'Enter') {
        calculate();
    } else if (key === 'Backspace') {
        deleteDisplay();
    } else if (key === 'Escape') {
        clearDisplay();
    }
});
