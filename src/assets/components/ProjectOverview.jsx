import { forwardRef } from "react";

 const ProjectOverview = forwardRef(function ProjectOverview({ selectedProject, createTask, deleteTask, onClick }, ref) {

    let listOfTasks = [];

    if (selectedProject.tasks) {
        listOfTasks = selectedProject.tasks;
    }

    let tasksDivStyling = "w-[700px] py-8 px-3 rounded-sm";

    if (listOfTasks.length > 0) {
        tasksDivStyling = "w-[700px] bg-stone-200 py-8 px-3 rounded-sm";
    }

    console.log(selectedProject.description);

    return (
        <div className="w-[700px] pt-20 p-10 flex flex-col items-left gap-5">
            <div className="relative w-[700px] pb-3 flex flex-col gap-3 border-b-2 border-b-stone-300">
                <h1 className="font-bold text-stone-700 text-3xl">{selectedProject.title}</h1>
                <p className="text-stone-400">{selectedProject.dueDate}</p>
                <pre className="text-stone-600">{selectedProject.description}</pre>
                <button id="deleteProject" onClick={onClick} className="text-stone-600 absolute top-1 right-0">Delete</button>
            </div>
            <div className="w-[700px] flex flex-col pb-3 gap-3">
                <h2 className="font-bold text-stone-800 text-2xl">Tasks</h2>
                <div className="flex gap-4 items-center">
                    <input id="tasksInput" name="tasksInput" ref={ref} className="w-1/2 py-1 px-3 bg-stone-200 rounded-sm focus:outline-blue-600 focus:outline-3"></input>
                    <label className="text-stone-800" htmlFor="tasksInput"><button onClick={createTask}>Add Task</button></label>
                </div>
            </div>
            <div className={tasksDivStyling}>
                <ul className="flex flex-col gap-3">
                    {(listOfTasks).map((task, taskIndex) => (
                        <div key={taskIndex} className="flex justify-between">
                            <li>{task}</li>
                            <button className="text-stone-800" id={taskIndex} onClick={deleteTask}>Clear</button>
                        </div>
                    ))}
                </ul>
            </div>
        </div>
    );
});

export default ProjectOverview;