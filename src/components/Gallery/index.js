import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import Video from './Video';
import Image from './Image';
import {
    loadImages,
    loadVideos,
    resetMedia,
    setStatus,
    activateLoader
} from '../../actions/gallery';

import styles from './styles.css';

export class Gallery extends Component {
    constructor (props) {
        super(props);

        this.state = {
            mediaType: 'image',
            image: 'active',
            video: '',
            isLoading: '',
            search: 'star'
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.setMediaType = this.setMediaType.bind(this);
    }

    componentDidMount () {
        const html = document.getElementsByTagName('html')[0];
        const starWrapper = html.querySelector('.star-wrapper');

        if (starWrapper) {
            html.querySelector('.star-wrapper').remove();
            html.style.overflow = 'auto';
        }

        this.props.dispatch(activateLoader());

        if (this.props.imageIsActive) {
            this.setState({mediaType: 'image', image: 'active', video: ''});
            this.props.dispatch(loadImages(this.state.search));
        } else {
            this.setState({mediaType: 'video', video: 'active', image: ''});
            this.props.dispatch(loadVideos(this.state.search));
        }
    }

    componentWillReceiveProps (nextProps) {
        nextProps.imageIsActive
            ? this.setState({ image: 'active', video: '' })
            : this.setState({ video: 'active', image: '' });

        this.setState({ isLoading: nextProps.isLoading });
    }

    setMediaType (event) {
        this.props.dispatch(activateLoader());

        if (this.state.search.length) {
            if (event.currentTarget.id === 'image-icon') {
                this.props.dispatch(setStatus('image'));
                if (!this.props.images.length) {
                    this.props.dispatch(loadImages(this.state.search));
                }
            } else {
                this.props.dispatch(setStatus('video'));
                if (!this.props.videos.length) {
                    this.props.dispatch(loadVideos(this.state.search));
                }
            }
        }
    }

    handleClick () {
        this.props.dispatch(resetMedia());
        this.props.dispatch(activateLoader());
        this.state.image === 'active'
            ? this.props.dispatch(loadImages(this.state.search))
            : this.props.dispatch(loadVideos(this.state.search));
    }

    handleChange (event) {
        this.setState({ search: event.target.value });
    }

    render () {
        return (
            <div className="gallery">
                <div className="top-bar">
                    <div className="search">
                        <img className='logo' src="/images/logo.png" />
                        <span onClick={this.handleClick} className="icon"><i className="fa fa-search" /></span>
                        <input onChange={this.handleChange} type="search" id="search" placeholder="Search gallery" value={this.state.search} />
                    </div>
                </div>
                <div className="media">
                    <div className="media-type">
                        <span id="image-icon" className={this.state.image} onClick={this.setMediaType}>Images</span>
                        <span id="video-icon" className={this.state.video} onClick={this.setMediaType}>Videos</span>
                    </div>
                    <div className={this.state.isLoading} />
                    { this.state.image === 'active' ? (<Image images={this.props.images} />) : (<Video videos={this.props.videos} />) }
                </div>
            </div>
        )
    }
}

Gallery.propTypes = { dispatch: PropTypes.func };

const mapStateToProps = (state) => ({
    images: state.image.list,
    videos: state.video.list,
    videoIsActive: state.video.active,
    imageIsActive: state.image.active,
    isLoading: state.image.isLoading
});

export default connect(mapStateToProps)(Gallery)
