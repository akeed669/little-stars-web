export function ArticleSection({ title, content }) {
    return (
        <div className="bg-white rounded-3xl shadow-lg p-8 mb-12 relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-24 h-24 bg-gradient-to-br from-yellow-100 to-yellow-200 -translate-x-12 -translate-y-12 rounded-full"></div>
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-purple-100 to-pink-200 translate-x-16 translate-y-16 rounded-full"></div>

            <div className="relative">
                <h3 className="text-3xl font-[Patrick_Hand] mb-6 text-gray-800 inline-block">
                    {title}
                    <div className="absolute -bottom-2 left-0 right-0 h-2 bg-yellow-200 opacity-40 rounded-full transform origin-left transition-all duration-300 group-hover:scale-x-110"></div>
                </h3>
                <p className="text-gray-700 text-lg leading-relaxed font-[Patrick_Hand] relative z-10">
                    {content}
                </p>
            </div>
        </div>
    );
}