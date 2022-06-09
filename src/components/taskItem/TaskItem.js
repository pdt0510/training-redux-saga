import styles from './styles';
import React, { Component } from 'react';
import { Edit as EditIcon, Delete as DeleteIcon } from '@material-ui/icons';

import {
  withStyles,
  Grid,
  Card,
  CardActions,
  CardContent,
  Typography,
  Fab,
  Icon,
} from '@material-ui/core';

class TaskItem extends Component {
  render() {
    const { classes, task, status } = this.props;
    const { id, title, desc } = task;
    const { label } = status;

    return (
      <Card
        key={id}
        className={classes.card}>
        <CardContent>
          <Grid
            container
            justifyContent='space-between'>
            <Grid
              item
              md={8}>
              <Typography component='h2'>{title}</Typography>
            </Grid>
            <Grid
              item
              md={4}>
              <Typography component='h2'>{label}</Typography>
            </Grid>
            <p>{desc}</p>
          </Grid>
        </CardContent>

        <CardActions className={classes.cardActions}>
          <Fab
            color='primary'
            aria-label='Edit'
            size='small'>
            <Icon>
              <EditIcon />
            </Icon>
          </Fab>
          <Fab
            color='secondary'
            aria-label='Del'
            size='small'>
            <Icon>
              <DeleteIcon />
            </Icon>
          </Fab>
        </CardActions>
      </Card>
    );
  }
}

export default withStyles(styles)(TaskItem);
