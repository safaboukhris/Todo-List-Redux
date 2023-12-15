import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { edit_task, delete_task, update_task } from '../Actions/addAction';
import './task.css';
import { MdDelete } from "react-icons/md";
import { RiEdit2Fill } from "react-icons/ri";
import { IoCheckmarkDoneSharp } from "react-icons/io5";
import { FaDeleteLeft } from "react-icons/fa6";
import { MdCloudDone } from "react-icons/md";
import { motion } from "framer-motion";

const Task = ({ task }) => {
    const dispatch = useDispatch();
    const [editMode, setEditMode] = useState(false);
    const [editedDescription, setEditedDescription] = useState(task.description);
        /*dispatch actions: edit, delete ,update and cancel */
    const handleEditTask = () => {
        dispatch(edit_task(task.id));
    };

    const handleDeleteTask = () => {
        dispatch(delete_task(task.id));
    };

    const handleUpdateTask = () => {
        dispatch(update_task({ id: task.id, description: editedDescription }));
        setEditMode(false);
    };

    const handleCancelEdit=()=>{
        setEditMode(false);
    };

    return (
        <motion.div className='container'
        initial={{ x: "150vw", transition: { type: "spring", duration: 2 } }}
        animate={{ x: 0, transition: { type: "spring", duration: 2 } }}>
            {editMode ? (
                <div className='inputUpdate'>
                        {/*button delete, button save and update input*/}
                    <input type='text' value={editedDescription} onChange={(e) => setEditedDescription(e.target.value)} />
                    <button  style={{color:'#182C61'}}onClick={handleUpdateTask}><MdCloudDone /></button>
                    <button  style={{color:'red'}}onClick={handleCancelEdit}><FaDeleteLeft /></button>
                </div>
            ) : (
                <div className='listTask' >
                    <div className='span'>
                        <span style={{ textDecoration: task.isDone ? 'line-through' : 'none' }}>
                            {task.description}
                        </span>
                    </div>
                    <div className='buttons'>
                            {/*button: delete , done , edit*/}
                        <button  style={{color:'green'}}type='button' onClick={handleEditTask}><IoCheckmarkDoneSharp /></button>
                        <button  style={{color:'#182C61'}}type='button' onClick={() => setEditMode(true)}><RiEdit2Fill /></button>
                        <button  style={{color:'red'}}type='button' onClick={handleDeleteTask}><MdDelete /></button>
                    </div>
                </div>
            )}
        </motion.div>
    );
};

export default Task;
