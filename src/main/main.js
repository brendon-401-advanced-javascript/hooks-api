import { Navbar } from 'react-bootstrap';
import './main.scss';
import React, { useState } from 'react'; 
import Form from './form.js';
// import ToDoList from './list.js';


function Main(props) {
    const [listItems] = useState([]);

    // function to be passed to form for the submit handle
    // function handleSubmit() {   
    // }

    return (
    <div className='MainForm'>
        <Navbar className='Navbar' bg='dark' variant="dark">
        <Navbar.Brand>To Do List Manager({listItems.length})</Navbar.Brand>
        </Navbar> 

        <Form />

        
        <ul>   
        {
            listItems.map((item) =>  {
                return <li>{item}</li>
            })
        }
        </ul>


    </div>
    )
}

export default Main;