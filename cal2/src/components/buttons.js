import React from "react";

function Button(props){
    return( <button onClick={(e)=> props.onClick()} >
        {props.label}

    </button>
        
    )
}


export default Button