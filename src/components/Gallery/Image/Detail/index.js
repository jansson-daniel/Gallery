import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux';
import { routeActions } from 'redux-simple-router';
import styles from './styles.css';

export class Detail extends Component {
    constructor (props) {
        super(props);

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
            <div>
                <div onClick={this.handleClick} className="detail-close" />
                <div className="detail-image" style={styles} />
            </div>
        )
    }
}

Image.propTypes = { dispatch: PropTypes.func };

const mapStateToProps = (state) => ({
    detail: state.image.detail
});

export default connect(mapStateToProps)(Detail)
