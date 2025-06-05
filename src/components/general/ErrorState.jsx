export function ErrorState({ message }) {
    return (
        <div className="min-h-screen flex justify-center items-center p-4">
            <div className="bg-red-50 border-2 border-red-200 p-8 rounded-3xl max-w-xl w-full">
                <div className="flex flex-col items-center text-center gap-4">
                    <span className="text-6xl animate-bounce">🎨</span>
                    <p className="text-red-700 font-[Patrick_Hand] text-xl">{message}</p>
                    <p className="text-red-600 text-sm flex items-center gap-2">
                        <span>✨</span>
                        Let's try again soon!
                        <span>✨</span>
                    </p>
                </div>
            </div>
        </div>
    );
}