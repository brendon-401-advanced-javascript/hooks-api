import { Navbar } from 'react-bootstrap';
import './main.scss';
import React, { useState } from 'react'; 
import Form from './form.js';
// import ToDoList from './list.js';


function Main(props) {
    const [taskItems, setTaskItems] = useState(['Cowabunga']);

    // function to be passed to form for the submit handle
    function formSubmit(data){
        setTaskItems(...taskItems, data);
        console.log(taskItems);
    };

    // Const [count, setCount] = useState(7);

    return (
    
    <div className='MainForm'>
        <Navbar className='Navbar' bg='dark' variant="dark">
        <Navbar.Brand>To Do List Manager({taskItems.length})</Navbar.Brand>
        </Navbar> 

        <Form formHandler={formSubmit} />

        <ul>   
        {

            console.log(taskItems)
            // taskItems.map((item) =>  {
            //     return <li>{item}</li>
            // })
        }
        
        </ul>


    </div>
    
    )
}

export default Main;