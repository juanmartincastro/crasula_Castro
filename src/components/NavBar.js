import '../StylesSheets/NavBarModule.css';
import {AiOutlineShoppingCart} from 'react-icons/ai';

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

                <div className='contenedor-carrito'>
                    <AiOutlineShoppingCart className='icono-carrito' />
                </div>
                
            </nav>
        </div>
    )
}

export default NavBar