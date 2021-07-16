import {Link} from 'react-router-dom'

function Nav(){
    return (
        <div className="nav-bar">
            <div className='nav-logo'>
                <Link to={"/"} style={{ textDecoration: 'none'}}>
                    <h1>CP</h1>
                </Link>
            </div>
            <div className="nav-tabs">
                <NavButton name="About" link = "about"/>
                <NavButton name="Projects" link = "projects"/>
                <NavButton name="Resume" link = "resume"/>
            </div>

        </div>
    );
}

function NavButton(props){
    return (
        <div className="nav-button">
            <Link to={'/' + props.link}  style={{ textDecoration: 'none' }}>
                <h2>{props.name}</h2>   
            </Link>
        </div>
    );
}

export default Nav;