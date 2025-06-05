import playing from '../../assets/kiddies.jpg';

export function Hero() {
    return (
        <div className="relative h-[70vh] overflow-hidden">
            <img
                src={playing}
                alt="Kids Playing"
                className="w-full h-full object-cover object-center" // Changed from object-contain
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white p-6 max-w-3xl">
                    <h1 className="text-5xl font-[Patrick_Hand] mb-4 drop-shadow-lg">
                        Nurturing Young Stars in Ladybrand!
                    </h1>
                    <p className="text-xl opacity-90 drop-shadow-md">
                        Where every child's potential shines bright
                    </p>
                </div>
            </div>
        </div>
    );
}