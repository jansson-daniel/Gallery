import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux';
import ListItem from '../ListItem';
import styles from './styles.css';

export class List extends Component {
    constructor (props) {
        super(props);

        this.state = {
            videos: []
        };

        this.renderVideos = this.renderVideos.bind(this)
    }

    componentDidMount () {
    }

    componentWillReceiveProps (nextProps) {
        const videos = [];

        nextProps.videos.forEach((video) => {
            const videoArray = video.collection.items.filter((item) => {
                return item.href.includes('mobile.mp4') || item.href.includes('mobile_thumb_00001');
            });
            videos.push(videoArray);
        });

        this.setState({ videos })
    }

    renderVideos () {
        this.props.videos.collection = this.props.videos.collection || { items: [] };

        return this.state.videos.map((video, index) => {
           return <ListItem video={video} index={index} />
       })
    }

    render () {
        return (
            <ul className="list">
                {this.renderVideos()}
            </ul>
        )
    }
}

List.propTypes = { dispatch: PropTypes.func };

const mapStateToProps = (state) => ({
});

export default connect(mapStateToProps)(List)
