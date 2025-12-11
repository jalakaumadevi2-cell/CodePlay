const codeEditor = document.getElementById('codeEditor');
const runBtn = document.getElementById('runBtn');
const clearBtn = document.getElementById('clearBtn');
const output = document.getElementById('output');

// Load last code from localStorage
window.onload = () => {
    if(localStorage.getItem('lastCode')) {
        codeEditor.value = localStorage.getItem('lastCode');
    }
};

// Run code
runBtn.addEventListener('click', () => {
    const code = codeEditor.value;
    localStorage.setItem('lastCode', code);
    try {
        const result = eval(code);
        output.textContent = result !== undefined ? result : "Code executed successfully!";
    } catch (err) {
        output.textContent = "Error: " + err.message;
    }
});

// Clear output
clearBtn.addEventListener('click', () => {
    output.textContent = '';
});
