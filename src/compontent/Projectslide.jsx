import Button from "./Button";

export default function ProjectSlide({
  onStratAddProject,
  projectstate,
  handleCheck,
  onSelectProject,
  selectedProjectId,
}) {
  const projects = projectstate.project;

  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-300">
        Project Manager
      </h2>
      <div>
        <Button onClick={onStratAddProject}>+ Add project</Button>
      </div>

      <ul>
        {projects.map((project) => {
          let cssClass="w-full text-left px-2 py-1 rounded-sm my-1 hover:bg-green-800 hover:text-stone-100";
          if(project.id===selectedProjectId){
              cssClass +=" text-stone-300 hover:bg-green-800 hover:text-stone-100";
          }else{
            cssClass+=" text-stone-300 "
          }
          return (
            <li key={project.id} className="flex">
              <button
                onClick={()=>onSelectProject(project.id)}
                className={cssClass}
              >
                {project.title}
              </button>

              <input
                type="checkbox"
                onc
                value={projectstate.completed}
                onChange={handleCheck}
                id="completed"
                name="completed task"
              />
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
