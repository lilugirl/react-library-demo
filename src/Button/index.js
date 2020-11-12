import React, { Component } from 'react'
import styles from './button.css'
export default class Button extends Component {
  render() {
    return (
      <span className={styles.LButton}>
        {this.props.children}
      </span>
    )
  }
}
