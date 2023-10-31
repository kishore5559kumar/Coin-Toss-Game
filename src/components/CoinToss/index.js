import {Component} from 'react'
import './index.css'

class CoinToss extends Component {
  state = {heads: 0, tails: 0, tossNumber: true}

  render() {
    const {heads, tails, tossNumber} = this.state

    onclick = () => {
      const tossResult = Math.floor(Math.random() * 2)
      if (tossResult === 0) {
        this.setState({tossNumber: true})
      } else {
        this.setState({tossNumber: false})
      }

      if (tossResult === 0) {
        this.setState(prevState => ({
          heads: prevState.heads + 1,
        }))
      } else {
        this.setState(prevState => ({
          tails: prevState.tails + 1,
        }))
      }
    }

    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="desc">Heads (or) Tails</p>
          {tossNumber ? (
            <img
              src="https://assets.ccbp.in/frontend/react-js/heads-img.png"
              alt="toss result"
              className="resultImage"
            />
          ) : (
            <img
              src="https://assets.ccbp.in/frontend/react-js/tails-img.png"
              alt="toss result"
              className="resultImage"
            />
          )}
          <button type="button" className="coinToss" onClick={this.onclick}>
            Toss Coin
          </button>
          <div className="result-section">
            <p className="result-score">Total:{heads + tails}</p>
            <p className="result-score">Heads:{heads}</p>
            <p className="result-score">Tails:{tails}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
