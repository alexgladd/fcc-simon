import React from 'react';
import SimonControls from './SimonControls';
import SimonButton from './SimonButton';
import './SimonGame.css';

const players = {
  human: "human",
  computer: "computer"
};

const buttonTones = [
  new Audio('/sfx/simonSound1.mp3'),
  new Audio('/sfx/simonSound2.mp3'),
  new Audio('/sfx/simonSound3.mp3'),
  new Audio('/sfx/simonSound4.mp3'),
];

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

  simonButtonPress(buttonNumber) {
    // TODO trigger button sound
    console.log("Playing sound for button number " + buttonNumber);
    buttonTones[buttonNumber].play();
  }

  handleStrictModeChange(e) {
    console.log("Strict mode change: " + e.target.checked);
    this.setState({
      strictMode: e.target.checked
    });
  }

  handleButtonClick(buttonNumber) {
    console.log("Button press on " + buttonNumber);
    this.simonButtonPress(buttonNumber);
    // TODO properly handle player button clicks
  }

  handleReset() {
    console.log("Reset");

    // TODO
    this.setState({
      playing: false,
      sequence: [],
      active: players.computer,
      computerIdx: undefined
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
      this.setState({
        sequence: this.updatedSequence,
        computerIdx: 0
      });
    } else if (this.state.playing && this.state.active === players.computer) {
      // handle computer's turn
      if (prevState.active === players.human) {
        // add a new item to the sequence
        this.setState({
          sequence: this.updatedSequence,
          computerIdx: 0
        });
      } else {
        // press the current button
        this.simonButtonPress(this.state.sequence[this.state.computerIdx]);

        // set timeout for next button in the sequence
        setTimeout(() => {
          const nextIdx = this.state.computerIdx + 1;

          if (nextIdx >= this.state.sequence.length) {
            // end of computer turn
            console.log("End of computer's active turn");

            this.setState({
              active: players.human
            });
          } else {
            // move to next button in the sequence
            this.setState({
              computerIdx: nextIdx
            });
          }
        }, 1500);
      }
    }
  }

  get newSequenceItem() {
    return Math.floor(Math.random() * 4);
  }

  get updatedSequence() {
    const newItem = Math.floor(Math.random() * 4);
    console.log("New item in sequence: " + newItem);

    return [...this.state.sequence, newItem];
  }

  get ctrlButtonClickHandler() {
    if (this.state.playing) {
      return this.handleReset;
    } else {
      return this.handleStart;
    }
  }

  get simonButtons() {
    if (this.state.active === players.human) {
      return this.state.buttons.map((val, idx) => {
        return <SimonButton color={val} num={idx}
          onClick={this.handleButtonClick} key={idx.toString()} />;
      });
    } else {
      return this.state.buttons.map((val, idx) => {
        if (idx === this.state.sequence[this.state.computerIdx]) {
          return <SimonButton color={val} num={idx} light={true} key={idx.toString()} />;
        } else {
          return <SimonButton color={val} num={idx} key={idx.toString()} />;
        }
      });
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
          {this.simonButtons}
        </div>
      </div>
    );
  }
}

export default SimonGame;
