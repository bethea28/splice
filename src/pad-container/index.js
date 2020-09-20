import React from 'react'
import './pad-styles.css'
import MPCButton from '../mpc-button'

export default class Pads extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      // pressedButtons: [],
      // pressed: false,
      index: '',
      // finalButtons: '',
    }
    console.log('constructor')
  }
  // componentDidMount = () => {
  //   console.log('did  mount')
  //   let final = []
  //   for (let i = 0; i < 8; i++) {
  //     let count = i
  //     final.push(
  //       <MPCButton
  //         handleButtonPress={() => this.handleButtonPress(i)}
  //         // presetValue={this.props.presetValue}
  //         // presetMode={this.props.presetMode}
  //         pressed={i === this.state.index ? true : false}
  //       />
  //     )
  //   }
  //   this.setState({ finalButtons: final })
  // }
  // componentDidUpdate(prevProps, prevState) {
  //   console.log('did update')
  //   // this.setState({ index: prevState.index })
  // }
  shouldComponentUpdate(nextProps, nextState) {
    console.log('props', this.props)
    return (
      this.state.index !== nextState.index ||
      this.props.instrumentName !== nextProps.instrumentName
    )
  }
  handleButtonPress(index) {
    // console.log('here', index)

    this.setState({ index })
    // console.log('pads', this.state)
    // this.setState({ pressedButton: arg });
    // let found = this.state.pressedButtons.find((a) => a === arg)
    // console.log("found", found);
    // if (found) {
    //   let newArg = this.state.pressedButtons.filter((a) => a !== arg)
    //   this.setState((prevState) => ({
    //     pressedButtons: newArg,
    //   }))
    // } else {
    //   this.setState({ pressedButtons: this.state.pressedButtons.concat(arg) })
    // }
  }
  render() {
    console.log('pad start', this.state.index)

    let finalButtons = []
    for (let i = 0; i < this.props.padAmount; i++) {
      finalButtons.push(
        <MPCButton
          handleButtonPress={() => this.handleButtonPress(i)}
          // presetValue={this.props.presetValue}
          // presetMode={this.props.presetMode}
          pressed={i === this.state.index ? true : false}
        />
      )
    }
    return (
      <div
        className='pads-container'
        style={{ display: 'flex', alignItems: 'center' }}
      >
        <h5
          style={{
            textAlign: 'right',
            backgroundColor: 'red',
            width: 100,
            marginRight: 8,
          }}
        >
          {this.props.instrumentName}
        </h5>
        {/* {this.props.padAmount.map((a, b) => {
          return (
            <MPCButton
              handleButtonPress={() => this.handleButtonPress(b)}
              presetValue={this.props.presetValue}
              presetMode={this.props.presetMode}
              pressed={b === this.state.index ? true : false}
            />
          )
        })} */}
        {finalButtons}
        {/* <MPCButton
          handleButtonPress={() => this.handleButtonPress("button2")}
          presetValue={this.props.presetValue}
          presetMode={this.props.presetMode}
          pressed={this.state.pressedButtons.includes("button2") && true}
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
        /> */}
      </div>
    )
  }
}
