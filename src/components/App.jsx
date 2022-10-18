import React from 'react';
import { AppEl } from './App.styled';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';

export class App extends React.Component {
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
    return (
      <AppEl>
        <Section title="Please leave feedback">
          <FeedbackOptions
            onClickGood={this.handleClickGood}
            onClickNeutral={this.handleClickNeutral}
            onClickBad={this.handleClickBad}
          />
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedback(this.state)}
            positivePercentage={
              this.countPositiveFeedbackPercentage(this.state)
                ? this.countPositiveFeedbackPercentage(this.state)
                : 0
            }
          />
        </Section>
      </AppEl>
    );
  }
}
