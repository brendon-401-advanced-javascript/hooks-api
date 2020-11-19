import { Navbar, Form, Button, FormControl } from 'react-bootstrap';
import './header.scss';

function Header(props) {

    return(
    <>
        <Navbar className='Navbar' variant="dark">
            <Navbar.Brand href="#">Home</Navbar.Brand>
            <Form inline className='Login'>
                <FormControl type="text" placeholder="Username" className="mr-sm-2" />
                <FormControl type="password" placeholder="Password" className="mr-sm-2" />
                <Button variant="light">Login</Button>
            </Form>
        </Navbar>  
    </>
    )
}

export default Header;