import React from "react";
import './css/productrow.css';

export function ProductRow (props) {
    return (
        <div>
            <div className="productrow">
                {props.name}
            </div>
            <div className="productrow">
                {props.price}
            </div>
        </div>
    )
}