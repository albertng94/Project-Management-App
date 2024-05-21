import ProjectsSidebar from "./assets/components/ProjectsSidebar";
import MainDisplay from "./assets/components/MainDisplay";
import CreateProjectForm from "./assets/components/CreateProjectForm";

import { useState } from "react";


function App() {

  const [createProject, setCreateProject] = useState(false);

  function handleClickCreateProjectButton() {
      setCreateProject(true);
      console.log(createProject);
  }

  function handleCloseCreateProjectDialog() {
    setCreateProject(false);
  }

  function handleSubmitProject() {
    setCreateProject(false);
  }

  return (
    <>
      <ProjectsSidebar onClick={handleClickCreateProjectButton} />
      {createProject ? <CreateProjectForm onClose={handleCloseCreateProjectDialog} onSubmit={handleSubmitProject} /> : <MainDisplay onClick={handleClickCreateProjectButton} />}
    </>
  );
}

export default App;
