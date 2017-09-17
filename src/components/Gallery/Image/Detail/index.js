import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux';
import { routeActions } from 'redux-simple-router';
import styles from './styles.css';

export class Detail extends Component {
    constructor (props) {
        super(props);

        this.state = {
            showMeta: false
        };

        this.handleClick = this.handleClick.bind(this);
        this.handleInfo = this.handleInfo.bind(this);
        this.closeInfo = this.closeInfo.bind(this);
    }

    componentDidMount () {
        this.setState({ detail: this.props.detail });
    }

    handleClick () {
        this.props.dispatch(routeActions.push('/gallery'));
    }

    handleInfo () {
        this.setState({ showMeta: true });
    }

    closeInfo () {
        this.setState({ showMeta: false });
    }

    render () {
        const styles = {
            backgroundImage: `url(${this.props.detail.images[0].href})`,
        };

        const meta = {
            display: this.state.showMeta ? 'block' : 'none'
        };

        return (
            <div className="image-detail">
                <div onClick={this.handleClick} className="detail-close" />
                <div onClick={this.handleInfo} className="detail-info">i</div>
                <div className="detail-image" style={styles} />
                <div style={meta} className="meta">
                    <div onClick={this.closeInfo} className="info-close" />
                    <h3>Image details</h3>
                    <p>Title: {this.props.detail.meta['AVAIL:Title']}</p>
                    <p>Description: {this.props.detail.meta['AVAIL:Description']}</p>
                    <p>Created: {this.props.detail.meta['AVAIL:DateCreated']}</p>
                    <p>File: {this.props.detail.meta['File:FileName']}</p>
                    <p>Nasa id: {this.props.detail.meta['XMP:Nasa_id']}</p>
                </div>
            </div>
        )
    }
}

Image.propTypes = { dispatch: PropTypes.func };

const mapStateToProps = (state) => ({
    detail: state.image.detail
});

export default connect(mapStateToProps)(Detail)
