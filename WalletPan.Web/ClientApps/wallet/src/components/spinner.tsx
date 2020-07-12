import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Spinner = ({ show, children }) => (



    <div className="container-fluid p-0 overlayContainer">
        <div className={"spinner-overlay " + (show ? "d-flex d-block" : "d-none")}>
            <div className="spinner-border text-primary center align-self-center" role="status">
                <span className="sr-only">Loading...</span>
            </div>
        </div>
        {children}
    </div>






);

Spinner.propTypes = {

    show: PropTypes.bool
}


const mapStateToProps = (state, ownProps) => {

    return {
        show: state.base.pending
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {

    }
}
const SpinnerContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Spinner)
export default SpinnerContainer
