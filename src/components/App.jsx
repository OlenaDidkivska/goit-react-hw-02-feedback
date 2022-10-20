import React, { Component } from 'react';
import { AppEl } from './App.styled';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';

export class App extends Component {
  state = { good: 0, neutral: 0, bad: 0 };

  handleClickGood = () => {
    this.setState(prevState => ({
      good: prevState.good + 1,
    }));
  };
  handleClickNeutral = () => {
    this.setState(prevState => ({
      neutral: prevState.neutral + 1,
    }));
  };
  handleClickBad = () => {
    this.setState(prevState => ({
      bad: prevState.bad + 1,
    }));
  };

  countTotalFeedback = ({ good, neutral, bad }) => {
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage({ good, neutral, bad }) {
    return Math.round((good / (good + neutral + bad)) * 100);
  }

  render() {
    const {
      handleClickGood,
      handleClickNeutral,
      handleClickBad,
      countTotalFeedback,
      countPositiveFeedbackPercentage,
    } = this;
    const { good, neutral, bad } = this.state;
    return (
      <AppEl>
        <Section title="Please leave feedback">
          <FeedbackOptions
            onClickGood={handleClickGood}
            onClickNeutral={handleClickNeutral}
            onClickBad={handleClickBad}
          />
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback(this.state)}
            positivePercentage={
              countPositiveFeedbackPercentage(this.state)
                ? countPositiveFeedbackPercentage(this.state)
                : 0
            }
          />
        </Section>
      </AppEl>
    );
  }
}
