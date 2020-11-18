import { Navbar } from 'react-bootstrap';
import './main.scss';

function main() {
    return (
    <div className='MainForm'>
        <Navbar className='Navbar' bg='dark' variant="dark">
            <Navbar.Brand>To Do List Manager</Navbar.Brand>
        </Navbar>  
    </div>
    )
}

export default main;