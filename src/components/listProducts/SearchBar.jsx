import React from "react";
import './css/index.css';

export function SearchBar (props) {
    // const handlerChange = (e) => {
    //     setValue(e.target.value)
    // }

    return (
        <div className="productrow">
            <input/>
            <input 
                type='checkbox'
                checked={props.inStonkOnly}
                // onChange={() =>{handlerChange}}
            >    
            </input>
        </div>
    )
}