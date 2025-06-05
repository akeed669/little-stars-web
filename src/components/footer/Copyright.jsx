export function Copyright() {
    return (
        <div className="text-center md:text-right">
            <p className="text-lg font-medium text-gray-600">
                © {new Date().getFullYear()} Little Stars
            </p>
            <p className="text-xs text-gray-500 flex items-center justify-center md:justify-end gap-2 mt-1">
                <span className="animate-pulse">✨</span>
                <span className="bg-gradient-to-r from-teal-500 to-blue-500 bg-clip-text text-transparent font-medium text-lg">
                    Nurturing bright futures
                </span>
            </p>
        </div>
    );
}