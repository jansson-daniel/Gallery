import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux';
import { routeActions } from 'redux-simple-router';
import { setDetailImage } from '../../../../actions/gallery';
import styles from './styles.css';

export class ListItem extends Component {

    constructor (props) {
        super(props);

        this.state = {
            images: []
        };

        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        const images = this.props.item.filter((item) => {
            return item.href.includes('small') || item.href.includes('thumb');
        });

        if (images.length === 2) {
            this.setState({ images })
        }
    }

    handleClick (event) {
        event.preventDefault();
        this.props.dispatch(setDetailImage({ images: this.state.images, meta: this.props.meta }));
        this.props.dispatch(routeActions.push('/gallery/detail'));
    }

    render () {
       if (!this.state.images.length) {
           return null;
       }

        return (
            <li className="list-item">
                <a onClick={this.handleClick} href={this.state.images[0].href}>
                    <img src={this.state.images[1].href} />
                </a>
            </li>
        )
    }
}

ListItem.propTypes = { dispatch: PropTypes.func };

export default connect()(ListItem)
