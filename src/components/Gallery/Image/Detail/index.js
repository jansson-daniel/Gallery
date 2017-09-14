import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux';
import styles from './styles.css';

export class Detail extends Component {
    constructor (props) {
        super(props);

        this.state = {
        };
    }

    componentDidMount () {
        this.setState({ detail: this.props.detail });
    }

    render () {
        console.log('wwwww', this.props.detail)
        const styles = {
            backgroundImage: `url(${this.props.detail[0].href})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            position: 'fixed',
            top: '0',
            left: '0',
            height: '100%',
            width: '100%'
        };

        return (
            <div style={styles}></div>
        )
    }
}

Image.propTypes = { dispatch: PropTypes.func };

const mapStateToProps = (state) => ({
    detail: state.image.detail
});

export default connect(mapStateToProps)(Detail)
