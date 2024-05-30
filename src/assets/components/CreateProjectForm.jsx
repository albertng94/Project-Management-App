import { useRef } from "react";

const labelStyle = "font-bold text-stone-500";
const inputStyle = "bg-stone-300 border-b-2 border-b-stone-400 rounded-sm focus:border-b-2 focus:border-b-stone-900 focus:outline-none";

export default function CreateProjectForm({ onClose, onCreateProject }) {

    const projectTitle = useRef();
    const projectDescription = useRef();
    const projectDueDate = useRef();

    function handleSubmit() {
        let submittedProject = {
                title: projectTitle.current.value,
                description: projectDescription.current.value,
                dueDate: projectDueDate.current.value
            };
        onCreateProject(submittedProject);
        console.log(projectDescription.current.value);
    }

    return (
        <div className="w-full pt-40 flex flex-col items-center gap-5">
            <form className="flex flex-col gap-5 w-[700px]" onSubmit={handleSubmit}>
                <div className="flex justify-end">
                    <button type="button" onClick={onClose} className="rounded-md py-2 px-4">Cancel</button>
                    <button type="submit" className="bg-stone-900 text-white rounded-md py-2 px-6">Save</button>
                </div>
                <div className="flex flex-col">
                    <label className={labelStyle} htmlFor="title">TITLE</label>
                    <input ref={projectTitle} className={inputStyle} id="title" type="text" required/>
                </div>
                <div className="flex flex-col">
                    <label className={labelStyle} htmlFor="description">DESCRIPTION</label>
                    <textarea ref={projectDescription} className={inputStyle} id="description" cols="50" rows="3" required></textarea>
                </div>
                <div className="flex flex-col">
                    <label className={labelStyle} htmlFor="due-date">DUE DATE</label>
                    <input ref={projectDueDate} className={inputStyle} id="due-date" type="date" required/>
                </div>
            </form>
        </div>
    );
}