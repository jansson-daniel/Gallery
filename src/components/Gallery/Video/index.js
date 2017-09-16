import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux';
import List from './List';
import { resetLoading } from '../../../actions/gallery';
import styles from './styles.css';

export class Video extends Component {
    constructor (props) {
        super(props);

        this.state = {
            videos: []
        }
    }

    componentDidMount () {
        this.setState({ videos: this.props.videos });
    }

    componentWillReceiveProps (nextProps) {
        if (nextProps.videos.length) {
            this.props.dispatch(resetLoading());
        }
        this.setState({ videos: nextProps.videos })
    }

    render () {
        return (
            <div className="videos">
                <List videos={this.state.videos} />
            </div>
        )
    }
}

Image.propTypes = { dispatch: PropTypes.func };

const mapStateToProps = (state) => ({
    videos: state.video.list
});

export default connect(mapStateToProps)(Video)
