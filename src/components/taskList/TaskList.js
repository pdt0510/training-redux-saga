import styles from './styles';
import TaskItem from '../taskItem/TaskItem';
import React, { Component } from 'react';
import { withStyles, Grid, Box } from '@material-ui/core';

class TaskList extends Component {
  render() {
    const { status, filterdTask, classes } = this.props;
    const { value, label } = status;

    return (
      <Grid
        item
        md={4}
        xs={12}>
        <Box
          mt={1}
          mb={1}>
          <div className={classes.status}>{label}</div>
        </Box>
        <div className={classes.wrapperListTask}>
          {filterdTask.map(task => {
            return (
              <TaskItem
                key={value}
                task={task}
                status={status}
              />
            );
          })}
        </div>
      </Grid>
    );
  }
}

export default withStyles(styles)(TaskList);
