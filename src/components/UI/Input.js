import React from "react";
const Input= React.forwardRef((props, ref)=> {
    return(
    <div className="flex flex-row items-center">
        <label htmlFor={props.input.id} className="font-bold">{props.label}</label>
        <input ref={ref} className="w-12 rounded-lg ml-2 p-2 border border-primary" {...props.input}/>
    </div>
    );
});

export default Input;