import React from 'react'

const ProjectSummary = ({project}) => {
    return (
        <div className="project-list section">
            <div className="project-summary card z-depth-0">
                <div className="card-content text-darkn-3">
                    <span className="card-title">
                        {project.title}
                    </span>
                    <p>Posted by Holla</p>
                    <p className="grey-text">3rd Sept, 2 AM</p>
                </div>
            </div>
        </div>
    )
}

export default ProjectSummary;