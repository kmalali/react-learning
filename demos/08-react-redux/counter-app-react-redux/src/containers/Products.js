import { connect } from 'react-redux';
import Products from '../components/Products';

function mapStateToProps( state, ownProps ) {
    debugger;
    return {
        products: state.products
    };
}

const ProductsContainer = connect( mapStateToProps )( Products );

export default ProductsContainer;
