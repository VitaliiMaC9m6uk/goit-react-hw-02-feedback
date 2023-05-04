import { Component } from 'react'


class Statistics extends Component {
  
  state = {
    good: 0,
    neutral: 0,
    bad: 0,    
  };  
  handleClick = ({ target: { name } }) => {
    this.setState(prev => ({
      [name]: prev[name] + 1,
    }));
  };
  countTotalFeedback = () => {
   const {good,neutral,bad}=this.state
    return (good+neutral+bad)
  };
  countPositiveFeedbackPercentage = () => {
    return Math.round((100 / Number(this.countTotalFeedback()) * this.state.good)) ? Math.round((100 / Number(this.countTotalFeedback()) * this.state.good)) : 0;
  };
  render() {
    return (
      <div>
        <h2>Please leave feedback</h2>
        <button name="good" onClick={this.handleClick}>
          Good
        </button>
        <button name="neutral" onClick={this.handleClick}>
          Neutral
        </button>
        <button name="bad" onClick={this.handleClick}>
          Bad
        </button>
        <h3>Statistics</h3>
        <ul>
          <li>Good: {this.state.good}</li>
          <li>Neutral: {this.state.neutral}</li>
          <li>Bad: {this.state.bad}</li>
          <li>Total: {this.countTotalFeedback()}</li>
          <li>
            Positive feedback: {this.countPositiveFeedbackPercentage()} %
          </li>
         
        </ul>
      </div>
    );
  }
}

export default Statistics;