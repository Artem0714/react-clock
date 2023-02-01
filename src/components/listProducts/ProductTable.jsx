import React from "react";
import './css/index.css';
import { ProductCategoryRow } from "./ProductCategoryRow";
import { ProductRow } from "./ProductRow";

const products = [
    {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
    {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
    {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
    {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
    {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
    {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
];

export function ProductTable (props) {
    return (
        <div>
            <div className="productrow" style={{fontWeight: '700'}}>
                Name
            </div>
            <div className="productrow" style={{fontWeight: '700'}}>
                Price
            </div>
            <div>
                <ProductCategoryRow category='Sporting Goods' />
                
                {products.map((product) => {
                    if (product.category === 'Sporting Goods' && product.name.toLowerCase().includes(props.state.filterText) && (!props.state.inStonkOnly||product.stocked)) {
                        return <ProductRow key={product.name} name={product.name} price={product.price} />
                    }
                })}
                <ProductCategoryRow category='Electronics' />
                {products.map((product) => {
                    if (product.category === 'Electronics' && product.name.toLowerCase().includes(props.state.filterText) && (!props.state.inStonkOnly||product.stocked)) {
                        return <ProductRow key={product.name} name={product.name} price={product.price} />
                    }
                })}
            </div>

        </div>
    )
}