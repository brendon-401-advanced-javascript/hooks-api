// import { Form, Button} from 'react-bootstrap';
import './main.scss';
import useAxios from 'axios-hooks';


function TodDoList(props) {

    const [{ data, loading, error }, refetch] = useAxios(
    'https://auth-app-bh.herokuapp.com/api/v1/todo'
    );

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error!</p>

    return (
        
        <>
            <h4>Tasks to be Completed</h4>  
            <div>
                <button onClick={refetch}>refresh</button>
                <pre>{JSON.stringify(data, null, 2)}</pre>
            </div>
        </>
    )
}

export default TodDoList;