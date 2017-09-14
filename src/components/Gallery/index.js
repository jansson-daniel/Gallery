import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { loadImages, loadVideos, resetMedia } from '../../actions/gallery';
import Video from './Video';
import Image from './Image';
import styles from './styles.css';

export class Gallery extends Component {
    constructor (props) {
        super(props);

        this.state = {
            mediaType: 'image',
            image: 'active',
            video: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.setMediaType = this.setMediaType.bind(this);
    }

    componentDidMount () {
        if (this.props.detail.length > 0) {
            this.props.dispatch(loadVideos('star'));
        }
    }

    setMediaType (event) {
        if (event.currentTarget.id === 'image-icon') {
            this.setState({ image: 'active', video: '', value: '' })
        } else {
            this.setState({ image: '', video: 'active', value: '' })
        }

        this.props.dispatch(resetMedia());
    }

    handleChange (event) {
        if (event.target.value.length > 3) {
            if (this.state.image === 'active') {
                this.props.dispatch(loadImages(event.target.value));
            } else {
                this.props.dispatch(loadVideos(event.target.value));
            }
        }

        this.setState({ value: event.target.value });
    }

    render () {
        return (
            <div className="wrapper">
                <div className="box">
                    <div className="container-1">
                        <span className="icon"><i className="fa fa-search"></i></span>
                        <input onChange={this.handleChange} type="search" id="search" placeholder="Search..." value={this.state.value} />
                    </div>
                    <div className="media-type">
                        <svg id="image-icon" className={this.state.image} onClick={this.setMediaType} xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512"><path fill="#3A3E46" d="M454.12 16.025H57.907C25.97 16.025 0 41.988 0 73.963v364.142c0 31.938 25.97 57.872 57.908 57.872h396.21c31.936 0 57.88-25.935 57.88-57.872V73.963c.002-31.975-25.942-57.938-57.88-57.938zM331.084 102.19c30.885 0 55.933 25.048 55.933 55.932 0 30.883-25.05 55.932-55.933 55.932-30.894 0-55.933-25.05-55.933-55.932 0-30.884 25.04-55.933 55.933-55.933zm104.873 340.258H84.05c-15.448 0-22.328-11.177-15.364-24.966l95.99-190.125c6.954-13.787 20.21-15.018 29.597-2.75l96.52 126.137c9.39 12.27 25.796 13.312 36.655 2.32l23.612-23.91c10.85-10.99 26.84-9.63 35.694 3.02l61.144 87.34c8.84 12.67 3.508 22.934-11.94 22.934z"/></svg>
                        <svg id="video-icon" className={this.state.video} onClick={this.setMediaType} xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512"><path fill="#3A3E46" d="M460.088 0H51.91C23.236 0 0 23.235 0 51.912V460.09C0 488.764 23.235 512 51.91 512H460.09C488.765 512 512 488.765 512 460.09V52.015C512.105 23.34 488.765 0 460.088 0zM314.61 50.028h44.48v44.48h-44.48v-44.48zm-80.798 0h44.48v44.48h-44.48v-44.48zm-80.903 0h44.48v44.48h-44.48v-44.48zM116.487 462.18H72.006V417.7h44.48v44.48zm0-367.67H72.006V50.03h44.48v44.48zm80.902 367.67h-44.48V417.7h44.48v44.48zm80.798 0h-44.48V417.7h44.48v44.48zm80.903 0h-44.48V417.7h44.48v44.48zm9.84-193.516l-170.703 98.59c-9.628 5.548-21.77-1.36-21.77-12.56v-197.18c0-11.2 12.142-18.106 21.77-12.56l170.702 98.59c9.732 5.55 9.732 19.573 0 25.12zm71.063 193.517h-44.48V417.7h44.48v44.48zm0-367.67h-44.48V50.03h44.48v44.48z"/></svg>
                    </div>
                </div>
                { this.state.image === 'active' ? (<Image />) : (<Video />) }
            </div>
        )
    }
}

Gallery.propTypes = { dispatch: PropTypes.func };

const mapStateToProps = (state) => ({
    detail: state.image.detail
});

export default connect(mapStateToProps)(Gallery)
