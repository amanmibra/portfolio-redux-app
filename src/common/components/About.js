import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Repos from './about/Repos';

import Loader from './layout/Loader';
import Banner from './layout/Banner';

class About extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchReposIfNeeded();
  }

  render () {
    const { results, isFetching, lastUpdated, error } = this.props;
    return (
      <div>

      		{/* <Banner /> */}

      	  <div className="about">

      	  	<h3>About Me</h3>

      	  	<p>I am currently a Duke sophmore majoring in Computer Science and minoring in Electrical & Computer Engineering
              and getting a certificate in Innovation & Entrepreneurship</p>

            <p>My main goal is to gain more experiences in the field of Software Engineering, and find what fits me the best
              before I jump head first into the job market. I plan to do this by gaining internships at innovative
              companies with strong ethics and missions and with the willingness to take risks for the best.</p>

      	  	<h3>About Site</h3>

      	  	<p>This site is a single page web app built with React and Redux. It is Isomorphic (all the code renders on the server and well as the browser) which has the advantage of initially rendering quicker and being indexed by search engines.</p>
      	  	<p><a href="https://github.com/caljrimmer">Callum Rimmer</a> built a similar template site as a simple example of what can be built with React and Redux. I forked it and you can get the code base from <a href="https://github.com/amanmibra/portfolio-redux-app">my github repo</a>.</p>

	      </div>

	      <div className="repos">
	      	<h3><a href="https://github.com/amanmibra?tab=repositories" target="_blank">My GitHub</a> Repos</h3>
	        {isFetching && results.length === 0 &&
	          	<Loader />
	        }
	        {!isFetching && error && results.length === 0 &&
	          <h3 className="post-error">There has been an Error</h3>
	        }
	        {!isFetching && !error && results.length === 0 &&
	          <h3>Empty</h3>
	        }
	        {results.length > 0 &&
	          <div style={{ opacity: isFetching ? 0.5 : 1 }}>
	            <Repos results={results} />
	          </div>
	        }
	      </div>

      </div>
    );
  }
}

About.propTypes = {
  results: PropTypes.array.isRequired,
  error: PropTypes.object.isRequired,
  isFetching: PropTypes.bool.isRequired
};

export default About;
