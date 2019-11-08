import React, { useState, useRef } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import MaterialTable from 'material-table';
import {
  Card,
  CardContent,
  TextField,
  InputAdornment,
  Icon,
} from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';


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
  table: {
    width: '100%',
    margin: theme.spacing(3),
  },
  imageIcon: {
    height: '100%'
  },
  iconRoot: {
    textAlign: 'center'
  }
}));

const Roster = props => {
  const { className, ...rest } = props;
  const session = useSelector(state => state.session);
  const classes = useStyles();

  const INITIAL_STATE = {
    columns: [
      {
        title: 'IN GAME NAME (IGN)', 
        field: 'ign'
      },
      { 
        title: 'PLAYER ID', 
        field: 'playerid', 
        initialEditValue: '534201915',
      },
      { 
        title: 'DISCORD TAG', 
        field: 'discordtag', 
        initialEditValue: '@GòkuFTW#4866',
      },
      { 
        title: 'Role', 
        field: 'role', 
        lookup: { 
          1: 'Rusher',
          2: 'Sniper', 
          3: 'Strategic', 
          4: 'Support', 
          5: 'Driving' 
        },
      },
      { 
        title: 'Position', 
        field: 'position',
        lookup: {
          1: 'Leader',
          2: 'Co-Leader',
          3: 'Elite',
          4: 'Member'
        },
      }
    ],
    data: [
      {
        ign: 'TeamRNCkush0P', 
        playerid: '534201915',
        discordtag: '@TeamRNC Kush0P#0311',
        role: 1,
        position: 1
      },
      {
        ign: 'TeamRNCgokuFTW', 
        playerid: '581847784',
        discordtag: '@GòkuFTW#4866',
        role: 1,
        position: 2
      },
      {
        ign: 'TeamRNCniNjA', 
        playerid: '598966555',
        discordtag: '@TeamRNCniNjA#5366',
        role: 2,
        position: 4
      },
      {
        ign: 'TeamRNCtroy', 
        playerid: '549601476',
        discordtag: '@Troy#3050',
        role: 4,
        position: 4
      },
    ]
  };
  
  const [state, setState] = useState(INITIAL_STATE);

  return (
    <div>

      <Card
        {...rest}
        className={clsx(classes.root, className)}
        elevation={0}
      >
        <MaterialTable
          columns={state.columns}
          data={state.data}
          editable={{
            onRowAdd: newData =>
              new Promise(resolve => {
                setTimeout(() => {
                  resolve();
                  setState(prevState => {
                    const data = [...prevState.data];
                    data.push(newData);
                    return { ...prevState, data };
                  });
                }, 600);
              }),
            onRowUpdate: (newData, oldData) =>
              new Promise(resolve => {
                setTimeout(() => {
                  resolve();
                  if (oldData) {
                    setState(prevState => {
                      const data = [...prevState.data];
                      data[data.indexOf(oldData)] = newData;
                      return { ...prevState, data };
                    });
                  }
                }, 600);
              }),
            onRowDelete: oldData =>
              new Promise(resolve => {
                setTimeout(() => {
                  resolve();
                  setState(prevState => {
                    const data = [...prevState.data];
                    data.splice(data.indexOf(oldData), 1);
                    return { ...prevState, data };
                  });
                }, 600);
              }),
          }}
          options={{
            headerStyle: {
              backgroundColor: '#151B27',
              color: '#FFF'
            }
          }}
          style={{
            backgroundColor: '#151B27',
            color: '#FFF',
            margin: 30
          }}
          title="Editable Example"
        />
      </Card>

    </div>
    
  );
};

Roster.propTypes = {
  className: PropTypes.string,
};

export default Roster;