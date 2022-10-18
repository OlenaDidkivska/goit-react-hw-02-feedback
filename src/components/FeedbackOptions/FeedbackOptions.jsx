import PropTypes from 'prop-types';
import {
  FeedbackList,
  FeedbackItem,
  FeedbackButton,
} from './FeedbackOptions.styled';

export const FeedbackOptions = ({
  onClickGood,
  onClickNeutral,
  onClickBad,
}) => {
  return (
    <FeedbackList>
      <FeedbackItem>
        <FeedbackButton type="button" onClick={onClickGood}>
          Good
        </FeedbackButton>
      </FeedbackItem>
      <FeedbackItem>
        <FeedbackButton type="button" onClick={onClickNeutral}>
          Neutral
        </FeedbackButton>
      </FeedbackItem>
      <FeedbackItem>
        <FeedbackButton type="button" onClick={onClickBad}>
          Bad
        </FeedbackButton>
      </FeedbackItem>
    </FeedbackList>
  );
};

FeedbackOptions.prototype = {
  onClickGood: PropTypes.func,
  onClickNeutral: PropTypes.func,
  onClickBad: PropTypes.func,
};
