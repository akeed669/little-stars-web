import Newsletter from '../../pages/Newsletter';

export function NewsletterSection() {
    return (
        <div className="mt-16 bg-gradient-to-r from-teal-500 to-emerald-400 rounded-3xl shadow-lg overflow-hidden">
            <div className="p-8 text-white">
                <h2 className="text-2xl font-[Patrick_Hand] mb-2">
                    Stay Connected
                </h2>
                <p className="mb-6 opacity-90">
                    Subscribe to our newsletter for the latest updates and announcements.
                </p>
                <Newsletter className="bg-white/10 backdrop-blur-sm rounded-xl p-6" />
            </div>
        </div>
    );
}