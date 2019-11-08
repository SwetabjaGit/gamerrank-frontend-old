/* eslint-disable react/no-multi-comp */
/* eslint-disable react/prefer-es6-class */
import React, { useState, useRef } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles, withStyles } from '@material-ui/styles';
import {
  Card,
  CardContent,
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  ExpansionPanelActions
} from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { RichEditor } from 'components';


const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(2),
    background: '#1C222B',
  },
  expPanel: {
    background: '#1C222B',
    '&:before': {
      display: 'none',
    },
  },
  card: {
    minWidth: 275
  },
  title: {
    fontSize: 14,
    color: 'white'
  },
  richEditor: {
    width: '100%'
  }
}));


const Description = props => {
  const { className, ...rest } = props;
  const classes = useStyles();
  const session = useSelector(state => state.session);

  return (
    <div>

      <Card
        {...rest}
        className={clsx(classes.root, className)}
        elevation={0}
      >
        <CardContent >

          <ExpansionPanel className={classes.expPanel}>
            <ExpansionPanelSummary
              aria-controls="panel1a-content"
              expandIcon={<ExpandMoreIcon />}
              id="panel1a-header"
            >
              <Typography className={classes.title} >
                About The Clan
              </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <RichEditor
                className={classes.richEditor}
                placeholder="About the Clan" 
              />
            </ExpansionPanelDetails>
          </ExpansionPanel>

          <ExpansionPanel className={classes.expPanel}>
            <ExpansionPanelSummary
              aria-controls="panel1a-content"
              expandIcon={<ExpandMoreIcon />}
              id="panel1a-header"
            >
              <Typography className={classes.title} >
                Requirements
              </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <RichEditor
                className={classes.richEditor} 
                placeholder="Requirements"
              />
            </ExpansionPanelDetails>
          </ExpansionPanel>

          <ExpansionPanel className={classes.expPanel}>
            <ExpansionPanelSummary
              aria-controls="panel1a-content"
              expandIcon={<ExpandMoreIcon />}
              id="panel1a-header"
            >
              <Typography className={classes.title} >
                Rules
              </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <RichEditor
                className={classes.richEditor}
                placeholder="Rules" 
              />
            </ExpansionPanelDetails>
          </ExpansionPanel>

          <ExpansionPanel className={classes.expPanel}>
            <ExpansionPanelSummary
              aria-controls="panel1a-content"
              expandIcon={<ExpandMoreIcon />}
              id="panel1a-header"
            >
              <Typography className={classes.title} >
                Notable Achievements
              </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <RichEditor
                className={classes.richEditor}
                placeholder="Notable Achievements" 
              />
            </ExpansionPanelDetails>
          </ExpansionPanel>

          <ExpansionPanel className={classes.expPanel}>
            <ExpansionPanelSummary
              aria-controls="panel1a-content"
              expandIcon={<ExpandMoreIcon />}
              id="panel1a-header"
            >
              <Typography className={classes.title} >
                What We Provide
              </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <RichEditor
                className={classes.richEditor}
                placeholder="What We Provide" 
              />
            </ExpansionPanelDetails>
          </ExpansionPanel>

          <ExpansionPanel className={classes.expPanel}>
            <ExpansionPanelSummary
              aria-controls="panel1a-content"
              expandIcon={<ExpandMoreIcon />}
              id="panel1a-header"
            >
              <Typography className={classes.title} >
                Partnership Policy
              </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <RichEditor
                className={classes.richEditor}
                placeholder="Partnership Policy" 
              />
            </ExpansionPanelDetails>
          </ExpansionPanel>

          <ExpansionPanel className={classes.expPanel}>
            <ExpansionPanelSummary
              aria-controls="panel1a-content"
              expandIcon={<ExpandMoreIcon />}
              id="panel1a-header"
            >
              <Typography className={classes.title} >
                Others
              </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <RichEditor
                className={classes.richEditor}
                placeholder="Others" 
              />
            </ExpansionPanelDetails>
          </ExpansionPanel>

        </CardContent>
      </Card>

    </div>
    
  );
};

Description.propTypes = {
  className: PropTypes.string,
  handleFileChange: PropTypes.func
};

export default Description;
