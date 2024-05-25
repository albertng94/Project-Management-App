import logo from "../no-projects.png";

export default function DefaultDisplay({ onClick }) {
    return (
        <div id="main-display" className="w-full pt-40 flex flex-col items-center gap-5">
            <img 
            src={logo} 
            alt="A drawing of a notebook and a pen"
            className="w-1/6 max-w-20" 
            />
            <h2 className="font-bold text-2xl text-stone-500">No Project Selected</h2>
            <p className="text-lg text-stone-400">Select a project or get started with a new one</p>
            <button onClick={onClick} className="m-5 py-2 px-5 bg-stone-700 text-lg text-stone-400 rounded-lg">Create new project</button>
        </div>
    );
}