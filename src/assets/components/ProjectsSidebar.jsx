

export default function ProjectsSidebar() {
    return (
        <div className=" flex flex-col  bg-stone-900 gap-10 px-10 w-96 text-white rounded-tr-2xl">
            <h2 className="mt-20 font-bold text-2xl">YOUR PROJECTS</h2>
            <button className="w-36 py-2 px-3 bg-stone-700 text-lg text-stone-400 rounded-lg">+ Add Project</button>
            <div>List of projects...</div>
        </div>
    );
}