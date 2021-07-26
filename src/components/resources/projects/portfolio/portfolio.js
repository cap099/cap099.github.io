import {Link} from 'react-router-dom'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css'; 
import Table from 'react-bootstrap/Table';


const percentage = 90;

var article = (
    <div className='article'>
        <div className = 'article-title-card'>
            <div className='article-title'>
                I made a personal website. 
            </div>
            <div className = 'article-subtitle'>
                <Link to={'/'}>Check it out here!</Link>
            </div>
        </div>
        <div className='completion-card'>
            <div>
            <div className='progress-text'>
                Estimated Project Completion:
            </div>
            <div className='progress-wheel'>
            <CircularProgressbar value={percentage} text={`${percentage}%`}   styles={{
                                root: {},
                                path: {
                                stroke: `rgb(190, 118, 9)`,
                                strokeLinecap: 'round',
                                transition: 'stroke-dashoffset 0.5s ease 0s',
                                },
                                trail: {
                                stroke: `rgb(200, 222, 231)`,
                                },
                                text: {
                                fill: `rgb(190, 118, 9)`,
                                }
                            }}/>
            </div>
            </div>
            <div className = 'future-features'> 
            <div style={{'text-align': 'center', 'font-size':'1.2em'}}>
            Future Features:
        </div>
            <div className='features-table'>
                <div>            
                    <Table>
                        <thead>
                            <tr>
                            <th>Priority</th>
                            <th></th>
                            <th></th>
                            </tr>
                        </thead>
                        
                        <tbody>
                            <tr>
                                <td className = 'table-num'>1</td>
                                <td>Make site look nicer</td>
                            </tr>
                            <tr>
                                <td className = 'table-num'>2</td>
                                <td>Store Data in JSON</td>
                            </tr>
                            <tr>
                                <td className = 'table-num'>3</td>
                                <td>Clean up CSS</td>
                            </tr>
                         
                        </tbody>
                    </Table>
                </div>
            </div>
        </div>
        </div>

        <div className = 'article-body'>
            <p className = 'article-body-text'>
                This is the first iteration of my personal website that I built using React and Bootstrap.  
                Since I had never used any frontend tools before, I used this project as crash course in Javascript, HTML and CSS.
                There are many things that I would like to do differently for V2, including cleaning up the CSS and improving the visuals of the site. 
                However, for a first time, I think this looks pretty good.
            </p>
        </div>
        
    

    </div>);


export default article;


