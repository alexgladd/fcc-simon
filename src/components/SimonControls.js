import React from 'react';
import PropTypes from 'prop-types';
import './SimonControls.css';

class SimonControls extends React.Component {
  constructor(props) {
    super(props);

    this.countFormatter = new Intl.NumberFormat("en-US", {minimumIntegerDigits: 2});
  }

  get countText() {
    if (this.props.count > 0) {
      return this.countFormatter.format(this.props.count);
    } else {
      return "--";
    }
  }

  render () {
    return (
      <div className="SimonControls">
        <div>Count:</div>
        <div className="Count">
          {this.countText}
        </div>
        <div className="StrictControl">
          <input id="strictmode" type="checkbox" checked={this.props.strict}
            onChange={this.props.onStrictChange} />
          <label htmlFor="strictmode">Strict mode</label>
        </div>
        <div className="ResetControl">
          <button className="ResetButton" onClick={this.props.onReset}>
            Reset game
          </button>
        </div>
      </div>
    );
  }
}

SimonControls.propTypes = {
  count: PropTypes.number.isRequired,
  strict: PropTypes.bool.isRequired,
  onStrictChange: PropTypes.func.isRequired,
  onReset: PropTypes.func.isRequired
};

export default SimonControls;
