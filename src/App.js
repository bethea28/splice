import React from "react";
import "./app-styles.css";
import PadContainer from "./pad-container";
import ControlPanel from "./control-panel";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      presetMode: false,
      presetValue: ""
    };
  }
  componentDidMount = () => {
    this.setState(prevState => ({
      presetValue: "no preset"
    }));
  };
  handleButtonPress = () => {
    this.setState(prevState => ({
      pressed: !prevState.pressed
    }));
  };

  handleControlPanelChange = event => {
    const { value } = event.target;
    console.log("change", value);
    this.setState({
      presetMode:
        value === "preset 1" || value === "preset 2" || value === "preset 3"
          ? true
          : false,
      presetValue: value
    });
  };
  render() {
    console.log("props", this.props);
    return (
      <div className="app-container">
        <ControlPanel
          onChangePanel={this.handleControlPanelChange}
          // presetValue={this.state.presetValue}
        />
        <div style={{ display: "inline-block", backgroundColor: "yellow" }}>
          <PadContainer
            presetValue={this.state.presetValue}
            presetMode={this.state.presetMode}
            // pressed={this.state.pressed}
            instrumentName="KICK"
          />
          <PadContainer
            presetValue={this.state.presetValue}
            presetMode={this.state.presetMode}
            // pressed={this.state.pressed}
            instrumentName="SNARE"
          />
          {/* <PadContainer
            presetMode={this.state.presetMode}
            // onClick={this.handleButtonPress}
            // pressed={this.state.pressed}
            instrumentName="SNARE"
          /> */}
          {/* <PadContainer instrumentName="OPEN HAT" />
          <PadContainer instrumentName="CLOSED HAT" /> */}
        </div>
      </div>
    );
  }
}
