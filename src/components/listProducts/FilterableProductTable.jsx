import React from "react";
import { SearchBar } from "./SearchBar";
import { ProductTable } from "./ProductTable";

class FilterableProductTable extends React.Component {
    constructor(props) {
        super(props)
        this.state = {filterText: 'fo', inStonkOnly: true}
        this.inStonkFun = this.inStonkFun.bind(this)
        this.filterText = this.filterText.bind(this)
    }

    inStonkFun () { 
        this.setState((state) => {
            return ({inStonkOnly: !state.inStonkOnly})
        })
    }

    filterText (e) {
        console.log(e.target.value);
        this.setState(() => {
            return ({filterText: e.target.value})
        })
    }

    render() {
        return (
            <div>
                <SearchBar onFilter={this.filterText} inStonkFun={this.inStonkFun} state={this.state} />
                <ProductTable state={this.state} />
            </div>
        )
    }
}

export default FilterableProductTable;