import ProjectsSidebar from "./assets/components/ProjectsSidebar";
import CreateProjectForm from "./assets/components/CreateProjectForm";
import DefaultDisplay from "./assets/components/DefaultDisplay";
import ProjectOverview from "./assets/components/ProjectOverview";

import { useState, useRef } from "react";

let listOfProjects = [];

function App() {

  const tasksInput = useRef();

  // State used to set the component which is displayed.
  const [display, setDisplay] = useState(undefined);
  // State used to set the current selected project.
  const [selectedProject, setSelectedProject] = useState(undefined);
  // State used to create/delete the tasks for the current project.
  const [listOfTasks, setListOfTasks] = useState([]);


  // Open the "CreateProjectForm" component.
  function handleClickCreateProjectButton() {
      setDisplay(null);
      setSelectedProject(undefined);
  }

  // Close the "CreateProjectForm" component or delete the current selected project. Display de "DefaultDisplay" component.
  function handleCloseDeleteProjectDisplay(event) {
    setDisplay(undefined);
    if (event.target.id === "deleteProject") {
      listOfProjects.splice(selectedProject, 1);
    }
  }

  // Create a project, storing its information within the "listOfProjects" array. Display the "DefaultDisplay" component.
  function handleSubmitProject(submittedProject) {
    listOfProjects.push(submittedProject);
    
    if (listOfProjects.length > 0) {
      listOfProjects.forEach((element, index) => {
          element.id = index;
      });
    }
    
    setDisplay(undefined);
  }

  // Define the current selected project and update each stat so that the "ProjectOverview" component is displayed, 
  // the "listOfTasks" variable is reset, and the "selectedProject" variable shows the current project ID.
  function handleProjectSelection(event) {
    setSelectedProject(Number(event.target.id));
    setListOfTasks([]);
    setDisplay(true);
  }

  // Create tasks for the current project and add them to the "listOfProjects" array within the matching "selectedProject" object.
  function createTask() {
    console.log(tasksInput.current.value);
    if (tasksInput.current.value) {
      setListOfTasks((prevListOfTasks) => {
        if (listOfProjects[selectedProject].tasks && (listOfProjects[selectedProject].tasks).length > 0) {
          let newListOfTasks = [...listOfProjects[selectedProject].tasks];
          newListOfTasks.push(tasksInput.current.value);
          listOfProjects[selectedProject].tasks = newListOfTasks; 
          tasksInput.current.value = null;
          return newListOfTasks;
        } else {
          let newListOfTasks = [...prevListOfTasks];
          newListOfTasks.push(tasksInput.current.value);
          listOfProjects[selectedProject] = {
            ...listOfProjects[selectedProject],
            tasks: newListOfTasks
          }; 
          tasksInput.current.value = "";
          return newListOfTasks;
        }
      });
    }
  }

  // Delete tasks for the current project and remove them from the "listOfProjects" array within the matching "selectedProject" object.
  function deleteTask(event) {
    setListOfTasks(() => {
        let newListOfTasks = [...listOfProjects[selectedProject].tasks];
        newListOfTasks.splice(event.target.id, 1);
        listOfProjects[selectedProject].tasks = newListOfTasks;
        return newListOfTasks;
    });
  }

  // Create the "mainDisplay" variable and assign it one of the components to be displayed conditionally depending on the "setDisplay" State's value.
  let mainDisplay = <DefaultDisplay onClick={handleClickCreateProjectButton} />;

  if (display === null) {
    mainDisplay = <CreateProjectForm onClose={handleCloseDeleteProjectDisplay} onCreateProject={handleSubmitProject} />;
  } else if (display === true) {
    mainDisplay = <ProjectOverview ref={tasksInput} createTask={createTask} selectedProject={listOfProjects[selectedProject]} deleteTask={deleteTask} onClick={handleCloseDeleteProjectDisplay} />;
  }

  return (
    <>
      <ProjectsSidebar 
      onClick={handleClickCreateProjectButton} 
      listOfProjects={listOfProjects} 
      onProjectSelection={handleProjectSelection}
      isSelected={selectedProject} 
      />
      {mainDisplay}
    </>
  );
}

export default App;

