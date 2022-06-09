import styles from './styles';
import React, { Component } from 'react';
import {
  withStyles,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from '@material-ui/core';

class TaskForm extends Component {
  render() {
    const { isOpen, handleClose, handleSubmit } = this.props;

    return (
      <Dialog
        open={isOpen}
        onClose={this.handleClose}
        aria-labelledby='form-dialog-title'>
        <DialogTitle id='form-dialog-title'>Add a work</DialogTitle>
        <DialogContent>
          <TextField
            required
            id='standard-required'
            placeholder='work'
          />
          <TextField
            id='standard-textarea'
            placeholder='description'
            multiline
          />
        </DialogContent>
        <DialogActions>
          <Button
            color='secondary'
            variant='contained'
            onClick={handleClose}>
            Cancel
          </Button>
          <Button
            color='primary'
            variant='contained'
            onClick={handleSubmit}>
            Add
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

export default withStyles(styles)(TaskForm);
