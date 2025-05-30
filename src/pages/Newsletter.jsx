import { useState, useEffect } from 'react';
import { fetchNewsletter } from '../services/airtable';

function Newsletter() {
    const [current, setCurrent] = useState(null);
    const [past, setPast] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const load = async () => {
            try {
                const data = await fetchNewsletter();
                setCurrent(data.current);
                setPast(data.past);
            } catch (err) {
                setError('Failed to load newsletters');
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        load();
    }, []);

    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-64">
                <div className="text-teal-500 font-[Patrick_Hand] text-lg">Loading newsletters...</div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="bg-red-50 border border-red-200 rounded-xl p-6 max-w-2xl mx-auto">
                <p className="text-red-600 font-[Patrick_Hand] text-lg text-center">{error}</p>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 py-12 space-y-12">
            {/* Current Newsletter */}
            <div className="bg-teal-50 rounded-3xl shadow-xl ring-1 ring-teal-100 p-8 max-w-2xl mx-auto font-[Patrick_Hand]">
                <h3 className="text-3xl text-center text-teal-600 mb-4">Current Newsletter</h3>
                <p className="text-center text-gray-700 mb-6 text-lg">
                    Stay updated with the latest from school!
                </p>

                {current?.pdf ? (
                    <div className="flex justify-center">
                        <a
                            href={current.pdf}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-teal-500 hover:bg-teal-600 text-white text-lg px-6 py-3 rounded-full shadow-md transition"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                            Download {current.name || 'Newsletter'} (PDF)
                        </a>
                    </div>
                ) : (
                    <p className="text-center text-gray-500 italic text-lg">
                        📭 No newsletter available at the moment.
                    </p>
                )}
            </div>

            {/* Past Newsletters */}
            {past.length > 0 && (
                <div className="max-w-3xl mx-auto font-[Patrick_Hand]">
                    <h4 className="text-2xl text-teal-600 mb-6 text-center">Past Newsletters</h4>
                    <ul className="space-y-3">
                        {past.map((item, idx) => (
                            <li key={idx} className="bg-white rounded-xl shadow p-4 flex items-center justify-between hover:bg-teal-50 transition">
                                <span className="text-lg text-gray-800">{item.name}</span>
                                <a
                                    href={item.pdf}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-teal-600 hover:text-teal-800 underline text-base"
                                >
                                    Download
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}

export default Newsletter;
