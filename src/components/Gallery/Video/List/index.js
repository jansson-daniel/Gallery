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

        if (typeof nextProps.videos !== 'string') {
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

            this.setState({videos})
        } else {
            this.setState({ videos: nextProps.videos });
        }
    }

    renderVideos () {
        if (typeof this.state.videos === 'string') {
            return <p className="sorry">{this.state.videos}</p>
        } else {
            return this.state.videos.map((video, index) => {
                const meta = this.props.videos[index].hasOwnProperty('collection') ? this.props.videos[index].collection.meta : {};

                if (video.length === 2) {
                    return <ListItem key={index} video={video} meta={meta} index={index}/>
                }
            })
        }
    }

    render () {
        return (
            <ul className='list'>
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
