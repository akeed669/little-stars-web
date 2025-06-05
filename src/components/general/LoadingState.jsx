export function LoadingState({ message = "Loading our stories..." }) {
    return (
        <div className="min-h-screen flex justify-center items-center">
            <div className="flex flex-col items-center gap-4">
                <div className="flex gap-3">
                    <span className="text-5xl animate-bounce" style={{ animationDelay: "0ms" }}>📚</span>
                    <span className="text-5xl animate-bounce" style={{ animationDelay: "150ms" }}>🎨</span>
                    <span className="text-5xl animate-bounce" style={{ animationDelay: "300ms" }}>✏️</span>
                </div>
                <p className="text-2xl text-teal-500 font-[Patrick_Hand]">
                    {message}
                </p>
            </div>
        </div>
    );
}