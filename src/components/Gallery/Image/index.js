import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux';
import { resetLoading } from '../../../actions/gallery';
import List from './List';
import styles from './styles.css';

export class Image extends Component {
    constructor (props) {
        super(props);

        this.state = {
            images: {}
        };
    }

    componentDidMount () {
        this.setState({ images: this.props.images });
    }

    componentWillReceiveProps (nextProps) {
        if (nextProps.images.length) {
            this.props.dispatch(resetLoading());
        }

        this.setState({ images: nextProps.images })
    }

    render () {
        return (
            <div>
                <List list={this.state.images} />
            </div>
        )
    }
}

Image.propTypes = { dispatch: PropTypes.func };

const mapStateToProps = (state) => ({
    images: state.image.list,
    videos: state.video.list
});

export default connect(mapStateToProps)(Image)
