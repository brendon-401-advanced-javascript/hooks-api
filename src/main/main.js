import { Navbar } from 'react-bootstrap';
import './main.scss';
import React, { useState } from 'react'; 
import Form from './form.js';
// import ToDoList from './list.js';
import Toasty from './list.js';




function Main(props) {
    const [taskItems, setTaskItems] = useState([])

    
    // function to be passed to form for the submit handle
    function formSubmit(data){
        console.log('data that we got from form', data);
        setTaskItems([...taskItems, data]);
    };

    


    return (
    
    <div className='MainForm'>
        <Navbar className='Navbar' bg='dark' variant="dark">
        <Navbar.Brand>To Do List Manager({taskItems.length})</Navbar.Brand>
        </Navbar> 
        <div className='FormAndList'>
        <Form formHandler={formSubmit} />
        <Toasty className='TodoList' taskList={taskItems}/>
        </div>


    </div>
    
    )
}

export default Main;