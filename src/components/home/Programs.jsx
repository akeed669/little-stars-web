const programsList = [
    {
        title: "Preschool",
        age: "6 months to 5 years",
        color: "from-pink-500 to-rose-400",
        icon: "👶"
    },
    {
        title: "Daycare & Homework",
        age: "All ages welcome",
        color: "from-blue-500 to-cyan-400",
        icon: "📚"
    },
    {
        title: "Grade R",
        age: "School readiness",
        color: "from-green-500 to-emerald-400",
        icon: "🎨"
    },
    {
        title: "Grade 1-3",
        age: "Foundation phase",
        color: "from-yellow-500 to-amber-400",
        icon: "✏️"
    }
];

function ProgramCard({ title, age, color, icon }) {
    return (
        <div className="relative group overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
            <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-90 group-hover:opacity-100 transition-opacity`} />
            <div className="relative p-8 text-white text-center">
                <span className="text-4xl mb-4 block">{icon}</span>
                <h3 className="text-xl font-[Patrick_Hand] mb-2">{title}</h3>
                <p className="text-sm opacity-90">{age}</p>
            </div>
        </div>
    );
}

export function Programs() {
    return (
        <div className="container mx-auto px-4 py-16">
            <h2 className="text-3xl font-[Patrick_Hand] text-center text-gray-800 mb-12">
                Our Programs
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {programsList.map((program, index) => (
                    <ProgramCard key={index} {...program} />
                ))}
            </div>
        </div>
    );
}