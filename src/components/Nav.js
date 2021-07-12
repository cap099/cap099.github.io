import {Link} from 'react-router-dom'

function Nav(){
    return (
        <div className="nav-bar">
            <Link to={"/"} style={{ textDecoration: 'none'}}>
                <h1>Caleb Patton</h1>
            </Link>
            <NavButton name="About" link = "About"/>
            <NavButton name="Projects" link = "projects"/>
            <NavButton name="Resume" link = "resume"/>
            <NavButton name="Relevant Coursework" link = "courses"/>
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