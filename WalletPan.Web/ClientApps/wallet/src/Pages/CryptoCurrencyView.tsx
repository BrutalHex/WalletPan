import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import fetchCryptoCurrencyAction from '../containers/CryptoCurrency/fetchCryptoCurrency';

import {getRecords,getRecordsPending,getRecordsError} from '../containers/CryptoCurrency/reducer';


import Spinner from '../components/spinner';



class CryptoCurrencyView extends Component {
    constructor(props) {
        super(props);

        this.shouldComponentRender = this.shouldComponentRender.bind(this);
    }

    componentWillMount() {
        debugger;
        const {fetchRecords} = this.props;
        fetchRecords();

    }

    shouldComponentRender() {

     
        if(this.props.pending === true) return false;
 
        // more tests
        return true;
    }

    render() {
        debugger;
        const {records, error, pending} = this.props;

        if(!this.shouldComponentRender()) return <Spinner />

       
             

        return (
            <div>
                {error && <span >{error}</span>}
                   <div>{ records != undefined ?  records.map((item, index) =>  <div key={item.key}>{item.title}</div>) : <div></div>}</div>
            </div>
        )
    }
}

 

const mapStateToProps = state => ({
    error: getRecordsError(state),
    records: getRecords(state),
    pending: getRecordsPending(state)
});

const mapDispatchToProps = dispatch => bindActionCreators({
    fetchRecords: fetchCryptoCurrencyAction
}, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CryptoCurrencyView );