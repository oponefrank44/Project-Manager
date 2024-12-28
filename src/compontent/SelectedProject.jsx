import Task from "./Task";


export default function SelectedProject({ tasks,project ,ondelete,onAddTask,onDeletetask}) {
  const formattedDate = new Date(project.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
  return (
    <div className="w-[35rem] mt-16">
      <header className="pb-4 mb-4 border-b-2 border-stone-300">
        <div className="flex items-center justify-between ">
          <h1 className="tect-3xl font-bold text-stone-600 mb-2">
            {project.title}
          </h1>
          <button onClick={ondelete} className="text-stone-600 hover: hover:bg-red-800 hover:text-stone-100 rounded-md p-2">
            Delete
          </button>
        </div>
        <p className="mb-4 text-stone-400">{formattedDate}</p>
        <p className="text-stone-600 whitespace-pre-wrap">
          {project.description}
        </p>
      </header>
     <Task  onAddTask={onAddTask} onDeletetask={ onDeletetask} tasks={tasks}/>
    </div>
  );
}
