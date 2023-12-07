import React from 'react';
import Section from './Section/Section';
import Statistics from './Statistics/Statistics';
import { FeedBackOptions } from './FeedBackOptions/FeedbackOptions';

export class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  handlerClick = e => {
    const { name } = e.currentTarget;

    switch (name) {
      case 'good':
        this.setState(prevState => ({ good: prevState.good + 1 }));
        break;
      case 'neutral':
        this.setState(prevState => ({ neutral: prevState.neutral + 1 }));
        break;
      case 'bad':
        this.setState(prevState => ({ bad: prevState.bad + 1 }));
        break;
      default:
    }
  };
  countTotalFeedback() {
    return this.state.good + this.state.neutral + this.state.bad;
  }
  countPositiveFeedbackPercentage() {
    if (this.countTotalFeedback() > 0) {
      const result = (this.state.good / this.countTotalFeedback()) * 100;
      return result.toFixed(0) + '%';
    }
  }
  render() {
    const { good, neutral, bad } = this.state;
    const totalFeedback = this.countTotalFeedback();
    const positiveFeedback = this.countPositiveFeedbackPercentage();
    const options = ['Good', 'Neutral', 'Bad'];

    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'flex-start',
          padding: '50px',
          flexDirection: 'column',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <Section title="Please leave feedback">
          <FeedBackOptions
            options={options}
            onLeaveFeedback={this.handlerClick}
          />
        </Section>
        <Section title="Statistics">
          {!totalFeedback ? (
            <h5>Not feedback given</h5>
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={totalFeedback}
              positivePercentage={positiveFeedback}
            />
          )}
        </Section>
      </div>
    );
  }
}
