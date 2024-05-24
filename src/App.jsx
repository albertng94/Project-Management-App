import ProjectsSidebar from "./assets/components/ProjectsSidebar";
import MainDisplay from "./assets/components/MainDisplay";
import CreateProjectForm from "./assets/components/CreateProjectForm";

import { useState } from "react";

let listOfProjects = [];

function App() {

  const [createProject, setCreateProject] = useState(false);

  function handleClickCreateProjectButton() {
      setCreateProject(true);
  }

  function handleCloseCreateProjectDialog() {
    setCreateProject(false);
  }

  function handleSubmitProject(submittedProject) {
    listOfProjects.push(submittedProject);
    setCreateProject(false);
  }

  return (
    <>
      <ProjectsSidebar onClick={handleClickCreateProjectButton} listOfProjects={listOfProjects} />
      {createProject ? 
      <CreateProjectForm 
      onClose={handleCloseCreateProjectDialog}
      onCreateProject={handleSubmitProject} 
      /> : 
      <MainDisplay 
      onClick={handleClickCreateProjectButton} 
      />}
    </>
  );
}

export default App;

