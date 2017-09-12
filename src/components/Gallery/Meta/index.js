import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux';
import styles from './styles.css';

export class Meta extends Component {
    constructor (props) {
        super(props);

        this.state = {};
    }

    componentWillReceiveProps (nextProps) {}

    render () {
        return (
           <div></div>
        )
    }
}

Meta.propTypes = { dispatch: PropTypes.func };

const mapStateToProps = (state) => ({

});

export default connect(mapStateToProps)(Meta)
