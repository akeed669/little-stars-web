export function AnimalsMarquee() {
    const animals = ["🦁", "🐘", "🦒", "🐯", "🦊", "🐼", "🐨", "🦄"];

    return (
        <div className="bg-gradient-to-r from-yellow-50 to-pink-50 overflow-hidden py-4">
            <div className="flex animate-marquee whitespace-nowrap">
                {[...animals, ...animals].map((animal, index) => (
                    <span
                        key={index}
                        className="text-5xl mx-8 hover:scale-125 hover:rotate-12 transition-all duration-300 cursor-default animate-bounce-slow"
                        title="Hello!"
                    >
                        {animal}
                    </span>
                ))}
            </div>
        </div>
    );
}