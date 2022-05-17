import {Link} from 'react-router-dom'
import { CartWidget } from '../cartwidget/CartWidget'
import { useCartContext } from '../context/CartContext/CartContext'
import './navbar.css'


export const NavBar = () => {

    const {cart} = useCartContext()

    return (
        <>
        <nav className="navbar navbar-expand-xl navbar-light bg-light">
            <div className="container">
                <Link to="/" className="navbar-brand fw-bold">Crassula</Link>
                
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarBasic" aria-controls="navbarBasic" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>  
                
                { cart.length === 0 ? 
                    <></>
                    : 
                    <CartWidget />
                }
                
                <div className="collapse navbar-collapse show m-auto flex-navbar" id="navbarBasic">
                    <div className="">
                        <ul className="flex-navbar navbar-nav me-auto mb-2 mb-xl-0">
                            
                                <Link to="/category/crassulas" className="nav-link nav-link-p" >Crassulas</Link>
                            
                                <Link to="/category/suculentas" className="nav-link nav-link-p">Suculentas</Link>
                            
                                <Link to="/category/aromaticas" className="nav-link nav-link-p" >Aromaticas</Link>

                                <Link to="/category/arbustos" className="nav-link nav-link-p" >Arbustos</Link>                        
                                
                                
                        </ul>
                    </div>
                </div>
                
            </div>

            
            
        </nav>

        </>
    )
}
