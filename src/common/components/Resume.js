import React, { Component, PropTypes } from 'react';

var numPage = null;
var pageNumber = 1;

class Resume extends Component {

  // state = {
  //   numPages: null,
  //   pageNumber: 1,
  // }


  onDocumentLoad({ newNumPages }) {
    // this.setState({ numPages });
    numPages = newNumPages;
  }

  render() {
    return (
      <div>
        <p style={{ textAlign: "center" }}>To download a copy, options are below.</p>
        <iframe src="https://onedrive.live.com/embed?cid=DDBC24E3C0D79D42&resid=DDBC24E3C0D79D42%21627700&authkey=AE1qpC2-Lyl-8cY&em=2" width={"750px"} height={"1050px"} frameborder="0" scrolling="no"></iframe>
      </div>
    );
  }
}

export default Resume;
