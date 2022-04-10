/* 
there are in total 10 react hooks which are the part of the react system.. 
1. useState
2. useReducer - useREducer is kind of an replacemet for the useState hook, so it helps the developer to help to re render the page when the value/variable/state is changed anywhere on the page.. okay so where does it comes in handy.. now let us say that there are two state or more than one state change that I am doing on one event change.. then I should use the useReducer hook in place of useEffect.. 
useReducer is provided by React only.
*/

// import './App.css';
// import { useState, useReducer } from 'react';
// function App() {
//   const reducer = (state, action) => {
//     switch(action.type){
//       case "Increment" :
//         return {count: state.count + 1, value: state.value}
//       case "toggleValue":
//         return {
//           value: !state.value,
//           count: state.count
//         }
//       default: return state;
//       }
//   }
//   const [state, dispatch] = useReducer(reducer, {count: 0, value: true})
//   return (
//       <>
//         <h1>React Hooks!</h1>
//         <div>
//           <h1>Counter: {state.count}</h1>
//           <h2>Value: {state.value && 'this is the text'}</h2>
//           <button onClick={()=>{
//             dispatch({type:"Increment"})
//             dispatch({type: "toggleValue"})
//           }}>Toggle</button>
//         </div>
//       </>
//     );
// }

// export default App;

/* 

useREducer is kind of an replacemet for the useState hook, so it helps the developer to help to re render the page when the value/variable/state is changed anywhere on the page.. okay so where does it comes in handy.. now let us say that there are two state or more than one state change that I am doing on one event change.. then I should use the useReducer hook in place of useEffect.. 
useReducer is provided by React only.

The syntax for the useReducer hook is something like this.. 
so the first step is to import the useReducer hook.. then destructure it 
const [state, dispatch] = useReducer(reducer, {initial states declaration and value.. in terms of object})

now we will have to define the reducer method
const reducer = (state, action) => {
  action.type = "string.. this is defined here "
  now here in the return function.. do whatever you want to do
}

for event handling we will call the dispatch function, here an object is passed with the action.type that I have defined above

*/


const App = () => {
  return (
    <>
      <div>Hello World</div>
    </>
  )
}

export default App;