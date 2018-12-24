import React from 'react';
import {Grid} from '@material-ui/core';
import './App.css';
import Sidebar from './components/sidebar';
import Editor from './components/editor';
import Viewer from './components/viewer';

export default () => (
  <div style={{padding: "16px"}}>
    <Grid container spacing={16}>
      <Grid item xs={2}>
        <Sidebar />
      </Grid>
      <Grid item xs={5}>
        <Editor />
      </Grid>
      <Grid item xs={5}>
        <Viewer />
      </Grid>
    </Grid>
  </div>
);
