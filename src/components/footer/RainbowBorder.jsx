export function RainbowBorder() {
    const colors = [
        'bg-pink-400',
        'bg-purple-400',
        'bg-yellow-400',
        'bg-teal-400',
        'bg-blue-400'
    ];

    return (
        <div className="absolute top-0 left-0 right-0 h-1.5 flex">
            {colors.map((color, index) => (
                <div key={index} className={`w-1/5 h-full ${color}`} />
            ))}
        </div>
    );
}