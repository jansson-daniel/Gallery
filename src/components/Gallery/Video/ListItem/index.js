import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux';
import { routeActions } from 'redux-simple-router';
import { setDetailVideo } from '../../../../actions/gallery';
import styles from './styles.css';

export class ListItem extends Component {
    constructor (props) {
        super(props);

        this.state = {
            video: []
        };

        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount () {
        this.setState({ video: this.props.video });
    }

    handleClick (event) {
        event.preventDefault();
        this.props.dispatch(setDetailVideo(this.state.video));
        this.props.dispatch(routeActions.push('/gallery/detailvideo'));
    }

    render () {
        if (this.props.video.length < 2) {
            return null;
        }

        return (
            <li className="list-item">
                <a onClick={this.handleClick} className="video-list-item" href={this.props.video[0].href}>
                    <img src={this.props.video[1].href} />
                </a>
            </li>
        )
    }
}

ListItem.propTypes = { dispatch: PropTypes.func };

export default connect()(ListItem)
