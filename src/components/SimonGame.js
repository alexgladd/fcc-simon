import React from 'react';
import SimonControls from './SimonControls';
import SimonButton from './SimonButton';
import './SimonGame.css';

class SimonGame extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      buttons: ["green", "red", "yellow", "blue"],
      strictMode: true
    };

    this.handleStrictModeChange = this.handleStrictModeChange.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  handleStrictModeChange(e) {
    console.log("Strict mode change: " + e.target.checked);
    this.setState({
      strictMode: e.target.checked
    });
  }

  handleButtonClick(buttonNumber) {
    console.log("Button press on " + buttonNumber);
  }

  handleReset() {
    console.log("Reset");
    // TODO
  }

  render () {
    return (
      <div className="SimonGame">
        <SimonControls count={0} strict={this.state.strictMode}
          onStrictChange={this.handleStrictModeChange}
          onReset={this.handleReset}/>

        <div className="ButtonGrid">
          {this.state.buttons.map((val, idx) => {
            return <SimonButton color={val} num={idx}
              onClick={this.handleButtonClick} key={idx.toString()} />;
          })}
        </div>
      </div>
    );
  }
}

export default SimonGame;
