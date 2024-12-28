import { useRef } from "react";
import Input from "./Input";
import Model from "./Modal";


export default function NewProject({ onAdd ,cancelproject}) {
  const classParagh="text-stone-800 mb-4"
  const modal=useRef();
  const title = useRef();
  const description = useRef();
  const date = useRef();
  function handleSave() {
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDate = date.current.value;
    if(enteredTitle.trim()===""||enteredDescription.trim()===""||enteredDate.trim()===""){
        modal.current.open();
        return;
    }
    onAdd({
      title: enteredTitle,
      description: enteredDescription,
      date: enteredDate,
    });
  }
  

  return (
    <>
    <Model ref={modal} buttonCaption="Close">
      <h2 className="text-xl font-bold text-stone-800 mt-4 ">Invalid input</h2>
      <p className={classParagh}>Opps.... look like you forget to enter a value</p>
      <p className={classParagh}>please make sure you provide a valid value for each input field </p>
    </Model>
    <div className="w-[35rem] mt-16">
      <menu className=" flex items-center justify-end gap-4 my-4">
        <li>
          <button onClick={cancelproject} className="text-stone-800   hover:text-stone-300  ">
            Cancel
          </button>
        </li>
        <li>
          <button
            className=" px-6 py-2 rounded-md bg-stone-800 text-stone-300  hover:bg-green-600 gap-4"
            onClick={handleSave}
          >
            Save
          </button>
        </li>
      </menu>
      <div>
        <Input type="text" label="Title" ref={title} />
        <Input label="Description" isTextarea ref={description} />
        <Input type="date" label="Due Date" ref={date} />
      </div>
    </div>
    </>
  );
}
