import React, { useState}  from 'react';
import {useDispatch} from 'react-redux';
import { add_task ,  filter_tasks } from  '../Actions/addAction' ;
import './addTask.css';
import { IoIosAddCircle } from "react-icons/io";
import { motion } from "framer-motion";


const AddTask = () => {

    const [task,setTask]= useState("")
       // dispatch action to add task in the store
    const dispatch = useDispatch();
        // dispatch action to add task
    const handleAddTask = () => {
        if (task.trim() !==''){
            dispatch(add_task({id: Date.now(), description: task , isDone: false}));
            setTask('');
        }else{
            alert("Please enter your Todo !")
        }
    }
        // dispatch action to show completed tasks
    const handleCompleted=()=>{
        dispatch(filter_tasks('SHOW_COMPLETED'));
    } 
        // dispatch action to show all tasks
    const handleShowAll=()=>{
        dispatch(filter_tasks('SHOW_ALL'));
    }
        // dispatch action to show  Not completed tasks
    const handleNotCompleted=()=>{
        dispatch(filter_tasks('SHOW_NOT_COMPLETED'));
    }

    return (
        <div >
            <div className='addTask'>
                <input type= 'text' placeholder='Enter Your Todo... ' value={task} onChange={(e)=>setTask(e.target.value)} />
                {/*button add task*/}
                <motion.button 
                    type='submit'
                    onClick={handleAddTask}
                    whileHover={{ scale: 1.5 }}
                    whileTap={{ scale: 1.9 }}>
                    <IoIosAddCircle />
                </motion.button>
            </div>
            <div className='class-btn'>
                <button type='button' onClick={handleCompleted}>Completed</button>
                <button type='button' onClick={handleNotCompleted}> Not Completed</button>
                <button type='button' onClick={handleShowAll}>All Tasks</button>
            </div>
        </div>
    );
};

export default AddTask
