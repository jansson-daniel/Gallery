import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux';
import { loadImages } from '../../../../actions/gallery'
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
            return <ListItem key={i} item={item.collection.items} meta={item.collection.meta} index={i}/>;
        })

    }

    render () {
        return (
            <ul className='list'>
                {this.renderImages()}
            </ul>
        )
    }
}

List.propTypes = { dispatch: PropTypes.func };

const mapStateToProps = (state) => ({
    detail: state.image.detail
});

export default connect(mapStateToProps)(List)
