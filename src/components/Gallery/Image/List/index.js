import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux';
import ListItem from '../ListItem';
import styles from './styles.css';

export class List extends Component {
    constructor (props) {
        super(props);

        this.state = {
            list: []
        };
    }

    componentDidMount () {
    }

    componentWillReceiveProps (nextProps) {
        this.setState({ images: nextProps.list })
    }

    renderImages () {
        const images = this.props.images.collection || { items: [] };

        return images.items.map((item) => {
            return <ListItem item={item}/>;
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

const mapStateToProps = (state) => ({
});

export default connect(mapStateToProps)(List)
