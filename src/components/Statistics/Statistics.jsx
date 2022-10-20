import { Notification } from 'components/Notification/Notification';
import PropTypes from 'prop-types';
import {
  StatisticsTitle,
  StatisticsList,
  StatisticsItem,
} from './Statistics.styled';

export const Statistics = props => {
  return (
    <>
      <StatisticsTitle>Statistics</StatisticsTitle>
      {props.total === 0 ? (
        <Notification message="There is no feedback" />
      ) : (
        <StatisticsList>
          {Object.keys(props).map((item, index) => {
            return (
              <StatisticsItem key={index}>
                <p>
                  {item}: <span>{props[item]}</span>
                </p>
              </StatisticsItem>
            );
          })}
        </StatisticsList>
      )}
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
