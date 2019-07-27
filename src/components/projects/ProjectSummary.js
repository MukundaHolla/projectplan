import React from 'react'
import moment from 'moment';

const ProjectSummary = ({project}) => {
    return (
        <div className="project-list section">
            <div className="project-summary card z-depth-0">
                <div className="card-content text-darkn-3">
                    <span className="card-title">
                        {project.title}
                    </span>
                    <p>Posted by {project.authorFirstName} {project.authorLastName}</p>
                    <p className="grey-text">{moment(project.createdAt.toDate()).calendar()}</p>
                </div>
            </div>
        </div>
    )
}

export default ProjectSummary;