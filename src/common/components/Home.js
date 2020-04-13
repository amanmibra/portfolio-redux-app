import React, { Component } from 'react';
import Banner from './layout/Banner';
// import Typed from 'react-typed';

class Home extends Component {

  constructor(props) {
    super(props);
    this.eventToggleSidebar = this.eventToggleSidebar.bind(this);
  }

  eventToggleSidebar(e) {
    e.preventDefault();
    this.props.toggleSidebar(!this.props.layout.sidebarOpen);
  }

  render() {

    return (
      	<div className="posts">
          {/* <Typed
            strings={["Here you can find hardware", "Here you can find software", "Here you can find net tools"]}
            typeSpeed={50}
            backSpeed={50}
            backDelay={1}
            loop
            smartBackspace
          /> */}
        <div className="my-home-face"></div>
  			<div className="post banner">
			    <h1 className="post-title">I have experince in building <em>scalable</em>, <em>maintainable</em> and <em>secure</em> web applications.</h1>
    			<p><a href="#" onClick={this.eventToggleSidebar}> Find out More</a></p>

			</div>

		  	<div className="post clearfix">

				<h2>Some of the Technologies I have built with:</h2>

				<div className="skill-item clearfix">
					<h4>Client Side</h4>
					<ul className="">
						<li><em><b>*</b><b>*</b>React</em>
							<ul>
								<li><em><b>*</b>Redux</em></li>
							</ul>
						</li>
					</ul>
				</div>


				<div className="skill-item clearfix">
					<h4>Server Side</h4>
					<ul>
						<li><em><b>*</b>Node</em>
							<ul>
								<li><em><b>*</b>Express</em></li>
							</ul>
						</li>
            <li><em>Ruby</em>
							<ul>
								<li><em>Ruby on Rails</em></li>
							</ul>
						</li>
					</ul>
				</div>

				<div className="skill-item clearfix">
					<h4>Testing</h4>
					<ul>
						<li><em>Mocha</em></li>
						<li><em>Enzyme</em></li>
						<li><em>Phantom</em></li>
					</ul>
				</div>

				<div className="skill-item clearfix">
					<h4>Deployment</h4>
					<ul className="clearfix">
            <li><em><b>*</b>Webpack</em></li>
            <li><em>Nginx</em></li>
						<li><em>Heroku</em></li>
						<li><em>GCP</em></li>
					</ul>
				</div>

				<div className="exclaimation">
					<em><b>*</b> This site is built with these technologies.
          View the <a href="https://github.com/amanmibra/portfolio-redux-app">
          github repo here</a>.</em><br/>
					<em><b>**</b> Yep, I know React can be used on the server side too.
          This site is Isomorphical rendered.</em>
				</div>

  			</div>


  			<div className="post clearfix">

				<h2>Companies I have worked with:</h2>

				<ul className="clients">
          <li className="cruise-logo">Cruise</li>
          <li className="heroku-logo">Heroku</li>
          <li className="salesforce-logo">Salesforce</li>
          <li className="medsender-logo">Medsender</li>
          <li className="duke-logo">Duke Cancer Institiute</li>
          <li className="cisco-logo">Cisco</li>
					{/* <li className="goldmans-logo">Goldman Sachs</li>
					<li className="orange-logo">Orange</li>
					<li className="tesco-logo">Tesco</li>
					<li className="timeout-logo">Timeout</li>
					<li className="wiley-logo">John Wiley and Sons</li>
					<li className="covestor-logo">Covestor</li>
					<li className="shipserv-logo">Shipserv</li> */}
				</ul>

			</div>

			{/* <Banner /> */}

  		</div>

    );
  }
}

export default Home;
