// import React, { useState } from "react";
// import "../todo.scss";
// import TodoForm from "./TodoForm";

// // { list, completList, delList, updateList }
// const Todo = ({ list, completList, delList, updateList }) => {
//   const [edit, setEdit] = useState({
//     id: null,
//     title: "",
//   });

//   const submitUpdate = (title) => {
//     updateList(edit.id, title);
//     setEdit({
//       id: null,
//       title: "",
//     });
//   };

//   return (
//     <div className="todos">
//       {list.map((elem, index) => {
//         return (
//           <div className={`task todo-tasks`} key={index}>
//             {!edit.id ? (
//               <label className="task-title" key={elem.id}>
//                 <input
//                   type="checkbox"
//                   onChange={() => {
//                     completList(elem.id);
//                   }}
//                   key={elem.id}
//                 />
//                 <svg
//                   className={`checkbox ${
//                     elem.completed ? "checkbox--active" : ""
//                   }`}
//                   aria-hidden="true"
//                   viewBox="0 0 15 11"
//                   fill="none"
//                 >
//                   <path
//                     d="M1 4.5L5 9L14 1"
//                     strokeWidth="2"
//                     stroke={elem.completed ? "#fff" : "none"}
//                   />
//                 </svg>
//                 <p className={elem.completed ? "text--active" : ""}>
//                   {elem.title}
//                 </p>
//               </label>
//             ) : (
//               <TodoForm edit={edit} onSubmit={submitUpdate} />
//             )}

//             <div>
//               {edit.id ? (
//                 <div></div>
//               ) : (
//                 <div className="dropdown-container" tabIndex="-1">
//                   <div className="three-dots"></div>
//                   <div className="dropdown">
//                     <div
//                       className="d-text"
//                       onClick={() => {
//                         setEdit({ id: elem.id, title: elem.title });
//                       }}
//                     >
//                       Edit
//                     </div>

//                     <div
//                       className="d-text del"
//                       onClick={() => {
//                         delList(elem.id);
//                       }}
//                     >
//                       Delete
//                     </div>
//                   </div>
//                 </div>
//               )}
//             </div>
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// export default Todo;
