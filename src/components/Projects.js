 import linkedin from './resources/linkedin.png'

function Projects(){
    return (
        <div className='grid-container'>
            <div className='grid-item'>
                <ProjectCard/>  
            </div>

            <div className='grid-item'>
                <ProjectCard/>  
            </div>

            <div className='grid-item'>
                <ProjectCard/>  
            </div>

            <div className='grid-item'>
                <ProjectCard/>  
            </div>

            <div className='grid-item'>
                <ProjectCard/>  
            </div>

        </div>
    );
}

export default Projects;


/*
Image
Title
Subtitle
date
tools

*/


function ProjectCard(){
    return(
        <div className="card">
    <a href="/posts/test.html">
        <img className="card-img-top" src={linkedin} alt="Card cap" height="200px"/>
            <div className="card-body">
                <h5 className="card-title" id="card-title">Title</h5>
                    <p className="card-text" id="card-subtitle">Subtitle</p>
                        <p className="card-text" id="card-date"><small class="text-muted">Jul 12th, 2021</small></p>
            </div>
    </a>
</div>

    );
}
