import { calculateNewValue } from "@testing-library/user-event/dist/utils";
import React from "react";
import './style.css';





function FullCalculator (props){
    const [value,setValue] = React.useState('')
    // // const  [result,setResult] =React.useState('0')


    // function calculate(operator){
    //     const num1=parseFloat(value1)
    //     // const num2=parseFloat(value2)
    
    
    function calculate(){
        try{
            setValue(eval(value))
        }
        catch {
            setValue('error')
        }

    }
    


    return(
        <>
        <div className="container">
        <div>
            <input type="text" value={value} />
        </div> 
        <div>
        <button value={0} onClick={(e) =>setValue('') }>AC</button>
        <button onClick={(e) =>setValue(value.slice(0,-1)) }>DE</button>
        <button value={'.'} onClick={(e) =>setValue(value + e.target.value) }>.</button>
        <button value={'/'} onClick={(e) =>setValue(value + e.target.value) }>/</button>
       </div>
       <div>
        <button value={7} onClick={(e) =>setValue(value + e.target.value) }>7</button>
        <button value={8} onClick={(e) =>setValue(value + e.target.value) }>8</button>
        <button value={9} onClick={(e) =>setValue(value + e.target.value) }>9</button>
        <button value={'*'} onClick={(e) =>setValue(value + e.target.value) }>*</button>
       </div>
       <div>
        <button value={4} onClick={(e) =>setValue(value + e.target.value) }>4</button>
        <button value={5} onClick={(e) =>setValue(value + e.target.value) }>5</button>
        <button value={6} onClick={(e) =>setValue(value + e.target.value) }>6</button>
        <button value={'-'} onClick={(e) =>setValue(value + e.target.value) }>-</button>
       </div>
       <div>
        <button value={1} onClick={(e) =>setValue(value + e.target.value) }>1</button>
        <button value={2} onClick={(e) =>setValue(value + e.target.value) }>2</button>
        <button value={3} onClick={(e) =>setValue(value + e.target.value) }>3</button>
        <button value={'+'} onClick={(e) =>setValue(value + e.target.value) }>+</button>
       </div>
       <div>
        <button value={0} onClick={(e) =>setValue(value + e.target.value) }>0</button>
        <button value={'00'} onClick={(e) =>setValue(value + e.target.value) }>00</button>
        <button value={'='} onClick={()=>calculate()}>=</button>
       </div>
       
       
            

        </div>
        


            
        

        {/* <p>Result: {result}</p> */}
        
        </>

    )
}


export default FullCalculator