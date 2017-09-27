import React, { Component } from 'react';

class Banner extends Component {
  downloadOnClick() {
    console.log('test');
  }

  render() {
    return (
	    <div
        // onClick={this.downloadOnClick}
        className="contact-banner">
      		<p>Download Resume Here</p>
      </div>
    );
  }
}

export default Banner;
