import {useState} from 'react';

export default function Counter(props){

    function addValue() {
        return setVal((prev) => prev + 1);
    }
    const [val, setVal] = useState(props.val);
    // const [current_state, state_setter] = useState(initial_value)

    return(
        <>
        <h1>Counter: {val}</h1>
        <button onClick={() => {
            addValue();
            addValue();
            addValue();
        }}>Add</button> 
        </>
    )
}

// export default function WrongCounter(){
//     let val = 0;
//     return (
//         <>
//             <h1>Counter {val}</h1>
//             <button onClick={() => {
//                 val = val + 1;
//                 alert("Added! " + val);
//             }}>Add</button>
//         </>
//     )
// }
