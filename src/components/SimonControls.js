import React from 'react';
import PropTypes from 'prop-types';
import './SimonControls.css';

class SimonControls extends React.Component {
  constructor(props) {
    super(props);

    this.countFormatter = new Intl.NumberFormat("en-US", {minimumIntegerDigits: 2});
  }

  get countText() {
    if (this.props.playing) {
      return this.countFormatter.format(this.props.count);
    } else {
      return "--";
    }
  }

  get buttonText() {
    if (this.props.playing) {
      return "Reset game";
    } else {
      return "Start game";
    }
  }

  render () {
    return (
      <div className="SimonControls">
        <div>Count:</div>
        <div className="Count">
          {this.countText}
        </div>
        <div className="SimonState">
          <strong>{this.props.state}</strong>
        </div>
        <div className="StrictControl">
          <input id="strictmode" type="checkbox" checked={this.props.strict}
            onChange={this.props.onStrictChange} />
          <label htmlFor="strictmode">Strict mode</label>
        </div>
        <div className="GameControl">
          <button className="Button" onClick={this.props.onBtnClick}>
            <strong>{this.buttonText}</strong>
          </button>
        </div>
      </div>
    );
  }
}

SimonControls.propTypes = {
  count: PropTypes.number.isRequired,
  strict: PropTypes.bool.isRequired,
  playing: PropTypes.bool.isRequired,
  state: PropTypes.string.isRequired,
  onStrictChange: PropTypes.func.isRequired,
  onBtnClick: PropTypes.func.isRequired
};

export default SimonControls;
