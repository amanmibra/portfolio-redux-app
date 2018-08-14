import React, { Component } from 'react';
import { getProjects } from '../api/projects';
import classNames from 'classnames';

class Projects extends Component {

  render() {

    const projects = getProjects();

    const ProjectsRows = projects.map((project) => {
    	const classname = classNames('portfolio_item','clearfix',project.classname);
      const description = project.description;
        return (
          <div key={project.title} className={classname}>
            <h2 className="project_tile"><a href={project.link} target="_blank">(link to project)</a> {project.title}</h2>
            <div key={description.title} className="role_wrapper clearfix">
    					<p className="role">Details</p>
    					<p className="role_title">{description.stack}<br />
    					<span className="role_time">{description.time}</span><br /></p>
    				</div>
            <p className="project_description">{description.text}</p>
    			</div>
        )
    });

    return (
        <div className="posts">
        	{ProjectsRows}
        </div>
    );

  }
}

export default Projects;
