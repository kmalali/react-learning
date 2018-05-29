import React, { Component } from 'react';
import axios from 'axios';

import { fetchProducts, fetchProduct } from './services/products';

export default class ProductCatalog extends Component {
    constructor( props ) {
        super( props );

        this.state = {
            isProductListPage: true,
            isProductsLoading: true,
            products: [],
            isProductDetailLoading: false,
            product: null
        };

        this.fetchProductsList = this.fetchProductsList.bind( this );
        this.fetchProductDetail = this.fetchProductDetail.bind( this );
        this.navigateToProductListView = this.navigateToProductListView.bind( this );
        this.navigateToProductDetailView = this.navigateToProductDetailView.bind( this );
    }

    fetchProductsList() {
        this.setState(
            {
                isProductsLoading: true
            },
            () => fetchProducts().then( products => this.setState({
                isProductsLoading: false,
                products: products
            }))
        )
    }

    fetchProductDetail( productId ) {
        this.setState(
            {
                isProductDetailLoading: true
            },
            () => fetchProduct( productId ).then( product => this.setState({
                isProductDetailLoading: false,
                product: product
            }))
        )
    }

    navigateToProductListView() {
        this.setState(
            {
                isProductListPage: true
            },
            this.fetchProductsList
        )
    }

    navigateToProductDetailView( productId ) {
        this.setState(
            {
                isProductListPage: false
            },
            () => this.fetchProductDetail( productId )
        )
    }

    componentDidMount() {
        this.navigateToProductListView();
    }

    render() {
        return this.state.isProductListPage ? (
            <div className="container">
                <h1>Product Catalog</h1>
                <hr />
                <table className="table table-bordered table-striped">
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
                            this.state.isProductsLoading ? <tr><td colSpan="5">Loading...</td></tr> : this.state.products.map( product => (
                                <tr key={product.id}>
                                    <td><img src={product.imageUrl} style={{ width: 32 }} /></td>
                                    <td><a href="#" onClick={this.navigateToProductDetailView.bind( this, product.id )}>{product.name}</a></td>
                                    <td>{product.code}</td>
                                    <td>{product.price}</td>
                                    <td>{product.starRating}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        ) : ( // product detail page
            this.state.product ? (
                <div className="container">
                    <div className="panel panel-primary">
                        <div className="panel-heading">{this.state.product.name}</div>
                        <div className="panel-body">
                            <div className="row">
                                <div className="col-sm-3">
                                    <img src={this.state.product.imageUrl} />
                                </div>
                                <div className="col-sm-9">
                                    <h2>{this.state.product.name}</h2>
                                    {this.state.product.starRating} stars
                                    <br /><br />
                                    Product id: {this.state.product.id}
                                    <br /><br />
                                    Product code: {this.state.product.code}
                                    <br /><br />
                                    Released on: {this.state.product.releaseDate}
                                    <br/><br/>
                                    <p>{this.state.product.description}</p>
                                    <br />
                                    Price: ${this.state.product.price}
                                    <br /><br />
                                    <a href="#" class="btn btn-primary" onClick={this.navigateToProductListView.bind( this )}>Back to product catalog</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div id="container">
                    Loading...
                </div>
            )
        )
    }
}