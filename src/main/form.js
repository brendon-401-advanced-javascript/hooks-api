import { Form, Button} from 'react-bootstrap';
import './main.scss';


function TodoForm(props) {
    return(
    <>
        <Form>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Add To Do Item</Form.Label>
                <Form.Control type="text" placeholder="Name of Item" />
                <Form.Text className="text-muted">
                    What is the name of your to do?
                </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>Assigned To</Form.Label>
                <Form.Control type="Text" placeholder="Assignee" />
                <Form.Text className="text-muted">
                    Who will be assigned this todo?
                </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicRange">
                <Form.Label>Difficulty</Form.Label>
                <Form.Control type="range" />
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