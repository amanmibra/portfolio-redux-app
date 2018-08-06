import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Repos from './about/Repos';

import Loader from './layout/Loader';
import DemoSlider from './DemoSlider';

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
          <DemoSlider />
      	  <div className="about">
            <div className="my-face"></div>
            

      	  	<h3>About Me</h3>

      	  	<p>I am currently a Duke junior majoring in Computer Science and minoring in Electrical & Computer Engineering and getting a certificate in Islamic Studies.</p>

            <p>I am from North Carolina, and I have already worked at startups to corporate businesses from New York all the way to San Francisco. I have a great interest in Cloud Computing and I am very experinced in Full Stack development.</p>

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
