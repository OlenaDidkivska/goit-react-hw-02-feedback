import React, { Component } from 'react';
import { AppEl } from './App.styled';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';

export class App extends Component {
  state = { good: 0, neutral: 0, bad: 0 };

  onLeaveFeedback = option => {
    this.setState(prevState => ({
      [option]: prevState[option] + 1,
    }));
  };

  countTotalFeedback = () => {
    const TotalFeedback = Object.values(this.state);
    return TotalFeedback.reduce((acc, item) => acc + item, 0);
  };

  countPositiveFeedbackPercentage = (good, total) => {
    const positive = Math.round((good / total) * 100) || 0;
    return Number.isNaN(positive) ? 0 : positive;
  };

  render() {
    const {
      onLeaveFeedback,
      countTotalFeedback,
      countPositiveFeedbackPercentage,
    } = this;
    const { good, neutral, bad } = this.state;
    const options = Object.keys(this.state);
    const total = countTotalFeedback();
    const positivePercentage = countPositiveFeedbackPercentage(good, total);
    return (
      <AppEl>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={options}
            onLeaveFeedback={onLeaveFeedback}
          ></FeedbackOptions>
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        </Section>
      </AppEl>
    );
  }
}
