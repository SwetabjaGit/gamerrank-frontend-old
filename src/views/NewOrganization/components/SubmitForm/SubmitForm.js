import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import {
  Avatar,
  Divider,
  IconButton,
  Input,
  Paper,
  Tooltip
} from '@material-ui/core';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: '#1C222B',
    display: 'flex',
    flexDirection: 'column'
  },
  paper: {
    flexGrow: 1,
    marginLeft: theme.spacing(2),
    padding: theme.spacing(0.5, 2)
  },
  input: {
    width: '100%'
  },
  divider: {
    width: '100%',
    height: 1,
    backgroundColor: '#fff'
  },
  fileInput: {
    display: 'none'
  },
  button1: {
    backgroundColor: '#115293',
    margin: theme.spacing(1),
  },
  button2: {
    margin: theme.spacing(1),
  },
  buttonBox: {
    padding: 7
  }
}));

const SubmitForm = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  const fileInputRef = useRef(null);

  const [value, setValue] = useState('');

  const sender = {
    avatar: '/images/avatars/avatar_11.png'
  };

  const handleChange = event => {
    event.persist();

    setValue(event.target.value);
  };

  const handleAttach = () => {
    fileInputRef.current.click();
  };

  return (
    <div
      {...rest}
      className={clsx(classes.root, className)}
    >
      <Divider className={classes.divider} />
      <div className={classes.buttonBox}>
        <Button 
          className={classes.button1} 
          color="primary" 
          variant="contained"
        >
          Back
        </Button>
        <Button 
          className={classes.button2} 
          color="secondary" 
          variant="contained"
        >
          Next
        </Button>
      </div>
    </div>
  );
};

SubmitForm.propTypes = {
  className: PropTypes.string
};

export default SubmitForm;
