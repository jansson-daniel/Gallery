import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux';
import styles from './styles.css';

export class List extends Component {
    constructor (props) {
        super(props);

        this.state = {};
    }

    componentWillReceiveProps () {
    }

    render () {
        return (
            <ul className="list"></ul>
        )
    }
}

List.propTypes = { dispatch: PropTypes.func };

const mapStateToProps = (state) => ({

});

export default connect(mapStateToProps)(List)
