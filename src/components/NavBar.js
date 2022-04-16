import '../StylesSheets/NavBarModule.css';

const NavBar = () => {
    return (
        <div>
            <nav className="nav-bar">

                <span className="nombreLogo">Crásula</span>
                <img className='Imagen-crasula' src={require('../images/cra.png')}/>

                <ul className="ul-nav" id="ul-nav">
                    <li className="li-nav"><a href="">Home</a></li>
                    <li className="li-nav"><a href="">Productos</a></li>
                    <li className="li-nav"><a href="">Nosotros</a></li>
                    <li className="li-nav"><a href="">Registrarme</a></li>   
                </ul>
            </nav>
        </div>
    )
}

export default NavBar