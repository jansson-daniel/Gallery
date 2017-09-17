import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux';
import { routeActions } from 'redux-simple-router';
import styles from './styles.css';

export class Detail extends Component {
    constructor (props) {
        super(props);

        this.state = {
            detail: []
        };

        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount () {
        this.setState({ detail: this.props.detail });
    }

    handleClick () {
        this.props.dispatch(routeActions.push('/gallery'));
    }

    render () {
        const styles = {
            backgroundImage: `url(${this.props.detail[0].href})`,
        };

        return (
            <div className="detail-video">
                <div onClick={this.handleClick} className="detail-close" />
                <div className="detail-video" style={styles}>
                    <video width="100%" height="100%" controls autoPlay>
                        <source src={this.props.detail[0].href} type="video/mp4" />
                    </video>
                </div>
            </div>
        )
    }
}

Image.propTypes = { dispatch: PropTypes.func };

const mapStateToProps = (state) => ({
    detail: state.video.detail
});

export default connect(mapStateToProps)(Detail)
