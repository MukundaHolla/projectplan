import React from 'react'

const ProjectDetails = (props) => {
    const id = props.match.params.id;
    return (
        <div className="project-details continer section">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Project Tittle - {id}</span>
                    <p>its 6GB + 128GB variant costs Rs 23,999. The company will be conducting a second alpha sale for the Redmi K20 series on July 18th. Those who want to avoid the rush of a flash sale can wait for the first sale instead, which will be held at 12pm on July 22nd.</p>
                </div>
                <div className="card-action gret lighten-4 grey-text">
                    <div>
                        Posted by Namrata Bhat
                    </div>
                    <div>
                        2nd Sep, 2 AM
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetails
