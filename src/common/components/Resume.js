import React, { Component, PropTypes } from 'react';
import { Document, Page } from 'react-pdf';

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
        {/* <Document
          file="AmanIbrahim_Resume_09-17.pdf"
          onLoadSuccess={this.onDocumentLoad}
        >
          <Page pageNumber={pageNumber} />
        </Document> */}
        <iframe src="https://onedrive.live.com/embed?cid=DDBC24E3C0D79D42&resid=DDBC24E3C0D79D42%21622281&authkey=AJ4C87GxJlECSw0&em=2" width={"800px"} height={"800px"} frameborder="0" scrolling="no"></iframe>
      </div>
    );
  }
}

export default Resume;
