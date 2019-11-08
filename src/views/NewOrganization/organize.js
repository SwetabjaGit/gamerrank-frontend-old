import React from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { Tabs, Tab, Divider, colors } from '@material-ui/core';

import { Page } from 'components';
import { Basics, SocialHandles, Description, Roster, Staff, SubmitForm } from './components';
import { maxHeight } from '@material-ui/system';

const useStyles = makeStyles(theme => ({
  root: {
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    backgroundColor: '#151B27',
    minHeight: '100%'
  },
  inner: {
    width: theme.breakpoints.values.xxl,
    maxWidth: '100%',
    margin: '0 auto',
  },
  tabs: {
    marginLeft: theme.spacing(2),
    color: 'white',
  },
  tab: {
    padding: theme.spacing(2.4),
    minWidth: 20,
    maxWidth: 200
  },
  divider: {
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    marginTop: theme.spacing(0.1),
    backgroundColor: '#29303E'
  },
  content: {
    marginTop: theme.spacing(2)
  },
  submitForm: {
    display: 'flex',
    alignItems: 'bottom',
    minWidth: '100%',
    position: 'fixed',
    backgroundColor: '#151B27',
    bottom: theme.spacing(0)
  }
}));

const Organize = props => {
  const { match, history } = props;
  const classes = useStyles();
  const { id, tab } = match.params;

  const handleTabsChange = (event, value) => {
    history.push(value);
  };

  const tabs = [
    { value: 'basics', label: 'Basics' },
    { value: 'description', label: 'Description' },
    { value: 'roster', label: 'Roster' },
    { value: 'socialhandles', label: 'Social Handles' },
    { value: 'staff', label: 'Staff' }
  ];

  if (!tab) {
    return <Redirect to={`/organization/create/${tab}`} />;
  }

  if (!tabs.find(t => t.value === tab)) {
    return <Redirect to="/errors/error-404" />;
  }

  return (
    <Page
      className={classes.root}
      title="Organize"
    >
      {/* <Header /> */}
      <div className={classes.inner}>
        <Tabs
          className={classes.tabs}
          onChange={handleTabsChange}
          scrollButtons="auto"
          value={tab}
          variant="scrollable"
        >
          {tabs.map(tab => (
            <Tab
              className={classes.tab}
              key={tab.value}
              label={tab.label}
              value={tab.value}
            />
          ))}
        </Tabs>
        <Divider className={classes.divider} />
        <div className={classes.content}>
          {tab === 'basics' && <Basics />}
          {tab === 'description' && <Description />}
          {tab === 'roster' && <Roster />}
          {tab === 'socialhandles' && <SocialHandles />}
          {tab === 'staff' && <Staff />}
        </div>
        <SubmitForm className={classes.submitForm}/>
      </div>
    </Page>
  );
};

Organize.propTypes = {
  history: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired
};

export default Organize;
