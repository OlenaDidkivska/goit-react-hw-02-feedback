import { Notification } from 'components/Notification/Notification';
import PropTypes from 'prop-types';
import {
  StatisticsTitle,
  StatisticsList,
  StatisticsItem,
} from './Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <>
      <StatisticsTitle>Statistics</StatisticsTitle>
      <StatisticsList>
        {total === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <div>
            <StatisticsItem>
              Good: <span>{good}</span>
            </StatisticsItem>
            <StatisticsItem>
              Neutral: <span>{neutral}</span>
            </StatisticsItem>
            <StatisticsItem>
              Bad: <span>{bad}</span>
            </StatisticsItem>
            <StatisticsItem>
              Total: <span>{total}</span>
            </StatisticsItem>
            <StatisticsItem>
              Positive feedback:
              <span> {positivePercentage}%</span>
            </StatisticsItem>
          </div>
        )}
      </StatisticsList>
    </>
  );
};

Statistics.prototype = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
