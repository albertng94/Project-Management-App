export default function ProjectsSidebar({ onClick, listOfProjects, onProjectSelection, isSelected }) {

    const liStyle = "text-stone-400 mb-2 py-1 px-2 hover:bg-stone-800 hover:text-stone-100";

    
    const liSelectedStyle = "text-stone-400 mb-2 py-1 px-2 bg-stone-800 text-stone-100";
    

    return (
        <div className=" flex flex-col shrink-0 bg-stone-900 gap-10 px-10 w-96 text-white rounded-tr-2xl">
            <h2 className="mt-20 font-bold text-2xl">YOUR PROJECTS</h2>
            <button onClick={onClick} className="w-36 py-2 px-3 bg-stone-700 text-lg text-stone-400 rounded-lg hover:bg-stone-600 hover:text-stone-100">+ Add Project</button>
            <div>
                <ul>
                    {listOfProjects.map((project, projectIndex) => (
                        <li key={projectIndex} className={isSelected === projectIndex ? liSelectedStyle : liStyle}>
                            <button onClick={onProjectSelection} id={projectIndex} className="w-full text-left">
                                {project.title}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}