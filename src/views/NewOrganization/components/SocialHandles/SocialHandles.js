/* eslint-disable react/no-multi-comp */
/* eslint-disable react/prefer-es6-class */
import React, { useState, useRef } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardContent,
  TextField,
  InputAdornment,
  Icon
} from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';
import YouTubeIcon from '@material-ui/icons/YouTube';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import EmailIcon from '@material-ui/icons/Email';
import { Label } from 'components';


const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(2),
    background: '#1C222B',
  },
  title: {
    fontSize: 14,
    color: 'white'
  },
  textField: {
    marginTop: 10,
    marginBottom: 10,
    width: '100%',
  },
  multilineColor:{
    color:'white'
  },
  notchedOutline: {
    borderColor: '#3F3F50',
    borderWidth: 1,
    '&:hover': {
      borderColor: '#3F3F50',
      borderWidth: 1
    }
  },
  imageIcon: {
    height: '100%'
  },
  iconRoot: {
    textAlign: 'center'
  }
}));

const SocialHandles = props => {
  const { className, ...rest } = props;
  const session = useSelector(state => state.session);
  const classes = useStyles();

  return (
    <div>

      <Card
        {...rest}
        className={clsx(classes.root, className)}
        elevation={0}
      >
        <CardContent>
          <TextField
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Icon classes={{root: classes.iconRoot}}>
                    <img 
                      className={classes.imageIcon} 
                      src={session.user.discordlogo} 
                    />
                  </Icon>
                  <Label>Discord</Label>
                </InputAdornment>
              ),
              className: classes.multilineColor,
              classes: {
                notchedOutline: classes.notchedOutline
              }
            }}
            className={classes.textField}
            id="outlined-normal"
            margin="normal"
            placeholder="Your Discord Username"
            variant="outlined"
          />
          <TextField
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <EmailIcon />
                  <Label>Email</Label>
                </InputAdornment>
              ),
              className: classes.multilineColor,
              classes: {
                notchedOutline: classes.notchedOutline,
              }
            }}
            className={classes.textField}
            id="outlined-normal"
            margin="normal"
            placeholder="Your Email Id"
            variant="outlined"
          />
          <TextField
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <YouTubeIcon />
                  <Label>Youtube</Label>
                </InputAdornment>
              ),
              className: classes.multilineColor,
              classes: {
                notchedOutline: classes.notchedOutline
              }
            }}
            className={classes.textField}
            id="outlined-normal"
            margin="normal"
            placeholder="Your Youtube Username"
            variant="outlined"
          />
          <TextField
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <InstagramIcon />
                  <Label>Instagram</Label>
                </InputAdornment>
              ),
              className: classes.multilineColor,
              classes: {
                notchedOutline: classes.notchedOutline
              }
            }}
            className={classes.textField}
            id="outlined-normal"
            margin="normal"
            placeholder="Your Instagram Username"
            variant="outlined"
          />
          <TextField
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <TwitterIcon />
                  <Label>Twitter</Label>
                </InputAdornment>
              ),
              className: classes.multilineColor,
              classes: {
                notchedOutline: classes.notchedOutline
              }
            }}
            className={classes.textField}
            id="outlined-normal"
            margin="normal"
            placeholder="Your Twitter Username"
            variant="outlined"
          />
          <TextField
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <FacebookIcon />
                  <Label>Facebook</Label>
                </InputAdornment>
              ),
              className: classes.multilineColor,
              classes: {
                notchedOutline: classes.notchedOutline
              }
            }}
            className={classes.textField}
            id="outlined-normal"
            margin="normal"
            placeholder="Your Facebook Username"
            variant="outlined"
          />
          <TextField
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Icon classes={{root: classes.iconRoot}}>
                    <img 
                      className={classes.imageIcon} 
                      src={session.user.nimotvlogo} 
                    />
                  </Icon>
                  <Label>NimoTV</Label>
                </InputAdornment>
              ),
              className: classes.multilineColor,
              classes: {
                notchedOutline: classes.notchedOutline
              }
            }}
            className={classes.textField}
            id="outlined-normal"
            margin="normal"
            placeholder="Your NimoTV Username"
            variant="outlined"
          />
        </CardContent>
      </Card>

    </div>
    
  );
};

SocialHandles.propTypes = {
  className: PropTypes.string,
};

export default SocialHandles;
