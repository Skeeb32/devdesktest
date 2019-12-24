// import React, {useReducer} from 'react'
// import {appReducers} from '../../src/redux/reducers/appReducers';
// import {TOGGLE_COMPLETED, ADD_TODO, CLEAR_TODO} from '../redux/actions/appActions'
// import AddTodo from './todolist/AddTodo';
// import TodoList from './todolist/TodoList';

// function CombineLists(){
//     const [state, dispatch] =useReducer(appReducers, state);
//   const addItem = item => {
//     dispatch({
//       type: ADD_TODO,
//       payload: item
//     });
//   };

//   const clearItems = () => {
//     dispatch({
//       type: CLEAR_TODO
//     });
//   };

//   const toggleItem = id => {
//     dispatch({
//       type: TOGGLE_COMPLETED,
//       payload: id
//     });
//   };

//   return (
//     <div className="App">
//       <h1>JUST DO IT</h1>
//       <AddTodo addItem={addItem}
//                 clearItems={clearItems}
//                 />
//       <TodoList todoItems={state.state.todo_list}
//                 toggleItem={toggleItem} />
//     </div>
//   );
// }

// export default CombineLists;