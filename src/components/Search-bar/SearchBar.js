import React, { useState } from "react"
import productsData from "../../data.json"
import ProductTable from "../Product-table/ProductTable"

function SearchBar() {
    const [search, setSearch] = useState('')
     const products = productsData.data

       return (
            <div className="container mt-3">
            <div className="input-group mb-3">
                <form className="search-form">
                <input name="search" type="text" className="search-input" placeholder="search" value={search} onChange={(event) => setSearch(event.target.value)}/>
                </form>
                <ProductTable products={products}/>
            </div>
            </div>
        )
}

export default SearchBar;