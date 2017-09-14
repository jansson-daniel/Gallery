import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import styles from './styles.css';

export class App extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div>
        <div className="star-wrapper">
          <a href="/gallery">
            <h1 className="gallery-title">gallaxery</h1>
            <span className="enter">Enter</span>
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
