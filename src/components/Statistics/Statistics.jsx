import { Notification } from 'components/Notification/Notification';
import PropTypes from 'prop-types';
import {
  StatisticsTitle,
  StatisticsItem,
  StatisticsItemName,
  StatisticsItemValue,
} from './Statistics.styled';

export const Statistics = props => {
  return (
    <>
      <StatisticsTitle>Statistics</StatisticsTitle>
      {props.total === 0 ? (
        <Notification message="There is no feedback" />
      ) : (
        <ul>
          {Object.keys(props).map((item, index) => {
            return (
              <StatisticsItem key={index}>
                <StatisticsItemName>
                  {item}:{' '}
                  <StatisticsItemValue>
                    {item !== 'positivePercentage'
                      ? props[item]
                      : `${props[item]}%`}
                  </StatisticsItemValue>
                </StatisticsItemName>
              </StatisticsItem>
            );
          })}
        </ul>
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
