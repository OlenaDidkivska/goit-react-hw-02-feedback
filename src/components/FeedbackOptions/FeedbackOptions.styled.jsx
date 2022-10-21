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
  background-color: #38ed83;
  padding: 5px 10px;
  border: none;
  border-radius: 20px;
  font-weight: 600;
  text-transform: capitalize;

  &:hover {
    background-color: #00c518;
    transform: scale(1.1);
    color: #ffffff;
    font-weight: 400;
  }
`;
