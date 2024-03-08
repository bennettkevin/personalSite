import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import Placeholder from '../../Assets/Images/Placeholder.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode, faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import {faTwitter, faLinkedin, faYoutube, faGithub} from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => (
<div className='navBar'>
    <Link className='logo' to='/'>
        <img src={Placeholder} alt='Logo'/>
    </Link>
    
    <nav>
        <NavLink exact="true" activeClassName="active" to="/">
            <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
        </NavLink>
        <NavLink exact="true" activeClassName="active" className="about-link" to="/about">
            <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
        </NavLink>
        <NavLink exact="true" activeClassName="active" className="work-link" to="/work">
            <FontAwesomeIcon icon={faCode} color="#4d4d4e" />
        </NavLink>
        <NavLink exact="true" activeClassName="active" className="contact-link" to="/contact">
            <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
        </NavLink>
        
    </nav>

    <ul>
        <li>
            <a target='_blank' rel='noreferrer' href='https://twitter.com/kevbenn45'>
                <FontAwesomeIcon icon={faTwitter} color='#4d4d4e' />
            </a>
            
        </li>
        <li>
            <a target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/kevin-bennett-ab4257215/'>
                <FontAwesomeIcon icon={faLinkedin} color='#4d4d4e' />
            </a>
            
        </li>
        <li>
            <a target='_blank' rel='noreferrer' href='https://www.youtube.com/channel/UCAbf4RdjXjTtMk7iRhysY-g'>
                <FontAwesomeIcon icon={faYoutube} color='#4d4d4e' />
            </a>
            
        </li>
        <li>
            <a target='_blank' rel='noreferrer' href='https://github.com/bennettkevin'>
                <FontAwesomeIcon icon={faGithub} color='#4d4d4e' />
            </a>
            
        </li>
    </ul>
</div>



)

export default Sidebar