import React from 'react'
import {useSelector} from 'react-redux';
import Task from './Task';


const ListTask = () => {
            /* using hook useSelector() to extract  state from the redux store */
        const tasks = useSelector(state=>{
            if (state.addReducer.filter === 'SHOW_COMPLETED') {
                return state.addReducer.tasks.filter(task => task.isDone);
            }else if(state.addReducer.filter === 'SHOW_NOT_COMPLETED'){
                return state.addReducer.tasks.filter(task =>!task.isDone);
            }
            return state.addReducer.tasks;
        });

    return (
        <div>
            {tasks.map(task =>(<Task  key={task.id} task={task}/>))}
        </div>
    )
}

export default ListTask
