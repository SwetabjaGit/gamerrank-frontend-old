/* eslint-disable react/no-multi-comp */
/* eslint-disable react/prefer-es6-class */
import React, { useState, useRef } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActionArea,
  CardActions,
  TextField,
} from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(2),
    background: '#1C222B',
  },
  input: {
    width: '100%'
  },
  divider: {
    width: 1,
    height: 24
  },
  fileInput: {
    width: '100%',
    height: '100%',
    visibility: 'visible'
  },
  card: {
    minWidth: 275
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
    color: 'white'
  },
  textField: {
    width: '100%',
  },
  actionArea: {
    marginTop: 15
  },
  multilineColor:{
    color:'white'
  },
  logo: {
    width: 150,
    height: 150
  },
  cover: {
    width: '100%',
    height: 650
  }
}));

const Basics = props => {
  const { className, ...rest } = props;

  const classes = useStyles();
  const fileInputRef = useRef(null);
  const session = useSelector(state => state.session);
  const INITIAL_STATE = {
    logoImg: session.user.logoPlaceholder,
    coverImg: session.user.coverPlaceholder,
    savedImg: session.user.logoPlaceholder,
    previewOpen: false,
  };
  const [currentState, setCurrentState] = useState(INITIAL_STATE);

  const handleAttach = () => {
    fileInputRef.current.click();
  };

  const handleFile = (item, e) => {
    console.log('HandleFile Called');
    var reader = new FileReader();
    var file = e.target.files[0];

    if(!file) return;

    reader.onload = function(img) {
      handleFileChange(item, img.target.result);
      console.log(img.target.result);
    }.bind(this);
    reader.readAsDataURL(file);
  };
  
  var handleFileChange = (item, dataURI) => {
    if(item === 'logo'){
      setCurrentState({
        ...currentState,
        logoImg: dataURI,
        savedImg: currentState.savedImg,
        previewOpen: true
      });
    } else if (item  === 'cover'){
      setCurrentState({
        ...currentState,
        coverImg: dataURI,
        savedImg: currentState.savedImg,
        previewOpen: true
      });
    }
  };
  
  var handleSave = dataURI => {
    setCurrentState({
      ...currentState,
      previewOpen: false,
      logoImg: null,
      coverImg: null,
      savedImg: dataURI
    });    
  };
  
  var handleRequestHide = () => {
    setCurrentState({
      ...currentState,
      previewOpen: false
    });
  };

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
            gutterBottom
          >
            Clan Name
          </Typography>
          <TextField
            InputProps={{
              className: classes.multilineColor
            }}
            className={classes.textField}
            id="outlined-dense"
            label="Clan Name"
            margin="dense"
            variant="outlined"
          />
        </CardContent>
      </Card>

      <Card
        {...rest}
        className={clsx(classes.root, className)}
        elevation={0}
      >
        <CardContent>
          <Typography 
            className={classes.title}
            gutterBottom
          >
            Clan Logo
          </Typography>
          <CardActionArea className={classes.actionArea}>
            <CardMedia
              className={classes.logo}
              image={currentState.logoImg}
              title="Logo Placeholder"
            >
              <input
                accept="image/*"
                className={classes.fileInput}
                onChange={e => handleFile('logo', e)}
                ref={fileInputRef}
                type="file"
              />
            </CardMedia>
          </CardActionArea>
        </CardContent>
      </Card>

      <Card
        {...rest}
        className={clsx(classes.root, className)}
        elevation={0}
      >
        <CardContent>
          <Typography 
            className={classes.title}
            gutterBottom
          >
            Header image
          </Typography>
          <CardActionArea className={classes.actionArea}>
            <CardMedia
              className={classes.cover}
              image={currentState.coverImg}
              title="Logo Placeholder"
            >
              <input
                accept="image/*"
                className={classes.fileInput}
                onChange={e => handleFile('cover', e)}
                ref={fileInputRef}
                type="file"
              />
            </CardMedia>
          </CardActionArea>
        </CardContent>  
      </Card>

    </div>
    
  );
};

Basics.propTypes = {
  className: PropTypes.string,
  handleFileChange: PropTypes.func
};

export default Basics;
