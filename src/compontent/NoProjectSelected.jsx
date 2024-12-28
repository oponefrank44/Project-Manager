import noprojectImg from "../assets/no-projects.png";
import Button from "./Button";
export default function NoProjectSelected({onStratAddProject}) {
  return (
    <div className="mt-24 text-center w-2/3">
      <img
        className="w-16 h-16 object-contain mx-auto rounded-lg"
        src={noprojectImg}
        alt="An empty task list"
      />
      <h2 className="text-xl font-bold text-stone-500 mt-4 ">
        No Project Selected
      </h2>
      <p className="text-stone-500 mb-4">Select a project or create a new project</p>
      <p className="mt-8">
      <Button onClick={onStratAddProject}>
        Create new  Project
      </Button>
      </p>
    </div>
  );
}
