import React, { Component } from 'react';
import axios from 'axios';

export default class ProductCatalog extends Component {
  constructor( props ) {
      super( props );

      this.state = {
          products: []
      }
  }

  componentDidMount() {
      axios.get( 'http://localhost:4201/products' )
        .then( response => response.data )
        .then( products => {
            this.setState({
                products: products
            });
        });
  }

  render() {
    return (
        <div>
            <h1>Product Catalog</h1>
            <hr />
            <table>
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Code</th>
                        <th>Price</th>
                        <th>Rating</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.products.map( product => (
                            <tr>
                                <td><img src={product.imageUrl} /></td>
                                <td>{product.name}</td>
                                <td>{product.code}</td>
                                <td>{product.price}</td>
                                <td>{product.starRating}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
  }
}