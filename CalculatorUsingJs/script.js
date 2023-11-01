let currentInput = '';
let currentDisplay = '';

function appendToDisplay(value) {
    currentInput += value;
    currentDisplay = currentInput;
    document.getElementById('display').value = currentDisplay;
}

function clearDisplay() {
    currentInput = '';
    currentDisplay = '';
    document.getElementById('display').value = currentDisplay;
}

function calculateResult() {
    try {
        currentDisplay = eval(currentInput);
        document.getElementById('display').value = currentDisplay;
        currentInput = currentDisplay.toString();
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}


let currentColorIndex = 0;


const colors = [
    { background: '#333', buttonBackground: '#555', buttonText: '#FFFFFF' },     // Dark Gray
    { background: '#555', buttonBackground: '#888', buttonText: '#FFFFFF' },     // Gray
    { background: '#2E86C1', buttonBackground: '#3498DB', buttonText: '#FFFFFF' }, // Steel Blue
    { background: '#17A589', buttonBackground: '#19B5FE', buttonText: '#FFFFFF' }, // Pine Green
    { background: '#D35400', buttonBackground: '#E67E22', buttonText: '#FFFFFF' }, // Pumpkin
    { background: '#8E44AD', buttonBackground: '#9B59B6', buttonText: '#FFFFFF' }, // Wisteria
    { background: '#C0392B', buttonBackground: '#E74C3C', buttonText: '#FFFFFF' }, // Pomegranate
    { background: '#D35400', buttonBackground: '#E67E22', buttonText: '#FFFFFF' }, // Pumpkin
    { background: '#1E8449', buttonBackground: '#27AE60', buttonText: '#FFFFFF' }, // Nephritis
    { background: '#F4D03F', buttonBackground: '#F7DC6F', buttonText: '#333' },    // Saffron
    { background: '#663399', buttonBackground: '#6A5ACD', buttonText: '#FFFFFF' }, // Rebecca Purple
    { background: '#229954', buttonBackground: '#2ECC71', buttonText: '#FFFFFF' }, // Emerald
    { background: '#3498DB', buttonBackground: '#5DADE2', buttonText: '#333' },    // Peter River
    { background: '#E74C3C', buttonBackground: '#EC7063', buttonText: '#FFFFFF' }, // Alizarin
    { background: '#F0E68C', buttonBackground: '#F7DC6F', buttonText: '#333' },    // Khaki
    { background: '#BDC3C7', buttonBackground: '#D5DBDB', buttonText: '#333' }     // Silver
];

function changeColor() {
    
    const calculator = document.querySelector('.calculator');
    
    const buttons = document.querySelectorAll('.buttons button');
    
    
    calculator.style.backgroundColor = colors[currentColorIndex].background;

    
    buttons.forEach((button, index) => {
        button.style.backgroundColor = colors[currentColorIndex].buttonBackground;
        button.style.color = colors[currentColorIndex].buttonText;
    });
    
    
    currentColorIndex = (currentColorIndex + 1) % colors.length;
}


const colorButton = document.querySelector('.color');
colorButton.addEventListener('click', changeColor);

