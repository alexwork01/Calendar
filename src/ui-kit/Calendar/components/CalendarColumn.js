import React, { memo, useCallback } from 'react';

import { MonthTitle, MonthWrapper } from '../styled';

export const CalendarColumn = memo(props => {
  const { type, index, title, scrollToTable, setActiveMonthIndex } = props;

  const handleClick = useCallback(() => {
    setActiveMonthIndex(index);
    scrollToTable();
  }, []);

  return (
    <MonthWrapper type={type} onClick={handleClick}>
      <MonthTitle as="h3" type={type}>
        {title}
      </MonthTitle>
    </MonthWrapper>
  );
});
