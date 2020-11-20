// import { Form, Button} from 'react-bootstrap';
import './main.scss';


function TodDoList(props) {
    return (
        <>
            <h4>Tasks to be Completed</h4>
            <ul>   
            {
                // console.log(props.taskList)
                props.taskList.map((item) =>  {
                return<li>
                   Name: {item.assignedTo}
                    <br/>
                   Task: {item.itemName}
                   <br/>
                   Difficulty: {item.difficulty}
                </li>
                })
            }
        
            </ul>
        </>
    )
}

export default TodDoList;