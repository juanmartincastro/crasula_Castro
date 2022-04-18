import '../StylesSheets/NavBarModule.css';
import CartWidget from './CartWidget';

const NavBar = () => {
    return (
        <div>
            <nav className='nav-bar'>

                <span className='nombreLogo'>Crásula</span>
                <img className='Imagen-crasula' src={require('../images/cra.png')} alt='imagen de una crasula'/>

                <ul className='ul-nav' id='ul-nav'>
                    <li className='li-nav'><a href=''>Home</a></li>
                    <li className='li-nav'><a href=''>Productos</a></li>
                    <li className='li-nav'><a href=''>Nosotros</a></li>
                    <li className='li-nav'><a href=''>Registrarme</a></li>   
                </ul>

                <CartWidget /> 
                
            </nav>
        </div>
    )
}

export default NavBar