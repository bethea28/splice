import React from "react";
import "./control-panel.css";

export default class ControlPanel extends React.Component {
  render() {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-end"
        }}
      >
        <div className="control-stop" />
        <div className="control-play" />
        <div className="control-bpm" />
        <h3 className="control-bpm-title">BPM</h3>
        <select
          onChange={event => {
            this.props.onChangePanel(event);
          }}
          presetValue={this.props.presetValue}
          className="control-sequences"
        >
          <option value="none">NO PRESET</option>
          <option value="preset1">PRESET 1</option>
          <option value="preset2">PRESET 2</option>
          <option value="preset3">PRESET 3</option>
        </select>
      </div>
    );
  }
}
