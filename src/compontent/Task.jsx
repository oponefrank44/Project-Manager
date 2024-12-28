import NewTask from "./NewTask";

export default function Task({ tasks, onAddTask, onDeletetask }) {
  return (
    <section>
      <h2 className="text-stone-900 text-2xl font-bold my-4 ">Tasks</h2>
      <NewTask onAddTask={onAddTask}  />
      {tasks.length === 0 && (
        <p className="text-stone-700 mb-4">
          This project does not have any tasks yet
        </p>
      )}
      {tasks.length > 0 && (
        <ul className="p-4 rounded-md bg-stone-100">
          {tasks.map((task) => (
            <li key={task.id} className="flex justify-between my-4">
              <span> {task.text}</span>
              <button onClick={()=>onDeletetask(task.id)} className="text-stone-700 hover:text-red-600">
                clear
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
