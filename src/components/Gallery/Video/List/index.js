import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux';
import { loadVideos } from '../../../../actions/gallery'
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

    componentWillReceiveProps (nextProps) {
        const videos = [];
        nextProps.videos.forEach((video) => {
            if (video.hasOwnProperty('collection')) {
                const videoArray = video.collection.items.filter((item) => {
                    if (item && item.hasOwnProperty('href')) {
                        return item.href.includes('mobile.mp4') || item.href.includes('mobile_thumb_00002');
                    }
                });
                if (videoArray) {
                    videos.push(videoArray);
                }
            }
        });

        this.setState({ videos })
    }

    renderVideos () {
        return this.state.videos.map((video, index) => {
           return <ListItem key={index} video={video} index={index} />
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
    detail: state.video.detail
});

export default connect(mapStateToProps)(List)
