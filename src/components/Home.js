import headshot from './resources/headshot.jpg'


function Home(){
    return (
            <div>
                <div className='intro'>
                    <h1 className='intro-heading'>Hi, I'm Caleb Patton</h1>
                    <div className='intro-subheading'>I like Data and Robots</div>
                    <div className='intro-paragraph'>
                                I currently work at Brunswick Corporation's iJet Laboratory as a CV/ML Intern. In May of 2022 I will graduate from the University of Illinois at Urbana-Champaign with a B.S. in Computer Engineering.
                        <br></br>
                        <br></br>
                    </div>   
                </div>      
                <img className='home-headshot' src = {headshot} alt="headshot" width="475" height = "475"/>
            </div> 
    );
}

export default Home;