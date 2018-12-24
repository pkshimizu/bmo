import React from 'react';
import {List, ListItem, ListSubheader, TextField} from '@material-ui/core'

export default () => (
  <div>
    <TextField variant="outlined" label="Search" fullWidth />
    <List subheader={<ListSubheader>Memos (Last 100 items)</ListSubheader>}>
      <ListItem button>
        memo#1
      </ListItem>
    </List>
  </div>
);
