import React, { Component } from 'react';
import axios from 'axios';

export default class ProductCatalog extends Component {
    constructor( props ) {
        super( props );

        this.state = {
            isProductListPage: true,
            products: [],
            shouldProductBeFetched: false,
            productId: null,
            product: null
        };

        // this.navigateToProductDetailPage = this.navigateToProductDetailPage.bind( this );
    }

    componentDidMount() {
        axios.get( 'http://localhost:4201/products' )
            .then( response => {
                console.log( response);
                return response;
            })
            .then( response => response.data )
            .then( products => {
                this.setState({
                    products: products
                });
            })
            .catch( err => console.log( err ) );
    }

    componentDidUpdate() { // this is called after render is called in the update phase
        if( this.state.shouldProductBeFetched === true && this.state.isProductListPage === false ) {
            this.setState(
                {
                    shouldProductBeFetched: false,
                },
                () => {
                    axios.get( 'http://localhost:4201/products/' + this.state.productId )
                        .then( response => response.data )
                        .then( product => {
                            this.setState({
                                product: product,
                            });
                        })
                        .catch( err => console.log( err ) );
                }
            );
        }
    }

    navigateToProductDetailPage( productId ) {
        this.setState({
            isProductListPage: false,
            productId: productId
        });
    }

    render() {
        return this.state.isProductListPage ? (
            <div class="container">
                <h1>Product Catalog</h1>
                <hr />
                <table class="table table-bordered table-striped">
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
                                    <td><img src={product.imageUrl} style={{ width: 32 }} /></td>
                                    <td><a href="#" onClick={this.navigateToProductDetailPage.bind( this, product.id )}>{product.name}</a></td>
                                    <td>{product.code}</td>
                                    <td>{product.price}</td>
                                    <td>{product.starRating}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        ) : (
            <div id="container">
                Loading...
            </div>
        )
    }
}