import { useState, useEffect } from 'react';
import { fetchAnnouncements } from '../services/airtable';

function Announcements() {
    const [announcements, setAnnouncements] = useState({ pdf: '', text: [] });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadAnnouncements = async () => {
            try {
                const data = await fetchAnnouncements();
                setAnnouncements(data);
            } catch (err) {
                setError('Failed to load announcements');
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        loadAnnouncements();
    }, []);

    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-64">
                <div className="text-orange-500">Loading announcements...</div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="bg-red-50 border border-red-200 rounded p-4">
                <p className="text-red-600">{error}</p>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <h2 className="text-3xl font-bold mb-6 text-orange-500">Announcements</h2>
            <p className="text-gray-600 mb-8">Stay updated with our latest news and newsletters.</p>

            {/* Newsletter Section */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Latest Newsletter</h3>
                {announcements.pdf ? (
                    <a
                        href={announcements.pdf}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center bg-orange-500 text-white py-3 px-6 rounded-lg hover:bg-orange-600 transition-colors"
                    >
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        Download Newsletter (PDF)
                    </a>
                ) : (
                    <p className="text-gray-500 italic">No newsletter available at the moment.</p>
                )}
            </div>

            {/* Announcements List */}
            <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Current Announcements</h3>
                {announcements.text.length > 0 ? (
                    <ul className="space-y-3">
                        {announcements.text.map((item, index) => (
                            <li key={index} className="flex items-start">
                                <span className="text-orange-500 mr-3 mt-1">•</span>
                                <span className="text-gray-700">{item.item}</span>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p className="text-gray-500 italic">No announcements at this time.</p>
                )}
            </div>
        </div>
    );
}

export default Announcements;