export const initialState = {
    todo: [
        {
            item: 'Learn about reducers',
            completed: false,
            id: 3892987589
        }
    ]
};

export const todoReducer = (state, action) => {
    switch(action.type) {
        case 'ADD_TODO':
            const newTodo = {
                item: action.payload,
                completed: false,
                id: Date.now()
            };
            return {
                ...state,
                todo: [{...state.todo}, newTodo]
            };
            default: 
                return state;
    }
};