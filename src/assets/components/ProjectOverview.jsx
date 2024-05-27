import { useState, useRef } from "react";

export default function ProjectOverview({ selectedProject }) {

    console.log("ProjectOverview updated");
    const inputRef = useRef();
    const [listOfTasks, setListOfTasks] = useState([]);

    function createTask() {
        setListOfTasks((prevListOfTasks) => {
            let newListOfTasks = [...prevListOfTasks];
            newListOfTasks.push(inputRef.current.value);
            console.log(newListOfTasks);
            return newListOfTasks;
        });
    }

    function deleteTask(event) {
        setListOfTasks((prevListOfTasks) => {
            let newListOfTasks = [...prevListOfTasks];
            console.log(event.target.id);
            newListOfTasks.splice(event.target.id, 1);
            console.log(newListOfTasks);
            return newListOfTasks;
        });
    }

    return (
        <div className="w-[700px] pt-20 p-10 flex flex-col items-left gap-5">
            <div className="relative w-[700px] pb-3 flex flex-col gap-3 border-b-2 border-b-stone-300">
                <h1 className="font-bold text-stone-700 text-3xl">{selectedProject.title}</h1>
                <p className="text-stone-400">{selectedProject.dueDate}</p>
                <p className="text-stone-600">{selectedProject.description}</p>
                <button className="text-stone-600 absolute top-1 right-0">Delete</button>
            </div>
            <div className="w-[700px] flex flex-col pb-3 gap-3">
                <h2 className="font-bold text-stone-800 text-2xl">Tasks</h2>
                <div className="flex gap-4 items-center">
                    <input ref={inputRef} className="w-1/2 py-1 px-3 bg-stone-200 rounded-sm focus:outline-blue-600 focus:outline-3"></input>
                    <label htmlFor=""><button onClick={createTask}>Add Task</button></label>
                </div>
            </div>
            <div className="w-[700px] bg-stone-200 py-8 px-3 rounded-sm">
                <ul className="flex flex-col gap-3">
                    {listOfTasks.map((task, taskIndex) => (
                        <div key={taskIndex} className="flex justify-between">
                            <li>{task}</li>
                            <button id={taskIndex} onClick={deleteTask}>Clear</button>
                        </div>
                    ))}
                </ul>
            </div>
        </div>
    );
}