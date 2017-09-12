import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import styles from './styles.css';

export class Video extends Component {
    constructor (props) {
        super(props);

        this.state = {};
    }

    render () {
        return (
           <div></div>
        )
    }
}

Video.propTypes = { dispatch: PropTypes.func };

export default connect()(Video)
