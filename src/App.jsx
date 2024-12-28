import { useState } from "react";
import ProjectSlide from "./compontent/Projectslide";
import NewProject from "./compontent/NewProject";
import NoProjectSelected from "./compontent/NoProjectSelected";
import SelectedProject from "./compontent/SelectedProject";


function App() {
  const [projectState, setProjectState] = useState({
    selectedProject: undefined,
    completed: false,
    project: [],
    tasks: [],
  });
  function handleAddTask(text) {
    setProjectState((prestate) => {
      const taskId = Math.random();
      const newTask = {
        text: text,
        projectId: prestate.selectedProject,
        id: taskId,
      };
      return {
        ...prestate,
        tasks: [...prestate.tasks, newTask],
      };
    });
  }
  function handleDeleteTask(id) {
    setProjectState((prev) => {
      return {
        ...prev,
        selectedProject: undefined,
        tasks: prev.tasks.filter((task) => task.id != id),
      };
    });
  }
  function handleStartAddProject() {
    setProjectState((prev) => {
      return {
        ...prev,
        selectedProject: null,
      };
    });
  }
  function handleDeleteProject() {
    setProjectState((prev) => {
      return {
        ...prev,
        selectedProject: undefined,
        project: prev.project.filter(
          (project) => project.id != prev.selectedProject
        ),
      };
    });
  }
  function handleCancelAddProject() {
    {
      setProjectState((prev) => {
        return {
          ...prev,
          selectedProject: undefined,
        };
      });
    }
  }
  function handleAddProject(projectData) {
    setProjectState((prestate) => {
      const projectId = Math.random();
      const newProject = {
        ...projectData,
        id: projectId,
      };
      return {
        ...prestate,
        selectedProject: undefined,
        project: [...prestate.project, newProject],
      };
    });
  }
  function handleSelectProject(id) {
    setProjectState((prev) => {
      return {
        ...prev,
        selectedProject: id,
      };
    });
  }
  function handleCompleteted(event) {
    if (event.target.checked) {
      setProjectState((prev) => {
        return {
          ...prev,
          completed: true,
        };
      });
    } else {
      setProjectState((prev) => {
        return {
          ...prev,
          completed: false,
        };
      });
    }
  }

  const selectedProject = projectState.project.find(
    (project) => project.id === projectState.selectedProject
  );

  let content = (
    <SelectedProject
      project={selectedProject}
      ondelete={handleDeleteProject}
      onAddTask={handleAddTask}
      onDeletetask={handleDeleteTask}
      tasks={projectState.tasks}
    />
  );
  if (projectState.selectedProject === null) {
    content = (
      <NewProject
        onAdd={handleAddProject}
        cancelproject={handleCancelAddProject}
      />
    );
  } else if (projectState.selectedProject === undefined) {
    content = <NoProjectSelected onStratAddProject={handleStartAddProject} />;
  }
  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSlide
        onStratAddProject={handleStartAddProject}
        projectstate={projectState}
        handleCheck={handleCompleteted}
        onSelectProject={handleSelectProject}
        selectedProjectId={projectState.selectedProject}
      />
      {content}
    </main>
  );
}

export default App;
