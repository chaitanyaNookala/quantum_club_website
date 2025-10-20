/**
 * JavaScript Calculator
 * A fully functional calculator with basic operations
 */

class Calculator {
    constructor() {
        this.display = document.getElementById('display');
        this.currentInput = '0';
        this.previousInput = null;
        this.operator = null;
        this.waitingForOperand = false;
        this.init();
    }

    init() {
        // Create calculator UI if it doesn't exist
        if (!this.display) {
            this.createCalculator();
        }
        
        this.updateDisplay();
    }

    createCalculator() {
        const body = document.body;
        body.innerHTML = `
            <div class="calculator">
                <div class="display-container">
                    <input type="text" id="display" class="display" readonly>
                </div>
                <div class="buttons">
                    <button class="btn btn-clear" onclick="calculator.clear()">C</button>
                    <button class="btn btn-operator" onclick="calculator.operator = '/'; calculator.calculate()">/</button>
                    <button class="btn btn-operator" onclick="calculator.operator = '*'; calculator.calculate()">×</button>
                    <button class="btn btn-delete" onclick="calculator.delete()">⌫</button>
                    
                    <button class="btn btn-number" onclick="calculator.inputNumber('7')">7</button>
                    <button class="btn btn-number" onclick="calculator.inputNumber('8')">8</button>
                    <button class="btn btn-number" onclick="calculator.inputNumber('9')">9</button>
                    <button class="btn btn-operator" onclick="calculator.operator = '-'; calculator.calculate()">-</button>
                    
                    <button class="btn btn-number" onclick="calculator.inputNumber('4')">4</button>
                    <button class="btn btn-number" onclick="calculator.inputNumber('5')">5</button>
                    <button class="btn btn-number" onclick="calculator.inputNumber('6')">6</button>
                    <button class="btn btn-operator" onclick="calculator.operator = '+'; calculator.calculate()">+</button>
                    
                    <button class="btn btn-number" onclick="calculator.inputNumber('1')">1</button>
                    <button class="btn btn-number" onclick="calculator.inputNumber('2')">2</button>
                    <button class="btn btn-number" onclick="calculator.inputNumber('3')">3</button>
                    <button class="btn btn-equals" onclick="calculator.calculate()" rowspan="2">=</button>
                    
                    <button class="btn btn-number btn-zero" onclick="calculator.inputNumber('0')">0</button>
                    <button class="btn btn-number" onclick="calculator.inputDecimal()">.</button>
                </div>
            </div>
        `;

        // Add CSS styles
        const style = document.createElement('style');
        style.textContent = `
            body {
                margin: 0;
                padding: 20px;
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                min-height: 100vh;
                display: flex;
                justify-content: center;
                align-items: center;
                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            }
            
            .calculator {
                background: rgba(255, 255, 255, 0.95);
                border-radius: 20px;
                padding: 20px;
                box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
                backdrop-filter: blur(10px);
                border: 1px solid rgba(255, 255, 255, 0.2);
            }
            
            .display-container {
                margin-bottom: 20px;
            }
            
            .display {
                width: 100%;
                height: 60px;
                border: none;
                border-radius: 10px;
                background: #f8f9fa;
                text-align: right;
                font-size: 24px;
                font-weight: 600;
                color: #2c3e50;
                padding: 0 20px;
                box-sizing: border-box;
            }
            
            .buttons {
                display: grid;
                grid-template-columns: repeat(4, 1fr);
                gap: 10px;
            }
            
            .btn {
                height: 60px;
                border: none;
                border-radius: 10px;
                font-size: 18px;
                font-weight: 600;
                cursor: pointer;
                transition: all 0.2s ease;
            }
            
            .btn:hover {
                transform: translateY(-2px);
                box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
            }
            
            .btn:active {
                transform: translateY(0);
            }
            
            .btn-number {
                background: linear-gradient(135deg, #f8f9fa, #e9ecef);
                color: #2c3e50;
            }
            
            .btn-operator {
                background: linear-gradient(135deg, #667eea, #764ba2);
                color: white;
            }
            
            .btn-equals {
                background: linear-gradient(135deg, #27ae60, #2ecc71);
                color: white;
            }
            
            .btn-clear, .btn-delete {
                background: linear-gradient(135deg, #e74c3c, #c0392b);
                color: white;
            }
            
            .btn-zero {
                grid-column: span 2;
            }
        `;
        document.head.appendChild(style);
        
        // Re-initialize display reference
        this.display = document.getElementById('display');
    }

    inputNumber(num) {
        if (this.waitingForOperand) {
            this.currentInput = num;
            this.waitingForOperand = false;
        } else {
            this.currentInput = this.currentInput === '0' ? num : this.currentInput + num;
        }
        this.updateDisplay();
    }

    inputDecimal() {
        if (this.waitingForOperand) {
            this.currentInput = '0.';
            this.waitingForOperand = false;
        } else if (this.currentInput.indexOf('.') === -1) {
            this.currentInput += '.';
        }
        this.updateDisplay();
    }

    calculate() {
        if (this.previousInput !== null && this.operator && !this.waitingForOperand) {
            const prev = parseFloat(this.previousInput);
            const current = parseFloat(this.currentInput);
            let result;

            switch (this.operator) {
                case '+':
                    result = prev + current;
                    break;
                case '-':
                    result = prev - current;
                    break;
                case '*':
                    result = prev * current;
                    break;
                case '/':
                    result = current !== 0 ? prev / current : 0;
                    break;
                default:
                    return;
            }

            this.currentInput = String(result);
            this.previousInput = null;
            this.operator = null;
            this.waitingForOperand = true;
        } else {
            this.previousInput = this.currentInput;
            this.waitingForOperand = true;
        }
        this.updateDisplay();
    }

    clear() {
        this.currentInput = '0';
        this.previousInput = null;
        this.operator = null;
        this.waitingForOperand = false;
        this.updateDisplay();
    }

    delete() {
        if (this.currentInput.length > 1) {
            this.currentInput = this.currentInput.slice(0, -1);
        } else {
            this.currentInput = '0';
        }
        this.updateDisplay();
    }

    updateDisplay() {
        if (this.display) {
            this.display.value = this.currentInput;
        }
    }
}

// Initialize calculator when page loads
let calculator;
document.addEventListener('DOMContentLoaded', () => {
    calculator = new Calculator();
});
