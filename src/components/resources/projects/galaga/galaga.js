import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css'; 
import Table from 'react-bootstrap/Table';


const percentage = 85;

var article = (
    <div className='article'>
        <div className = 'article-title-card'>
            <div className='article-title'>
                FPGA Based Arcade Game
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
                                <td>Improve Enemy AI</td>
                            </tr>
                            <tr>
                                <td className = 'table-num'>2</td>
                                <td>Add sound</td>
                            </tr>
                            <tr>
                                <td className = 'table-num'>3</td>
                                <td>Add Fighter Capture Mechanic</td>
                            </tr>
                         
                        </tbody>
                    </Table>
                </div>
            </div>
        </div>
        </div>

        <div className = 'article-body'>
            <p className = 'article-body-text'>
                This project was assigned as the final project for UIUC's ECE 385.  For this group I helped develop a Star Wars Arcade game styled after Galaga.  Our project had multiple
                levels, several types of enemies, each with their own AI, a 'Boss' character, and a scoreboard.  Our project was run using a MAX10 DE10-Lite FPGA board.  The board implemented all
                of the game logic and displayed the game on a monitor using the VGA protocol.
            </p>
        </div>
        
    

    </div>);


export default article;


