import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css'; 
import Table from 'react-bootstrap/Table';


const percentage = 0;

var article = (
    <div className='article'>
        <div className = 'article-title-card'>
            <div className='article-title'>
                Altamont Grip Identification. 
            </div>
            <div className = 'article-subtitle'>

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
            Future Tasks:
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
                                <td>Learn Product Hierarchy, determine number of models required</td>
                            </tr>
                            <tr>
                                <td className = 'table-num'>2</td>
                                <td>EDA on each part of product hierarchy, determine number of images for each class</td>
                            </tr>
                            <tr>
                                <td className = 'table-num'>3</td>
                                <td>Train Models</td>
                            </tr>
                         
                        </tbody>
                    </Table>
                </div>
            </div>
        </div>
        </div>

        <div className = 'article-body'>
            <p className = 'article-body-text'>
                The goal of this project is to generate a product description and part number based on an image of any of Altamont's products.
                I will probably do this using Tensorflow and by ensembling many models for different identifiers to generate the entire part number.
                I will begin working on this project in the middle of August 2021.
            </p>
        </div>
        
    

    </div>);


export default article;


