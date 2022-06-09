/** @format */

import styles from './styles';
import { statusList } from '../../constants/const';
import TaskList from '../../components/taskList/TaskList';
import TaskForm from '../../components/taskForm/TaskForm';
import { Add as AddIcon } from '@material-ui/icons';
import { Component } from 'react';
import { withStyles, Grid, Button } from '@material-ui/core';
import checkTypes from 'prop-types';

const taskList = [
  {
    id: 1,
    title: 'Read book',
    desc: 'Read material ui book',
    status: 1,
  },
  {
    id: 2,
    title: 'Play football',
    desc: 'with my friend',
    status: 2,
  },
  {
    id: 3,
    title: 'Play game',
    desc: '',
    status: 0,
  },
];

class TaskBoard extends Component {
  state = {
    isOpen: false,
  };

  renderBoard = () => {
    let xhtml = null;

    xhtml = (
      <Grid
        container
        spacing={2}>
        {statusList.map(status => {
          const { value } = status;
          const filterdTask = taskList.filter(item => item.status === value);

          return (
            <TaskList
              key={value}
              status={status}
              filterdTask={filterdTask}
            />
          );
        })}
      </Grid>
    );
    return xhtml;
  };

  renderForm = () => {
    const { isOpen } = this.state;
    return (
      <TaskForm
        isOpen={isOpen}
        handleClose={this.handleClose}
        handleSubmit={this.handleSubmit}
      />
    );
  };

  handleOpen = () => {
    this.setState({ isOpen: true });
  };

  handleClose = () => {
    this.setState({ isOpen: false });
  };

  handleSubmit = () => {};

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.taskBoard}>
        <Button
          variant='contained'
          color='primary'
          className={classes.btn}
          onClick={this.handleOpen}>
          <AddIcon /> Add a work
        </Button>

        {/* 1m59ss */}
        {this.renderForm()}
        {this.renderBoard()}
      </div>
    );
  }
}

TaskBoard.propTypes = {
  classes: checkTypes.object,
};

export default withStyles(styles)(TaskBoard);
