import React, { memo } from 'react';
import { Divider, Header, Segment, Table } from 'semantic-ui-react';
import { getBirthday } from '../../helpers';

const TableRow = ({ person, index }) => {
  const { firstName, lastName, dob } = person;

  return (
    <Table.Row>
      <Table.Cell width={1}>{index + 1}</Table.Cell>
      <Table.Cell width={5}>{firstName}</Table.Cell>
      <Table.Cell width={5}>{lastName}</Table.Cell>
      <Table.Cell width={5}>{getBirthday(dob)}</Table.Cell>
    </Table.Row>
  );
};

export const CalendarTable = memo(({ type, title, filteredPersons }) => (
  <Segment color={type} raised>
    <Header as="h3" color={type}>
      {title.toUpperCase()}
    </Header>
    <Divider color={type} />
    <Table columns={4} basic="very" unstackable>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell width={1}>#</Table.HeaderCell>
          <Table.HeaderCell width={5}>First Name</Table.HeaderCell>
          <Table.HeaderCell width={5}>Last Name</Table.HeaderCell>
          <Table.HeaderCell width={5}>Day of Birthday</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {filteredPersons.map((person, index) => (
          <TableRow key={person.id} person={person} index={index} />
        ))}
      </Table.Body>
    </Table>
  </Segment>
));
