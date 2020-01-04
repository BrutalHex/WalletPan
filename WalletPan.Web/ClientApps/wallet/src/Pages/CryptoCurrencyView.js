import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import fetchProductsAction from '../base/Ajax/fetchProducts';
import {getProductsError, getProducts, getProductsPending} from '../base/Ajax/reducer';


import Spinner from '../components/spinner';


class CryptoCurrencyView extends Component {
    constructor(props) {
        super(props);

        this.shouldComponentRender = this.shouldComponentRender.bind(this);
    }

    componentWillMount() {
        const {fetchProducts} = this.props;
        fetchProducts();
    }

    shouldComponentRender() {
        const {pending} = this.props;
        if(this.pending === false) return false;
        // more tests
        return true;
    }

    render() {
        const {products, error, pending} = this.props;

        if(!this.shouldComponentRender()) return <Spinner />

        return (
            <div className='product-list-wrapper'>
                {error && <span className='product-list-error'>{error}</span>}
                <div>{products}</div> 
            </div>
        )
    }
}


const mapStateToProps = state => ({

   
              

    error: getProductsError(state),
    products: getProducts(state),
    pending: getProductsPending(state)
});

const mapDispatchToProps = dispatch => bindActionCreators({
    fetchProducts: fetchProductsAction
}, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CryptoCurrencyView );