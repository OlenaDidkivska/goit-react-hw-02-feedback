import PropTypes from 'prop-types';
import {
  FeedbackList,
  FeedbackItem,
  FeedbackButton,
} from './FeedbackOptions.styled';
import { nanoid } from 'nanoid';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <FeedbackList>
      {options.map(button => {
        return (
          <FeedbackItem key={nanoid()}>
            <FeedbackButton
              type="button"
              onClick={() => onLeaveFeedback(button)}
            >
              {button}
            </FeedbackButton>
          </FeedbackItem>
        );
      })}
    </FeedbackList>
  );
};

FeedbackOptions.prototype = {
  onClickGood: PropTypes.func,
  onClickNeutral: PropTypes.func,
  onClickBad: PropTypes.func,
};
