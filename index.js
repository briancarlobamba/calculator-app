const display = document.getElementById("display");

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
}
