export function Programs() {
    const programs = [
        {
            title: "Preschool",
            content: "Our preschool offers a strong academic focus delivered through engaging, age-appropriate activities. Early academic development is key to success, so we provide a structured program that supports foundational skills in literacy, numeracy, and language, alongside social and emotional growth. Our experienced educators create a nurturing, supportive environment where children feel safe and inspired to learn. We prepare each child to transition confidently into formal schooling with the skills and knowledge needed to excel.",
            bgColor: "bg-yellow-100"
        },
        {
            title: "Primary (Grades 1–3)",
            content: "In our foundation phase (Grades 1 to 3), we follow the CAPS curriculum and uphold high academic standards. Our experienced educators create engaging, inclusive classrooms where learners are challenged, supported, and inspired to excel. We focus on building strong foundations in literacy, numeracy, and life skills, while also encouraging critical thinking, creativity, and personal responsibility. At Little Stars, excellence is a shared goal between our learners, staff, and families.",
            bgColor: "bg-teal-100"
        }
    ];

    return (
        <div className="mt-20">
            <h2 className="text-3xl text-pink-500 font-[Patrick_Hand] text-center mb-12">
                Our Programs
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
                {programs.map((program, index) => (
                    <ProgramCard key={index} {...program} />
                ))}
            </div>
        </div>
    );
}

function ProgramCard({ title, content, bgColor }) {
    return (
        <div className="bg-white p-8 rounded-2xl shadow-lg relative overflow-hidden">
            <div className={`absolute top-0 right-0 w-32 h-32 ${bgColor} rounded-full -mr-16 -mt-16 opacity-50`}></div>
            <h3 className="text-2xl text-teal-500 font-[Patrick_Hand] mb-4 relative z-10">
                {title}
            </h3>
            <p className="text-gray-700 relative z-10">{content}</p>
        </div>
    );
}