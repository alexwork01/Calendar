import React, {
  memo,
  useCallback,
  useLayoutEffect,
  useRef,
  useState
} from 'react';
import { Grid, Responsive } from 'semantic-ui-react';

import {
  getFilteredPersons,
  getMonthType,
  scrollToComponent
} from '../../helpers';
import { CalendarTable } from './CalendarTable';
import { CalendarColumn } from './CalendarColumn';
import { TablePlaceholder } from './TablePlaceholder';
import {
  ButtonTop,
  CalendarList,
  CalendarWrapper,
  TableWrapper
} from './styled';

const Calendar = memo(props => {
  const {
    months,
    persons,
    isLoading,
    activeMonthIndex,
    setActiveMonthIndex
  } = props;

  const listRef = useRef();
  const tableRef = useRef();

  const monthType = getMonthType(activeMonthIndex, persons);
  const filteredPersons = getFilteredPersons(activeMonthIndex, persons);

  const scrollToTop = useCallback(
    () =>
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      }),
    []
  );
  const scrollToTable = useCallback(() => scrollToComponent(tableRef), []);
  const scrollToMonths = useCallback(() => {
    return listRef.current.getBoundingClientRect().top > 0
      ? scrollToTop()
      : scrollToComponent(listRef);
  }, [listRef]);

  const [isButtonVisible, setIsButtonVisible] = useState(false);

  useLayoutEffect(() => {
    const handleScroll = () => {
      return window.scrollY > 200
        ? setIsButtonVisible(true)
        : setIsButtonVisible(false);
    };

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
          <ButtonTop circular icon="chevron up" onClick={scrollToMonths} />
        )}
      </Responsive>
    </CalendarWrapper>
  );
});

export default Calendar;
