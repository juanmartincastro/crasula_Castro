import { Link } from 'react-router-dom';
import '../StylesSheets/NavBarModule.css';
import CartWidget from './CartWidget';

const NavBar = () => {
  return (
    <div>
      <nav className='nav-bar'>

        <h1 className='nombreLogo'><Link to={'/'}>Crásula</Link> </h1>
        <img className='Imagen-crasula' src={require('../images/crasula.png')} alt='imagen de una crasula'/>

        <ul className='ul-nav' id='ul-nav'>
          <li className='li-nav'><Link to={'/'}>Home</Link></li>
          <li className='li-nav'><Link to={'/contador'}>Contador</Link></li>
          <li className='li-nav'><a href=''>Nosotros</a></li>
          <li className='li-nav'><a href=''>Registrarme</a></li>   
        </ul>

        <CartWidget /> 
                
      </nav>
    </div>
  )
}

export default NavBar