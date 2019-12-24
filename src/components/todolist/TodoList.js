//Renders Todo and maps over each to display ea item. 
import React, { useContext } from "react";
import Store from "../../context";

import React from 'react';

// import Todo from './Todo';
// import {connect} from 'react-redux';

// const TodoList = (props) => {
//     return (
//         <div className="todoList">
//             {props.tasks.map(item => (
//                 <Todo key={item.id}
//                           item={item}
//                           toggleItem={props.toggleItem}/>
//             ))}
//         </div>
//     );
// };
// const mapStateToProps = state => {
//     return {
//       task: state.todoReducer.task,
//       error: state.todoReducer.error,
//       isLoading: state.todoReducer.isLoading
//     }
//   }
  
  
//   export default connect(mapStateToProps, {rxGetParty})(TodoList); 