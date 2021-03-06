import React from 'react';
import PropTypes from 'prop-types';
import './SimonButton.css';

class SimonButton extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    if (this.props.onPress) {
      this.props.onPress(this.props.num);
    }
  }

  get buttonClasses() {
    let clazz = "SimonButton";

    if (!this.props.onPress) {
      clazz += "Static ";
    } else {
      clazz += " ";
    }

    switch (this.props.color) {
      case "green":
        clazz += "Green";
        break;

      case "red":
        clazz += "Red";
        break;

      case "yellow":
        clazz += "Yellow";
        break;

      case "blue":
        clazz += "Blue";
        break;

      default:
        console.log("SimonButton has no recognized color: " + this.props.color);
    }

    if (!this.props.onPress) {
      clazz += "Static";

      if (this.props.light) {
        clazz += "Light";
      }
    }

    return clazz;
  }

  render () {
    return (
      <div className={this.buttonClasses} onMouseDown={this.handleClick}></div>
    );
  }
}

SimonButton.propTypes = {
  color: PropTypes.string.isRequired,
  num: PropTypes.number.isRequired,
  light: PropTypes.bool,
  onPress: PropTypes.func
};

export default SimonButton;
