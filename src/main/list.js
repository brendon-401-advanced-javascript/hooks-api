// import { Form, Button} from 'react-bootstrap';
import './main.scss';
import useAxios from 'axios-hooks';
import { Toast } from 'react-bootstrap';
import ToastHeader from 'react-bootstrap/ToastHeader';


function TodDoList(props) {

    const [{ data, loading, error }, refetch] = useAxios(
    'https://auth-app-bh.herokuapp.com/api/v1/todo'
    );
    console.log(data);

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error!</p>

    return (
        
        <>
            
            <div className='List'>
            <h4>Tasks to be Completed</h4>  
                {
                data.results.map((item) => {
                    return<Toast>
                        <Toast.Header>
                        <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
                        <strong className="mr-auto">{JSON.stringify(item.complete)}</strong>
                        </Toast.Header>
                        <Toast.Body>{item.text}</Toast.Body>
                        <Toast.Body>Difficulty: {item.difficulty}</Toast.Body>
                    </Toast>

                })
                }
                <button onClick={refetch}>refresh</button>
                
            </div>
        </>
    )
}

export default TodDoList;