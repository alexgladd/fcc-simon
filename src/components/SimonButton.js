import React from 'react';
import PropTypes from 'prop-types';
import './SimonButton.css';

class SimonButton extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.onClick(this.props.num);
  }

  get buttonClasses() {
    let clazz = "SimonButton ";

    switch (this.props.color) {
      case "green":
        return clazz + "Green";

      case "red":
        return clazz + "Red";

      case "yellow":
        return clazz + "Yellow";

      case "blue":
        return clazz + "Blue";

      default:
        console.log("SimonButton has no recognized color: " + this.props.color);
        return clazz;
    }
  }

  render () {
    return (
      <div className={this.buttonClasses} onClick={this.handleClick}></div>
    );
  }
}

SimonButton.propTypes = {
  color: PropTypes.string.isRequired,
  num: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired
};

export default SimonButton;
