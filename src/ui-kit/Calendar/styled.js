import styled from 'styled-components';
import { Header, Segment, Button } from 'semantic-ui-react';

export const CalendarWrapper = styled(Segment)`
  padding: 5em 0 !important;
`;

export const MonthWrapper = styled(Button)`
  width: 48%;
  margin: 0 0 0.5em 0 !important;
  padding: 1em 0em !important;
  cursor: pointer;
  border: 1px solid rgba(34, 36, 38, 0.15) !important;
  background: ${props =>
    props.type
      ? props.theme.month[props.type]
      : props.theme.backgroundDefault}!important;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2) !important;
  transition: all 0.225s ease-in-out;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.4) !important;
  }

  @media (min-width: 768px) {
    width: 100%;
  }
`;

export const MonthTitle = styled(Header)`
  font-size: 1.5em;
  text-align: center;
  color: ${props =>
    props.type ? props.theme.textSecondary : props.theme.textDefault};
  transition: all 0.3s ease-in-out;
`;

export const CalendarList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const TableWrapper = styled.div`
  margin: 0;
  padding: 0;
`;

export const ButtonTop = styled(Button)`
  position: fixed;
  bottom: 1em;
  right: 1em;
  z-index: 10;
  box-shadow: 1px 3px 5px rgba(0, 0, 0, 0.4) !important;
`;
