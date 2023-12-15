const initialState = {
    tasks : [],
    filter: 'SHOW_ALL'
};
        /*creating  our reducer*/
const addReducer = ( state = initialState , action ) => {
        switch(action.type){
            case 'ADD_TASK':
                return{
                    ...state,
                    tasks: [...state.tasks, action.payload],
                };
            case  'EDIT_TASK':
                return{
                    ...state,
                    tasks: state.tasks.map (task => task.id === action.payload ?
                        {...task, isDone : !task.isDone } : task),
                };
            case 'FILTER_TASK':
                return{
                    ...state,
                    filter:action.payload 
                };
            case 'DELETE_TASK':
                return {
                    ...state,
                    tasks: state.tasks.filter((task) => task.id !== action.payload) 
                };
            case 'FILTER_TASKS':
                return {
                    ...state,
                    filter: action.payload
                };
            case 'UPDATE_TASK' :
                return {
                    ...state,
                    tasks:state.tasks.map(task=> task.id===action.payload.id?
                        {...task,description: action.payload.description}: task),
                };
            default : 
                return state;
        }
};

export default addReducer;