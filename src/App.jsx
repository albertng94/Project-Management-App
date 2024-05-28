import ProjectsSidebar from "./assets/components/ProjectsSidebar";
import CreateProjectForm from "./assets/components/CreateProjectForm";
import DefaultDisplay from "./assets/components/DefaultDisplay";
import ProjectOverview from "./assets/components/ProjectOverview";

import { useState, useRef } from "react";

let listOfProjects = [];

function App() {

  const tasksInput = useRef();

  const [createProject, setCreateProject] = useState(undefined);
  const [selectedProject, setSelectedProject] = useState(undefined);
  const [listOfTasks, setListOfTasks] = useState([]);


  function handleClickCreateProjectButton() {
      setCreateProject(null);
  }

  function handleCloseCreateProjectDialog() {
    setCreateProject(undefined);
  }

  function handleSubmitProject(submittedProject) {
    listOfProjects.push(submittedProject);
    
    if (listOfProjects.length > 0) {
      listOfProjects.forEach((element, index) => {
          element.id = index;
      });
    }
    
    setCreateProject(undefined);
  }

  function handleProjectSelection(event) {
    setSelectedProject(Number(event.target.id));
    setListOfTasks([]);
    setCreateProject(true);
  }

  function createTask() {
    setListOfTasks((prevListOfTasks) => {
      if (listOfProjects[selectedProject].tasks && (listOfProjects[selectedProject].tasks).length > 0) {
        let newListOfTasks = [...listOfProjects[selectedProject].tasks];
        newListOfTasks.push(tasksInput.current.value);
        listOfProjects[selectedProject].tasks = newListOfTasks; 
        return newListOfTasks;
      } else {
        let newListOfTasks = [...prevListOfTasks];
        newListOfTasks.push(tasksInput.current.value);
        listOfProjects[selectedProject] = {
          ...listOfProjects[selectedProject],
          tasks: newListOfTasks
        }; 
        return newListOfTasks;
      }
    });
}

function deleteTask(event) {
    setListOfTasks(() => {
        let newListOfTasks = [...listOfProjects[selectedProject].tasks];
        newListOfTasks.splice(event.target.id, 1);
        listOfProjects[selectedProject].tasks = newListOfTasks;
        return newListOfTasks;
    });
}

  let mainDisplay = <DefaultDisplay onClick={handleClickCreateProjectButton} />;

  if (createProject === null) {
    mainDisplay = <CreateProjectForm onClose={handleCloseCreateProjectDialog} onCreateProject={handleSubmitProject} />;
  } else if (createProject === true) {
    mainDisplay = <ProjectOverview ref={tasksInput} createTask={createTask} selectedProject={listOfProjects[selectedProject]} deleteTask={deleteTask} />;
  }

  return (
    <>
      <ProjectsSidebar 
      onClick={handleClickCreateProjectButton} 
      listOfProjects={listOfProjects} 
      onProjectSelection={handleProjectSelection} 
      />
      {mainDisplay}
    </>
  );
}

export default App;

