import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { loadImages } from '../../actions/gallery';
import { loadVideos} from '../../actions/gallery';
import Video from './Video';
import Image from './Image';
import styles from './styles.css';

export class Gallery extends Component {
    constructor (props) {
        super(props);

        this.state = {};

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange (event) {
        if (event.target.value.length > 3) {
            //this.props.dispatch(loadImages(event.target.value));
            this.props.dispatch(loadVideos(event.target.value));
        };
    }

    render () {
        return (
            <div className="wrapper">
                <div className="box">
                    <div className="container-1">
                        <span className="icon"><i className="fa fa-search"></i></span>
                        <input onChange={this.handleChange} type="search" id="search" placeholder="Search..." />
                    </div>
                    <div className="media-type">
                        <span>Images</span>
                        <span>Videos</span>
                    </div>
                </div>
                <Video />
            </div>
        )
    }
}

Gallery.propTypes = { dispatch: PropTypes.func };

export default connect()(Gallery)
