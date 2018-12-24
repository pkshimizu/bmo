import React from 'react';
import {TextField} from '@material-ui/core'

export default () => (
  <div>
    <TextField multiline variant="outlined" fullWidth InputProps={{readOnly: true}} />
  </div>
);
