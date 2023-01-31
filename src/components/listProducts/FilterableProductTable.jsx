import React from "react";
import { SearchBar } from "./SearchBar";
import { ProductTable } from "./ProductTable";

class FilterableProductTable extends React.Component {
    constructor(props) {
        super(props)
        this.state = {filterText: '', inStonkOnly: false}
    }

    render() {
        return (
            <div>
                <SearchBar inStonkOnly={this.state.inStonkOnly} />
                <ProductTable filterText={this.state.filterText}/>
            </div>
        )
    }
}

export default FilterableProductTable;