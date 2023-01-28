import React, { useState } from "react";

// export const InputElement = () => {
//     const [value, setValue] = useState("123")

//     return (
//         <input value={value} onChange={(e) => setValue(e.target.value)}></input>
//     )
// }

// export const InputElement = () => {
//     const [check, setCheck] = useState(0)

//     const items = ['1', '2', '3']

//     return (
//         <div>
//             {items.map((i) => (
//                 <label key={i}>
//                     <input 
//                         type='checkbox' 
//                         checked={check == i} 
//                         onChange={() => {setCheck(i)}}>    
//                     </input>
//                     {i}
//                 </label>
//             ))}
//         </div>
//     )
// }

export const InputElement = () => {
    const [value, setValue] = useState(0)

    const items = ['1', '2', '3']

    const handlerChange = (e) => {
        setValue(e.target.value)
    }

    return (
        <select value={value} onChange={(e) => {handlerChange}}>
            {items.map((i) => (
                <option key={i} value={i}>{i}</option>
            ))}
        </select>
    )
}