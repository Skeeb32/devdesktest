//Form with single input for a todo => add todo items to list. 
//ability to mark if task completed and then clear completed list onClick.
//ability to edit and delete items.

// import React, {useState} from 'react';


// const AddTodo = props => {
//     const [input, setInput] = useState('');
   
//    const  handleChanges = e => {
//         setInput(e.target.value);
//     };

//     const handleSubmit = e => {
//         e.preventDefault();
//         props.addItem(input);
//         setInput('');
//     };

//     const clearItems = () => {
//         props.clearItems();
//     }



//     return (
//         <div>
//             <form onSubmit={handleSubmit}>
//                 <input type='text'
//                        placeholder='Add new todo item here...'
//                        value={input}
//                        onChange={handleChanges}/>
//                 <button>Add Todo</button>
//             </form>
//             <button onClick={clearItems}>Clear Completed</button>
//         </div>
//     )
// }

// export default AddTodo;
