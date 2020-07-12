import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {
    RequestGenerateWallet,
    RequestWalletInformation, fetchWalletInfo
} from '../actions'

class XrpWallet extends Component {
    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this)
     
    }
    componentDidMount() {
        const { dispatch,address } = this.props
        dispatch(fetchWalletInfo(address));
    }
    componentDidUpdate(prevProps) {
        if (this.props.address !== prevProps.address) {
            const { dispatch, address } = this.props
            dispatch(fetchWalletInfo(address))
        }
    }

    handleChange(fetchWalletInfo) {
   
        this.props.dispatch(fetchWalletInfo(fetchWalletInfo));
    }
   
    render() {
        const { selectedSubreddit, posts, isFetching, lastUpdated } = this.props
        return (
            <div>
                <Picker
                    value={selectedSubreddit}
                    onChange={this.handleChange}
                    options={['reactjs', 'frontend']}
                />
                <p>
                    {lastUpdated && (
                        <span>
                            Last updated at {new Date(lastUpdated).toLocaleTimeString()}.{' '}
                        </span>
                    )}
                    {!isFetching && (
                        <button onClick={this.handleRefreshClick}>Refresh</button>
                    )}
                </p>
                {isFetching && posts.length === 0 && <h2>Loading...</h2>}
                {!isFetching && posts.length === 0 && <h2>Empty.</h2>}
                {posts.length > 0 && (
                    <div style={{ opacity: isFetching ? 0.5 : 1 }}>
                        <Posts posts={posts} />
                    </div>
                )}
            </div>
        )
    }
}

 