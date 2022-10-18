import styled from 'styled-components';

export const FeedbackList = styled.ul`
  height: 80px;
  display: flex;
  align-items: center;
`;

export const FeedbackItem = styled.li`
  margin: 0 5px;
`;

export const FeedbackButton = styled.button`
  background-color: #ffffff;
  padding: 5px 10px;

  &:hover {
    background-color: #3860dd;
  }
`;
