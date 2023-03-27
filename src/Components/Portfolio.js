import React from 'react'
import '../Styles/Portfolio.css'
import Data from './Data'


function Portfolio() {
    return (
        <div>
            <div className='sortContainer' id='projectsNav'>
                <h1 className='portfolioTitle'>Portfolio</h1>
                <select>
                    <option value="View All">All Projects</option>
                    <option value="Showcase">Showcase</option>
                    <option value="React">React</option>
                    <option value="Front End">Front End</option>
                    <option value="Back End">Back End</option>
                    <option value="JavaScript">JavaScript</option>
                </select>
            </div>
            <div className="container">
                <div className="projectAnimationWrapper">
                {Data.map((project, id) => {
                        return (
                            <div id={project.ID} key={project.ID} className="imageBox" 
                            onClick={() => window.open(project.src)}>
                                <div className="overlay" id={`overlay${project.ID}`}>
                                    <span className="text">{project.title}</span>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
        
    )
}

export default Portfolio