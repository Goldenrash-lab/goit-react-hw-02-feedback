import React, { Component } from 'react';

export default class Statistics extends Component {
  render() {
    if (!this.props.total) {
      return <h5>Not feedback given</h5>;
    }
    return (
      <div>
        <p>
          Good: <span>{this.props.good}</span>
        </p>
        <p>
          Neutral: <span>{this.props.neutral}</span>
        </p>
        <p>
          Bad: <span>{this.props.bad}</span>
        </p>
        <p>
          Total: <span>{this.props.total}</span>
        </p>
        <p>
          Positive feedback: <span>{this.props.positivePercentage}</span>
        </p>
      </div>
    );
  }
}
