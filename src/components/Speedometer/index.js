// Write your code here

import {Component} from 'react'

import './index.css'

class Speedometer extends Component {
  state = {
    count: 0,
  }

  onIncrementCount = () => {
    const {count} = this.state

    if (count < 200) {
      this.setState(prevState => ({count: prevState.count + 10}))
    }
  }

  onDecrementCount = () => {
    const {count} = this.state

    if (count > 0) {
      this.setState(prevState => ({count: prevState.count - 10}))
    }
  }

  render() {
    const {count} = this.state

    return (
      <div className="bg">
        <h1 className="head">SPEEDOMETER</h1>
        <img
          className="img"
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          alt="speedometer"
        />
        <h1 className="sub-head">
          Speed is <span>{count}mph</span>
        </h1>
        <p className="info">Min Limit is 0mph, Max Limit is 200mph</p>
        <div className="btn-cont">
          <button
            className="btn-1"
            type="button"
            onClick={this.onIncrementCount}
          >
            Accelerate
          </button>
          <button
            className="btn-2"
            type="button"
            onClick={this.onDecrementCount}
          >
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
