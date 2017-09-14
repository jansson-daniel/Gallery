import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux';
import ListItem from '../ListItem';
import styles from './styles.css';

export class List extends Component {
    constructor (props) {
        super(props);

        this.state = {
            images: []
        };
    }

    componentWillReceiveProps (nextProps) {
        this.setState({ images: nextProps.list })
    }

    renderImages () {
        return this.state.images.map((item, i) => {
            return <ListItem item={item.collection.items} index={i}/>;
        })

    }

    render () {
        return (
            <ul className="list">
                {this.renderImages()}
            </ul>
        )
    }
}

List.propTypes = { dispatch: PropTypes.func };

export default connect()(List)
