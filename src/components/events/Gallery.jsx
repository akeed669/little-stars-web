export function Gallery({ images, currentIndex, onPrev, onNext, onSelect }) {
    return (
        <div className="mb-10">
            <div className="bg-white rounded-3xl shadow-lg overflow-hidden max-w-3xl mx-auto relative group">
                <div className="relative aspect-[3/2]">
                    <img
                        src={images[currentIndex].imageUrl}
                        alt={images[currentIndex].caption}
                        className="w-full h-full object-cover"
                    />
                    <NavigationButtons onPrev={onPrev} onNext={onNext} />
                </div>
                <div className="p-6 bg-gradient-to-r from-purple-50 to-pink-50">
                    <p className="font-[Patrick_Hand] text-xl text-center text-gray-800">
                        {images[currentIndex].caption}
                    </p>
                </div>
            </div>
            <ImageCounter
                total={images.length}
                current={currentIndex}
                onSelect={onSelect}
            />
        </div>
    );
}

function NavigationButtons({ onPrev, onNext }) {
    return (
        <>
            <button
                onClick={onPrev}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 backdrop-blur-sm w-12 h-12 flex items-center justify-center rounded-full hover:bg-white transition-all duration-300 group-hover:left-6"
                aria-label="Previous image"
            >
                <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                </svg>
            </button>
            <button
                onClick={onNext}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 backdrop-blur-sm w-12 h-12 flex items-center justify-center rounded-full hover:bg-white transition-all duration-300 group-hover:right-6"
                aria-label="Next image"
            >
                <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
            </button>
        </>
    );
}

function ImageCounter({ total, current, onSelect }) {
    return (
        <div className="flex justify-center mt-4 gap-2">
            {Array.from({ length: total }, (_, index) => (
                <button
                    key={index}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${current === index
                            ? 'bg-purple-500 w-6'
                            : 'bg-gray-300 hover:bg-gray-400'
                        }`}
                    onClick={() => onSelect(index)}
                    aria-label={`Go to image ${index + 1}`}
                />
            ))}
        </div>
    );
}