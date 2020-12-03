import {useState} from 'react';


const useForm = (callback) => {
    const [task, updateTasks] = useState({});

    const handleTask = (e) => {
        let taskUpdate = {...task, [e.target.name]: e.target.value};
        updateTasks(taskUpdate);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        callback && callback(task);
        e.target.reset();
        updateTasks({});
        console.log(task);
    }
    return [onSubmit, handleTask, task];
}

export default useForm; 
