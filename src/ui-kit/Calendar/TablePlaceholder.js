import React, { memo } from 'react';
import { Table, Dimmer, Segment, Placeholder } from 'semantic-ui-react';

import { EclipseLoader } from '../EclipseLoader';

export const TablePlaceholder = memo(() => (
  <Dimmer.Dimmable as={Segment} dimmed>
    <Dimmer active inverted>
      <EclipseLoader />
    </Dimmer>
    <Table columns={4} basic="very">
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell width={1}>#</Table.HeaderCell>
          <Table.HeaderCell width={5}>First Name</Table.HeaderCell>
          <Table.HeaderCell width={5}>Last Name</Table.HeaderCell>
          <Table.HeaderCell width={5}>Day of Birthday</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {[...new Set('Add a little magic!')].map(element => (
          <Table.Row key={element}>
            <Table.Cell width={1}>
              <Placeholder>
                <Placeholder.Line />
              </Placeholder>
            </Table.Cell>
            <Table.Cell width={5}>
              <Placeholder>
                <Placeholder.Line />
              </Placeholder>
            </Table.Cell>
            <Table.Cell width={5}>
              <Placeholder>
                <Placeholder.Line />
              </Placeholder>
            </Table.Cell>
            <Table.Cell width={5}>
              <Placeholder>
                <Placeholder.Line />
              </Placeholder>
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  </Dimmer.Dimmable>
));
