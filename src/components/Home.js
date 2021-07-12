import headshot from './resources/headshot.jpg'
import linkedin from './resources/linkedin.png'


function Home(){
    return (
        <div className='home-header'>
            <img className='home-headshot' src = {headshot} alt="headshot" width="300" height = "300"/>
            <p className='home-paragraph'>
                <h4>Hi I'm Caleb!</h4>
                <br></br>
                    This website is still being built.  For now you can just go to my LinkedIn:
                <br></br>
                <br></br>
                <a className="App-link" href="https://www.linkedin.com/in/cajp" target="_blank" rel="noopener noreferrer">
                    <img src = {linkedin} alt='linkedin logo' width="50" height="50"/>
                </a>
            </p>          
        </div>
    );
}

export default Home;