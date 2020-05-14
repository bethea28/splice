import React from "react";
import "./pad-styles.css";
import MPCButton from "../mpc-button";

export default class Pads extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pressedButtons: []
    };
  }

  handleButtonPress(arg) {
    console.log("here", arg);
    console.log("pads", this.state);
    // this.setState({ pressedButton: arg });
    let found = this.state.pressedButtons.find(a => a === arg);
    // console.log("found", found);
    if (found) {
      let newArg = this.state.pressedButtons.filter(a => a !== arg);
      this.setState(prevState => ({
        pressedButtons: newArg
      }));
    } else {
      this.setState({ pressedButtons: this.state.pressedButtons.concat(arg) });
    }
  }
  render() {
    console.log("pad start", this.state);
    return (
      <div
        className="pads-container"
        style={{ display: "flex", alignItems: "center" }}
      >
        <h5
          style={{
            textAlign: "right",
            backgroundColor: "red",
            width: 100,
            marginRight: 8
          }}
        >
          {this.props.instrumentName}
        </h5>

        <MPCButton
          handleButtonPress={() => this.handleButtonPress("button1")}
          presetValue={this.props.presetValue}
          presetMode={this.props.presetMode}
          pressed={
            this.props.presetValue === "preset1" ||
            (this.state.pressedButtons.includes("button1") && true)
          }
          // pressed={
          //   this.props.presetValue === "preset 2" ? true : this.state.pressed
          // }
        />
        <MPCButton
          handleButtonPress={() => this.handleButtonPress("button2")}
          presetValue={this.props.presetValue}
          presetMode={this.props.presetMode}
          pressed={this.state.pressedButtons.includes("button2") && true}
          // pressed={
          //   this.props.presetValue === "preset 2" ? true : this.state.pressed
          // }
        />
        <MPCButton
          handleButtonPress={() => this.handleButtonPress("button3")}
          presetValue={this.props.presetValue}
          presetMode={this.props.presetMode}
          pressed={this.state.pressedButtons.includes("button3") && true}
          // pressed={
          //   this.props.presetValue === "preset 2" ? true : this.state.pressed
          // }
        />
        <MPCButton
          handleButtonPress={() => this.handleButtonPress("button4")}
          presetValue={this.props.presetValue}
          presetMode={this.props.presetMode}
          pressed={this.state.pressedButtons.includes("button4") && true}
        />
        <MPCButton
          handleButtonPress={() => this.handleButtonPress("button5")}
          presetValue={this.props.presetValue}
          presetMode={this.props.presetMode}
          pressed={this.state.pressedButtons.includes("button5") && true}
        />
        <MPCButton
          handleButtonPress={() => this.handleButtonPress("button6")}
          presetValue={this.props.presetValue}
          presetMode={this.props.presetMode}
          pressed={this.state.pressedButtons.includes("button6") && true}
        />
        <MPCButton
          handleButtonPress={() => this.handleButtonPress("button7")}
          presetValue={this.props.presetValue}
          presetMode={this.props.presetMode}
          pressed={this.state.pressedButtons.includes("button7") && true}
        />
        <MPCButton
          handleButtonPress={() => this.handleButtonPress("button8")}
          presetValue={this.props.presetValue}
          presetMode={this.props.presetMode}
          pressed={this.state.pressedButtons.includes("button8") && true}
        />
      </div>
    );
  }
}
