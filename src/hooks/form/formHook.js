import {useState} from 'react';


const useForm = (callback) => {
    const [task, updateTasks] = useState({});

    function handleTask(e) {
        let taskUpdate = {...task, [e.target.name]: e.target.value};
        updateTasks(taskUpdate);
    }

    function onSubmit(e) {
        e.preventDefault();
        callback && callback(task);
        e.target.reset();
        updateTasks({});
        // console.log(task);
    }
    return [handleTask, onSubmit, task];
}

export default useForm; 
