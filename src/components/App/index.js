import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import styles from './styles.css';
import stars from './stars.css';

export class App extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div className="app">
        <div className="star-wrapper">
          <a className="gallery-title" href="/gallery">
            <img className='logo' src="/images/logo.png" />
            <h1>gallery</h1>
          </a>
          <div id="stars" />
          <div id="stars2" />
          <div id="stars3" />
        </div>
        {this.props.children}
      </div>
    )
  }
}

App.propTypes = { children: PropTypes.object };

export default connect()(App)
