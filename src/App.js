import './App.css';
import React, { useRef } from 'react';

function CalculatorApp() {
    const initialValue = 0;

    let leftOperand = useRef(initialValue);
    let rightOperand = useRef(initialValue);
    let operatorRef = useRef('');

    let operand = '';
    let inputBoxRef = useRef(initialValue);
    

    const numberClick = (event) => {
        operand = operand + event.target.name;
        inputBoxRef.current.value = operand;

        if (operatorRef.current === '')
            leftOperand.current = parseInt(operand);
        else
            rightOperand.current = parseInt(operand);
    }

    const operatorClick = (event) => {
        let operator = event.target.name;
        operand = ''

        if (operator === '=') {
            if (operatorRef.current === '+')
                inputBoxRef.current.value = leftOperand.current + rightOperand.current;
            else if (operatorRef.current === '-')
                inputBoxRef.current.value = leftOperand.current - rightOperand.current;
            else if (operatorRef.current === '*')
                inputBoxRef.current.value = leftOperand.current * rightOperand.current;
            else if (operatorRef.current === '/')
                inputBoxRef.current.value = leftOperand.current / rightOperand.current;

            operatorRef.current = '';
            leftOperand.current = parseInt(inputBoxRef.current.value);
            rightOperand.current = initialValue;
           
        }
        else {
            operatorRef.current = operator;
           
        }
    }
    return (
        <React.Fragment>
            <div className='container'>
                <div>
                    <input type='number' value={inputBoxRef.current} ref={inputBoxRef} />
                </div>
                <div className="one-two-three">
                    <button name="1" onClick={numberClick}>1</button>
                    <button name="2" onClick={numberClick}>2</button>
                    <button name="3" onClick={numberClick}>3</button>
                </div>
                <div className="four-five-six">
                    <button name="4" onClick={numberClick}>4</button>
                    <button name="5" onClick={numberClick}>5</button>
                    <button name="6" onClick={numberClick}>6</button>
                </div>
                <div className="seven-eight-nine">
                    <button name="7" onClick={numberClick}>7</button>
                    <button name="8" onClick={numberClick}>8</button>
                    <button name="9" onClick={numberClick}>9</button>
                </div>

                <div className="zero">
                    <button name="0" onClick={numberClick}>0</button>
                </div>

                <div className="arithmetic-operations">
                    <button name="+" onClick={operatorClick}>+</button>
                    <button name="-" onClick={operatorClick}>-</button>
                    <button name="*" onClick={operatorClick}>*</button>
                    <button name="/" onClick={operatorClick}>/</button>
                </div>

                <div className="equals">
                    <button name="=" onClick={operatorClick}>=</button>
                </div>
            </div>
        </React.Fragment>
    );
}

export default CalculatorApp;