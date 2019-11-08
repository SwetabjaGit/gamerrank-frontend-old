import React, { useRef } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

const FileUpload = props => {

  const { handleFileChange, fileInputRef, handleAttach, imageFile } = props;

  var handleFile = e => {
    var reader = new FileReader();
    var file = e.target.files[0];

    if(!file) return;

    reader.onload = function(img) {
      ReactDOM.findDOMNode(this.refs.in).value = '';
      handleFileChange(img.target.result);
    }.bind(this);
    reader.readAsDataURL(file);
  };

  return (
    <input
      accept="image/*"
      onClick={handleFile}
      ref="in"
      type="file"
    />
  );

};

FileUpload.propTypes = {
  handleFileChange: PropTypes.func
};

export default FileUpload;