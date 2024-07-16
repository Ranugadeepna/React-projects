import React from "react";
import Input from "./inputs";
import Button from "./buttons";

function Calculator () {
    function calc(operation){

    }

    const [value1,setValue1] = React.useState('0')
    const [value2,setValue2] = React.useState('0')
    const  [result,setResult] =React.useState('0')
    return (
        <>
            <div>
                <h1>Calculator</h1>
            </div>
            <div>
                Num1: <Input value={value1} onChange={(e) => setValue1(e.target.value)} />
            </div>
            <div>
                Num2: <Input value={value2} onChange={(e) => setValue2(e.target.value)} />
            </div>
            <div>
                <Button label={'+'} onClick={() => calc('+')} />
                <Button label={'-'} onClick={() => calc('-')} />
                <Button label={'*'} onClick={() => calc('*')} />
                <Button label={'/'} onClick={() => calc('/')} />
            </div>
            <p>Result: {result}</p>
        </>
    );
}

export default Calculator;