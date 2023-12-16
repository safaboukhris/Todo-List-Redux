    /* creating our actions objects*/
export  const  add_task = (task) =>{
    return{
        type : 'ADD_TASK',
        payload: task,
    }
}

export  const  edit_task = (taskId) =>{
    return{
        type : 'EDIT_TASK',
        payload: taskId,
    }
}

export  const  filter_task = (filter) =>{
    return{
        type : 'FILTER_TASK',
        payload: filter,
    }
}
export const delete_task = (taskId) => {
    return {
        type : 'DELETE_TASK',
        payload : taskId,
    }
}
export const filter_tasks = (filter) => {
    return {
        type:'FILTER_TASKS',
        payload: filter
    }
}
export const update_task= (id, description)=>{
    return{
        type:'UPDATE_TASK',
        payload: id,description
    }
}
export const show_not_completed=()=>{
    return{
        type:"SHOW_NOT_COMPLETED",
    }
}
