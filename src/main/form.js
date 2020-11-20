import { Form, Button} from 'react-bootstrap';
import './main.scss';
import React, { useState } from 'react'; 


function TodoForm(props) {
    const [task, updateTasks] = useState({});

    function handleTask(e) {
        let taskUpdate = {
            ...task, 
            [e.target.name]: e.target.value,
        };
        console.log(task)
        updateTasks(taskUpdate);
    }
    
    console.log(task);

    function onSubmit(e) {
        e.preventDefault();
        // e.target.reset()
        console.log('onSubmit');
        props.formHandler(task)
        updateTasks({})
    }
    return(
    <>
        <Form onSubmit={onSubmit}>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Add To Do Item</Form.Label>
                <Form.Control onChange={handleTask} name="itemName" type="text" placeholder="Name of Item" />
                <Form.Text className="text-muted">
                    What is the name of your to do?
                </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>Assigned To</Form.Label>
                <Form.Control onChange={handleTask} name="assignedTo" type="Text" placeholder="Assignee" />
                <Form.Text className="text-muted">
                    Who will be assigned this todo?
                </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicRange">
                <Form.Label>Difficulty</Form.Label>
                <Form.Control name="difficulty" onChange={handleTask} type="range" />
                <Form.Text className="text-muted">
                    How difficult is the task?
                </Form.Text>
            </Form.Group>
            
            <Button variant="primary" type="submit">Add Item</Button>
        </Form>

    </>
    )
}

export default TodoForm;