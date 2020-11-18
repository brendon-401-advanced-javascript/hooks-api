import { Navbar } from 'react-bootstrap'
import './header.scss';
function Header() {

    return(
    <>
        <Navbar className='Navbar' variant="dark">
            <Navbar.Brand href="#">Home</Navbar.Brand>
        </Navbar>  
    </>
    )
}

export default Header;