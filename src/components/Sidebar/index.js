import './index.scss'
import {Link, NavLink} from 'react-router-dom'
import LogoE from '../../assets/images/logo-e.png'
import LogoSubtitle from '../../assets/images/logo_etisha.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser} from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'

const Sidebar = () =>{
    return(
        <div className='nav-bar'>
        <Link className='logo' to ='/'>
            <img src={LogoE} alt='logo'/>
            <img className='sub-logo' src={LogoSubtitle} alt='etisha'/>
        </Link>
        <nav>
            <NavLink to='/' exact={true} activeClassName='active' >
                <FontAwesomeIcon icon={faHome} color="#4d4d4e"/>
            </NavLink>
            <NavLink to='/about' exact={true} activeClassName='active'>
                <FontAwesomeIcon icon={faUser} color="#4d4d4e"/>
            </NavLink>
            <NavLink to='/contact' exact={true} activeClassName='active'>
                <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e"/>
            </NavLink>
        </nav>
        <ul>
            <li>
                <a 
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.linkedin.com/in/etisha-garg/"
                >
                    <FontAwesomeIcon icon={faLinkedin} color='#4d4d4d4e'/>
                </a>
            </li>
            <li>
                <a 
                    target="_blank"
                    rel="noreferrer"
                    href="https://twitter.com/GargEtisha"
                >
                    <FontAwesomeIcon icon={faTwitter} color='#4d4d4d4e'/>
                </a>
            </li>
            <li>
                <a 
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.youtube.com/etishagarg/"
                >
                    <FontAwesomeIcon icon={faYoutube} color='#4d4d4d4e'/>
                </a>
            </li>
        </ul>
    </div>
)
} 

export default Sidebar