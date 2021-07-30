import React from "react"
import ProductRow from "../Product-row/ProductRow"
import productsData from '../../data.json'


class ProductTable extends React.Component {
    state = {
        products: []
    }

    componentDidMount() {
        this.setState({ products: productsData.data })
    }
   
    render() {
        const { products } = this.state

        return (
            <div className="container mt-1">
                <table className="table">
                    <thead className="table-secondary">
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map(product => 
                            <ProductRow key={product.id} {...product}/>
                        )}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default ProductTable