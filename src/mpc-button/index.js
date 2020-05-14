import React from "react";
import "./mpc-styles.css";
export default class MPCButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pressed: props.pressed
    };
  }
  handleButtonPress() {
    console.log("pressedbutton", this.props.pressed);
    this.setState({
      pressedButton: this.props.pressed
    });
  }
  render() {
    console.log("mpc", this.props);
    return (
      <button
        onClick={this.props.handleButtonPress}
        // onClick={this.props.onClick}
        className="mpc-button"
        // pressed="this.state.pressed"
      >
        {/* {this.state.pressed && <div className="mpc-button-dot" />} */}
        {this.props.pressed && <div className="mpc-button-dot" />}
        {/* {this.props.presetModeValue === "preset 1"} */}
      </button>
    );
  }
}
