import React from "react";
import './css/index.css';

export function SearchBar (props) {

    return (
        <div className="productrow">
            <input
                value={props.state.filterText}
                onChange={(e) => {props.onFilter(e)}}
                placeholder='Search...'
            />
            <input 
                type='checkbox'
                checked={props.state.inStonkOnly}
                onChange={props.inStonkFun}
            >    
            </input>
        </div>
    )
}