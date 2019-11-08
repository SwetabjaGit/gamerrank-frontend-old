import React, { Fragment, useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/styles';
import { Drawer, Divider, Paper, Avatar, Typography, colors } from '@material-ui/core';
import { Hidden } from '@material-ui/core';



import useRouter from 'utils/useRouter';
import { Navigation } from 'components';
import MenuBarConfig from './menubarConfig';

const useStyles = makeStyles(theme => ({
  root: {
    background: '#1D2632',
    height: '100%',
    overflowY: 'auto'
  },
  content: {
    padding: 0,
  },
  profile: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    minHeight: 'fit-content',
  },
  avatar: {
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    width: 45,
    height: 45,
  },
  name: {
    color: 'white',
    fontSize: 20
  },
  divider: {
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    backgroundColor: '#29303E'
  },
  navigation: {
    marginTop: theme.spacing(5)
  }
}));

const MenuBar = props => {
  const { openMobile, onMobileClose, className, ...rest } = props;

  const classes = useStyles();
  const router = useRouter();
  const session = useSelector(state => state.session);

  useEffect(() => {
    if (openMobile) {
      onMobileClose && onMobileClose();
    }

  }, [router.location.pathname]);

  const menubarContent = (
    <div className={classes.content}>
      <div className={classes.profile}>
        <Avatar
          alt="Person"
          className={classes.avatar}
          component={RouterLink}
          src={session.user.avatar}
          style={{ borderRadius: 4 }}
          to="/profile/1/timeline"
        />
        <Typography
          className={classes.name}
        >
          ORGANIZE
        </Typography>
        {/* <Typography variant="body2">{session.user.bio}</Typography> */}
      </div>
      <Divider className={classes.divider} />
      <nav className={classes.navigation}>
        {MenuBarConfig.map(list => (
          <Navigation
            component="div"
            key={list.title}
            pages={list.pages}
            title={list.title}
          />
        ))}
      </nav>
    </div>
  );

  return (
    <Fragment>
      <Hidden lgUp>
        <Drawer
          anchor="left"
          onClose={onMobileClose}
          open={openMobile}
          variant="temporary"
        >
          <div
            {...rest}
            className={clsx(classes.root, className)}
          >
            {menubarContent}
          </div>
        </Drawer>
      </Hidden>
      <Hidden mdDown>
        <Paper
          {...rest}
          className={clsx(classes.root, className)}
          elevation={1}
          square
        >
          {menubarContent}
        </Paper>
      </Hidden>
    </Fragment>
  );
};

MenuBar.propTypes = {
  className: PropTypes.string,
  onMobileClose: PropTypes.func,
  openMobile: PropTypes.bool
};

export default MenuBar;
