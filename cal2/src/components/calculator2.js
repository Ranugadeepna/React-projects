import { calculateNewValue } from "@testing-library/user-event/dist/utils";
import React from "react";




function Calculator2 (props){
    const [value1,setValue1] = React.useState('0')
    const [value2,setValue2] = React.useState('0')
    const  [result,setResult] =React.useState('0')


    function calculate(operator){
        const num1=parseFloat(value1)
        const num2=parseFloat(value2)
    
        if (operator === '+'){
            setResult(num1+num2);
        }
        if (operator === '-'){
            setResult(num1-num2);
            }
        if (operator === '*'){
            setResult(num1*num2);
            }
        if (operator === '/'){
            setResult(num1/num2);
            }
    
    }
    
    return(
        <>
        <div>
            <label>name:</label>
            <input type="text" value={value1} onChange={(e)=>{setValue1(e.target.value)} }/>
            <label>name:</label>
            <input type="text" value={value2} onChange={(e)=>{setValue2(e.target.value)} }/>


        <p>
        <button onClick={()=>calculate('+')}> +</button>
        <button onClick={()=>calculate('-')}> -</button>
        <button onClick={()=>calculate('*')}> *</button>
        <button onClick={()=>calculate('/')}> /</button>


        </p>
            


            
        </div> 

        <p>Result: {result}</p>
        
        </>

    )
}


export default Calculator2