import React, {
  memo,
  useRef,
  useState,
  useCallback,
  useLayoutEffect
} from 'react';
import { Grid, Responsive } from 'semantic-ui-react';
import throttle from 'lodash.throttle';

import {
  getMonthType,
  scrollToComponent,
  getFilteredPersons
} from '../../helpers';
import { CalendarTable, CalendarColumn, TablePlaceholder } from './components';
import {
  ButtonTop,
  CalendarList,
  TableWrapper,
  CalendarWrapper
} from './styled';

const Calendar = memo(props => {
  const {
    months,
    persons,
    isLoading,
    activeMonthIndex,
    setActiveMonthIndex
  } = props;

  const [isButtonVisible, setIsButtonVisible] = useState(false);

  const listRef = useRef();
  const tableRef = useRef();

  const monthType = getMonthType(activeMonthIndex, persons);
  const filteredPersons = getFilteredPersons(activeMonthIndex, persons);

  const scrollToTop = useCallback(() => window.scrollTo(0, 0), []);
  const scrollToTable = useCallback(() => scrollToComponent(tableRef), []);

  const handleButtonClick = useCallback(
    () =>
      listRef.current.getBoundingClientRect().top > -1
        ? scrollToTop()
        : scrollToComponent(listRef),
    [listRef]
  );

  const handleScroll = throttle(
    () =>
      window.scrollY > 100
        ? setIsButtonVisible(true)
        : setIsButtonVisible(false),
    300
  );

  useLayoutEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <CalendarWrapper vertical>
      <Grid columns={4} stackable>
        <Grid.Column>
          <CalendarList ref={listRef}>
            {months.map((month, index) => (
              <CalendarColumn
                key={month}
                type={getMonthType(index, persons)}
                index={index}
                title={month}
                scrollToTable={scrollToTable}
                setActiveMonthIndex={setActiveMonthIndex}
              />
            ))}
          </CalendarList>
        </Grid.Column>
        <Grid.Column width={12}>
          <TableWrapper ref={tableRef}>
            {isLoading ? (
              <TablePlaceholder />
            ) : (
              <CalendarTable
                type={monthType}
                title={months[activeMonthIndex]}
                filteredPersons={filteredPersons}
              />
            )}
          </TableWrapper>
        </Grid.Column>
      </Grid>
      <Responsive maxWidth={767}>
        {isButtonVisible && (
          <ButtonTop circular icon="chevron up" onClick={handleButtonClick} />
        )}
      </Responsive>
    </CalendarWrapper>
  );
});

export default Calendar;
