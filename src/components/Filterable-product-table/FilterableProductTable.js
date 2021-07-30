import React from "react"
import ProductTable from "../Product-table/ProductTable"
import SearchBar from "../Search-bar/SearchBar"

class FilterableProductTable extends React.Component {
    render() {
        return (
            <div className="container">
                <h1> IronStore</h1>
                <SearchBar />
                <ProductTable />
            </div>

        )
    }
}
export default FilterableProductTable