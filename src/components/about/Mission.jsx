export function Mission() {
    return (
        <div className="grid md:grid-cols-2 gap-8 mt-16">
            <Card
                title="Our Mission"
                content="To provide high-quality preschool and foundation-phase education that promotes
                        academic excellence, creativity, and holistic development in a safe,
                        supportive, and inclusive environment."
            />
            <Card
                title="Our Vision"
                content="To be a leading independent school known for academic excellence,
                        innovative teaching, and the nurturing of well-rounded, confident
                        learners — equipped for lifelong success."
            />
        </div>
    );
}

function Card({ title, content }) {
    return (
        <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-2xl text-teal-500 font-[Patrick_Hand] mb-4">{title}</h2>
            <p className="text-gray-700">{content}</p>
        </div>
    );
}