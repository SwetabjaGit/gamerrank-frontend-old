import React, { useState, useRef } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardContent,
  Table,
  TableBody,
  TableCell,
  TableHead,
} from '@material-ui/core';
import MaterialTable from 'material-table';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import CircularProgress from '@material-ui/core/CircularProgress';


const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(2),
    background: '#1C222B',
    width: 'auto'
  },
  title: {
    display: 'flex',
    fontSize: 15,
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
    width: '90%',
    margin: theme.spacing(3),
    backgroundColor: '#273040'
  },
  header: {
    backgroundColor: '#1C222B',
  },
  formControl: {
    minWidth: 120,
    background: '#1C222B'
  },
  selectEmpty: {
  },
  button: {
    minWidth: 150,
  },
  formCell: {
  }
}));

const Staff = props => {
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
        title: 'Role', 
        field: 'role', 
        lookup: {
          1: 'Owner',
          2: 'Admin',
          3: 'Moderator',
          4: 'Bracker Manager'
        },
      }
    ],
    data: [
      {
        ign: 'TeamRNCkush0P',
        role: 1,
      },
      {
        ign: 'TeamRNCgokuFTW',
        role: 2,
      },
      {
        ign: 'TeamRNCniNjA',
        role: 3,
      },
      {
        ign: 'TeamRNCkush0P',
        role: 4,
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
        <CardContent>
          <Typography 
            className={classes.title}
          >
            <Box fontWeight="fontWeightBold">OWNER</Box>&nbsp; creates the organization and can edit anything about the organization. No one can change this role.
          </Typography>
          <Typography 
            className={classes.title}
          >
            <Box fontWeight="fontWeightBold">ADMINS</Box>&nbsp; can do everything the owner can except delete the organization or remove other admins.
          </Typography>
          <Typography 
            className={classes.title}
          >
            <Box fontWeight="fontWeightBold">MODERATORS</Box>&nbsp; can create and edit tournaments for the organization, but cannot make changes to the organization itself.
          </Typography>
          <Typography 
            className={classes.title}
          >
            <Box fontWeight="fontWeightBold">BRACKET MANAGERS</Box>&nbsp; can report and resolve disputes by changing scores in the organization's tournaments.
          </Typography>
        </CardContent>

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

Staff.propTypes = {
  className: PropTypes.string,
};

export default Staff;


/* const [role, setRole] = useState('');
  const [rows, setRows] = useState(INITIAL_STATE);
  const inputLabel = useRef(null);

  const createData = (username, role) => {
    return { username, role };
  };
  const addRows = () => {
    setRows({
      ...rows,
      data: [
        ...rows.data,
        createData('NewUser', 'NewRole')
      ]
    });
    console.log(rows.data);
  };
  const handleChange = event => {
    setRole(event.target.value);
  };
  const handleClick = () => {
    rows.push(createData('NewUser', 'NewRole'));
    console.log(rows);
  };

  <Table
    aria-label="simple table"
    className={classes.table}
  >
    <TableHead className={classes.header}>
      <TableRow>
        <TableCell>Username</TableCell>
        <TableCell>Role</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {rows.data.map(row => (
        <TableRow key={row.username}>
          <TableCell>{row.username}</TableCell>
          <TableCell>{row.role}</TableCell>
        </TableRow>
      ))}
      <TableRow key={'input'}>
        <TableCell>
          <TextField
            InputProps={{
              className: classes.multilineColor,
              classes: {
                notchedOutline: classes.notchedOutline,
              }
            }}
            className={classes.textField}
            id="outlined-dense"
            margin="dense"
            placeholder="Your Email Id"
            variant="outlined"
          />
        </TableCell>
        <TableCell className={classes.formCell}>
          <FormControl 
            className={classes.formControl}
            margin="dense"
            variant="outlined"
          >
            <InputLabel
              id="demo-simple-select-outlined-label"
              ref={inputLabel}
            >
              Role
            </InputLabel>
            <Select
              id="demo-simple-select-outlined"
              native
              onChange={handleChange}
              value={role}
            >
              <option value={1}>Owner</option>
              <option value={2}>Admin</option>
              <option value={3}>Moderator</option>
              <option value={4}>Bracket Manager</option>
            </Select>
            <Button
              className={classes.button}
              onClick={addRows}
              variant="outlined"
            >
              + Add
            </Button>
          </FormControl>
        </TableCell>
      </TableRow>
    </TableBody>
  </Table> */