export function EmptyState() {
    return (
        <div className="bg-white rounded-3xl shadow-md p-16 text-center">
            <div className="space-y-6">
                <div className="text-7xl animate-bounce-slow">🌟</div>
                <h3 className="text-2xl font-[Patrick_Hand] text-gray-800">
                    All Quiet Here
                </h3>
                <p className="text-gray-600">
                    No announcements right now. Check back soon for updates!
                </p>
                <div className="flex justify-center gap-4 text-3xl">
                    <span className="animate-pulse">✨</span>
                    <span className="animate-bounce">🎨</span>
                    <span className="animate-pulse">✨</span>
                </div>
            </div>
        </div>
    );
}