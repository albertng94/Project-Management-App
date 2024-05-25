

export default function ProjectOverview() {
    return (
        <div className="w-[700px] pt-20 p-10 flex flex-col items-left gap-5">
            <div className="relative w-[700px] pb-3 flex flex-col gap-3 border-b-2 border-b-stone-300">
                <h1 className="font-bold text-stone-700 text-3xl">Learning React</h1>
                <p className="text-stone-400">Dec 29, 2024</p>
                <p className="text-stone-600">BALBLALBLALVG.\n\nAnd more balbalbalblalbla.</p>
                <button className="text-stone-600 absolute top-1 right-0">Delete</button>
            </div>
            <div className="w-[700px] flex flex-col pb-3 gap-3">
                <h2 className="font-bold text-stone-800 text-2xl">Tasks</h2>
                <div className="flex gap-4 items-center">
                    <input className="w-1/2 py-1 bg-stone-300 rounded-sm focus:outline-blue-600 focus:outline-3"></input>
                    <label htmlFor=""><button>Add Task</button></label>
                </div>
            </div>
            <div className="w-[700px] flex flex-col pb-3 gap-3">
                <ul></ul>
            </div>
        </div>
    );
}