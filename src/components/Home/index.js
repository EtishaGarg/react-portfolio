import './index.scss'
import { Link } from 'react-router-dom'
import LogoTitle from '../../assets/images/logo-e.png'
import {Loader} from 'react-loaders'

const Home = () => {
    return (
    <div>
        <div className='container home-page'>
            <div className='text-zone'>
                <h1>Hi, <br/> I'm
                <img src={LogoTitle} alt='developer'/>
                tisha
                <br/>
                web developer
                </h1>
                <h2>Frontend Developer / Javascript Expert / Youtuber</h2>
                <Link to='/contact' className='flat-button'>CONTACT ME</Link>
            </div>
        </div>
        <Loader type='pacman'/>
    </div>
    )
}

export default Home