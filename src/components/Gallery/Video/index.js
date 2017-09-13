import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux';
import List from './List';
import styles from './styles.css';

export class Video extends Component {
    constructor (props) {
        super(props);

        this.state = {
            videos: []
        }
    }

    componentWillReceiveProps (nextProps) {
        this.setState({ videos: nextProps.videos })
    }

    render () {
        return (
            <div>
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
