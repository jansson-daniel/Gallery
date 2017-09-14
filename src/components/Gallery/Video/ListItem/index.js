import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux';
import styles from './styles.css';

export class ListItem extends Component {
    constructor (props) {
        super(props);

        this.state = {};
    }

    render () {
        if (this.props.video.length < 2) {
            return null;
        }

        console.log('video', this.props.video)

        return (
            <li ref={(listItem) => { this.listItem = listItem; }} className="list-item">
                    <a className="video-list-item" href={this.props.video[0].href}>
                        <img src={this.props.video[1].href} />
                    </a>
            </li>
        )
    }
}

ListItem.propTypes = { dispatch: PropTypes.func };

const mapStateToProps = (state) => ({

});

export default connect(mapStateToProps)(ListItem)
