import { useState } from "react"

export default function NewTask({onAddTask}) {

 const [enteredTast,setEnteredTask]=   useState("")
    function handleChange(event) {
        setEnteredTask(event.target.value);
    }
    function handleClick() {
        if (enteredTast.trim()==="") {
            return;
        }
        onAddTask(enteredTast);
        setEnteredTask("");
      }
    return (
        <div className="flex items-center gap-4">
            <input type="text" className="w-90 px-4 py-1 rounded-sm bg-stone-200" onChange={handleChange} value={enteredTast}/>
            
            <button className="text-stone-700 rounded-sm p-2 hover:bg-green-800 hover:text-stone-100 font-serif" onClick={handleClick}>Add Task</button>
        </div>
    )
}