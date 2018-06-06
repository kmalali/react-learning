import React, { Component } from 'react';

import { loadProducts } from '../actions/Products';

class Products extends Component {
    constructor( props ) {
        super( props );
    }

    componentDidMount() {
        this.props.dispatch( loadProducts() );
    }

    render() {
        return this.props.products ? (
            <div>
                {
                    this.props.products.map( product => <h2>{product.name}</h2> )
                }
            </div>
        ) : null;
    }
}

export default Products;