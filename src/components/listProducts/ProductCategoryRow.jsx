import React from "react";
import './css/index.css';

export function ProductCategoryRow (props) {
    return (
        <div>
            <div className="productrow category">
                {props.category}
            </div>
        </div>
    )
}