import { createPortal } from "react-dom";

export default function CreateProjectForm() {
    return createPortal(
        <dialog className="dialog w-full" open>
            <form method="dialog" className="flex flex-col gap-5">
                <div className="flex justify-end">
                    <button className="rounded-md py-2 px-4">Cancel</button>
                    <button className="bg-stone-900 text-white rounded-md py-2 px-6">Save</button>
                </div>
                <div className="flex flex-col">
                    <label className="font-bold text-stone-500" for="title">TITLE</label>
                    <input className="bg-stone-300 border-b-2 border-b-stone-400 rounded-sm" id="title" type="text" required/>
                </div>
                <div className="flex flex-col">
                    <label className="font-bold text-stone-500" for="description">DESCRIPTION</label>
                    <textarea className="bg-stone-300 border-b-2 border-b-stone-400 rounded-sm" name="" id="description" cols="50" rows="3"></textarea>
                </div>
                <div className="flex flex-col">
                    <label className="font-bold text-stone-500" for="due-date">DUE DATE</label>
                    <input className="bg-stone-300 border-b-2 border-b-stone-400 rounded-sm" id="due-date" type="date" required/>
                </div>
            </form>
        </dialog>, document.getElementById("modal-root")
    );
}