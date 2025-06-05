export function AnnouncementCard({ title, description, date, formatDate }) {
    return (
        <div className="bg-white rounded-3xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border-2 border-gray-100 group relative">
            {/* Decorative Corner Elements */}
            <div className="absolute top-0 left-0 w-16 h-16 bg-gradient-to-br from-yellow-100 to-yellow-200 -translate-x-8 -translate-y-8 rounded-full"></div>
            <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-blue-100 to-blue-200 translate-x-12 translate-y-12 rounded-full"></div>

            <div className="p-8 relative">
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                    {/* Content Section */}
                    <div className="flex-1">
                        <h3 className="text-2xl font-[Patrick_Hand] text-gray-800 mb-4 group-hover:text-purple-600 transition-colors">
                            <span className="relative inline-block">
                                {title}
                                <div className="absolute -bottom-2 left-0 right-0 h-2 bg-yellow-200 opacity-40 rounded-full transform origin-left transition-all duration-300 group-hover:scale-x-110"></div>
                            </span>
                        </h3>
                        <p className="text-gray-600 relative z-10 leading-relaxed">
                            {description}
                        </p>
                    </div>

                    {/* Date Badge */}
                    <div className="shrink-0">
                        <div className="bg-gradient-to-br from-purple-50 to-pink-50 px-6 py-4 rounded-2xl shadow-sm group-hover:shadow-md transition-all duration-300 transform group-hover:-rotate-2">
                            <time className="text-sm font-[Patrick_Hand] text-purple-700 whitespace-nowrap block text-center">
                                {formatDate(date)}
                            </time>
                            <div className="mt-2 flex justify-center">
                                <span className="text-lg transform group-hover:scale-125 transition-transform duration-300">
                                    📌
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}