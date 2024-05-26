import ProjectsSidebar from "./assets/components/ProjectsSidebar";
import CreateProjectForm from "./assets/components/CreateProjectForm";
import DefaultDisplay from "./assets/components/DefaultDisplay";
import ProjectOverview from "./assets/components/ProjectOverview";

import { useState } from "react";

let listOfProjects = [];

function App() {

  const [createProject, setCreateProject] = useState(undefined);

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

  function handleProjectSelection() {
    setCreateProject(true);
  }

  let mainDisplay = <DefaultDisplay onClick={handleClickCreateProjectButton} />;

  if (createProject === null) {
    mainDisplay = <CreateProjectForm onClose={handleCloseCreateProjectDialog} onCreateProject={handleSubmitProject} />;
  } else if (createProject === true) {
    mainDisplay = <ProjectOverview />;
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

