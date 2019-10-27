import React, { Suspense, useState } from 'react';
import { renderRoutes } from 'react-router-config';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { LinearProgress } from '@material-ui/core';

import { MenuBar } from './components';
import route from '../routes';


const useStyles = makeStyles(() => ({
  root: {
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden'
  },
  container: {
    display: 'flex',
    flex: '1 1 auto',
    overflow: 'hidden'
  },
  menuBar: {
    zIndex: 3,
    width: 270,
    minWidth: 270,
    flex: '0 0 auto'
  },
  content: {
    overflowY: 'auto',
    flex: '1 1 auto'
  }
}));

const NewOrganization = () => {
  //const { route } = props;

  const classes = useStyles();
  const [openMenuBarMobile, setOpenMenuBarMobile] = useState(false);

  const handleMenuBarMobileOpen = () => {
    setOpenMenuBarMobile(true);
  };

  const handleMenuBarMobileClose = () => {
    setOpenMenuBarMobile(false);
  };

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <MenuBar
          className={classes.menuBar}
          onMobileClose={handleMenuBarMobileClose}
          openMobile={openMenuBarMobile}
        />
        {/* <NavBarDark
          className={classes.navBar}
          onMobileClose={handleNavBarMobileClose}
          openMobile={openNavBarMobile}
        /> */}
        <main className={classes.content}>
          <Suspense fallback={<LinearProgress />}>
            {renderRoutes(route[0].routes)}
          </Suspense>
        </main>
      </div>
    </div>
  );
};

NewOrganization.propTypes = {
  route: PropTypes.object
};

export default NewOrganization;
