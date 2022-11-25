import {createSlice} from '@reduxjs/toolkit';

// interface initialType {
//   todoList: any[];
// }
// const initialState: initialType = {
//   todoList: [],
// };

const TodoSlice = createSlice({
  name: 'Todo',
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      const newTask: {id: number; title: string} = {
        id: action.payload.task,
        title: action.payload.task,
      };
      state.push(newTask);
    },
    deleteTask: (state, action) => {
      return state.filter(item => item.id !== action.payload.id);
    },
    editTask: (state, action) => {
      state.map(user => {
        user.title === action.payload.title ? action.payload : user;
      });
    },
  },
});
export const {addTodo, deleteTask, editTask} = TodoSlice.actions;
export default TodoSlice.reducer;
