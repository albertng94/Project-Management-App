import { createPortal } from "react-dom";
import { useRef } from "react";

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
    }

    return createPortal(
        <dialog className="dialog w-full" open>
            <form method="dialog" className="flex flex-col gap-5" onSubmit={handleSubmit}>
                <div className="flex justify-end">
                    <button type="button" onClick={onClose} className="rounded-md py-2 px-4">Cancel</button>
                    <button type="submit" className="bg-stone-900 text-white rounded-md py-2 px-6">Save</button>
                </div>
                <div className="flex flex-col">
                    <label className="font-bold text-stone-500" htmlFor="title">TITLE</label>
                    <input ref={projectTitle} className="bg-stone-300 border-b-2 border-b-stone-400 rounded-sm" id="title" type="text" required/>
                </div>
                <div className="flex flex-col">
                    <label className="font-bold text-stone-500" htmlFor="description">DESCRIPTION</label>
                    <textarea ref={projectDescription} className="bg-stone-300 border-b-2 border-b-stone-400 rounded-sm" name="" id="description" cols="50" rows="3" required></textarea>
                </div>
                <div className="flex flex-col">
                    <label className="font-bold text-stone-500" htmlFor="due-date">DUE DATE</label>
                    <input ref={projectDueDate} className="bg-stone-300 border-b-2 border-b-stone-400 rounded-sm" id="due-date" type="date" required/>
                </div>
            </form>
        </dialog>, document.getElementById("modal-root")
    );
}