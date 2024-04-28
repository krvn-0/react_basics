import React, {useState} from 'react';

// function SubjectList(props){
//     let subjects = props.data;
//     let title = props.title;

//     return(
//         <div>
//             <h1>{title}</h1>
//             <ol>
//                 {
//                     subjects.map((subject) => {
//                         return <li key={subject.id}>{subject.code} - {subject.description}</li>
//                     })
//                 }
//             </ol>
//         </div>
//     )
// }

export function SubjectList(props){
    const subjectList = props.list;
    const [subjects, setSubjects] = useState(subjectList);

    function addSubject(){
        setSubjects((subjects) => {
            const nval = [...subjects, {code: "CMSC 23", description: "Mobile Development"}];
            console.log(nval);
            return nval;
        })
    }

    return (
        <>
        <p>Show list: </p>
        <ol>
            {
                subjects.map((subject) => {
                    return <li>{subject.code} - {subject.description}</li>
                })
            }
        </ol>
        <button onClick={addSubject}>Add Subject</button>
        </>
    )
}

export default SubjectList