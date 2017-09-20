import React from 'react';
import SimonControls from './SimonControls';
import SimonButton from './SimonButton';
import './SimonGame.css';

const players = {
  human: "human",
  computer: "computer"
};

class SimonGame extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      buttons: ["green", "red", "yellow", "blue"],
      playing: false,
      strictMode: true,
      sequence: [],
      active: players.computer
    };

    this.handleStrictModeChange = this.handleStrictModeChange.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.handleStart = this.handleStart.bind(this);
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
    this.setState({
      playing: false,
      sequence: [],
      active: players.computer
    });
  }

  handleStart() {
    console.log("Start");

    // TODO
    this.setState({
      playing: true
    });
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(this.state);

    if (!prevState.playing && this.state.playing) {
      // start a new name
      const firstItem = this.newSequenceItem;
      console.log("First item in sequence: " + firstItem);

      this.setState({
        sequence: [...this.state.sequence, firstItem]
      });
    } else if (this.state.playing && this.state.active === players.computer) {
      // handle computer's turn
      if (prevState.active === players.human) {
        // add a new item to the sequence
        const newItem = this.newSequenceItem;
        console.log("New item in sequence: " + newItem);

        this.setState({
          sequence: [...this.state.sequence, newItem]
        });
      } else {
        // TODO: start handling button press sequence
      }
    }
  }

  get newSequenceItem() {
    return Math.floor(Math.random() * 4);
  }

  get ctrlButtonClickHandler() {
    if (this.state.playing) {
      return this.handleReset;
    } else {
      return this.handleStart;
    }
  }

  render () {
    return (
      <div className="SimonGame">
        <SimonControls count={this.state.sequence.length} strict={this.state.strictMode}
          playing={this.state.playing}
          onStrictChange={this.handleStrictModeChange}
          onBtnClick={this.ctrlButtonClickHandler} />

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
