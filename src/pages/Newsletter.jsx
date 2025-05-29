import { useState, useEffect } from 'react';
import { fetchNewsletter } from '../services/airtable';

function Newsletter() {
    const [newsletter, setNewsletter] = useState({ pdf: '' });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadNewsletter = async () => {
            try {
                const data = await fetchNewsletter();
                setNewsletter(data);
            } catch (err) {
                setError('Failed to load newsletter');
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        loadNewsletter();
    }, []);

    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-64">
                <div className="text-orange-500">Loading newsletter...</div>
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

            {/* Newsletter Section */}
            <h3 className="text-xl font-semibold mb-4 text-gray-800 text-orange-500">Latest Newsletter</h3>
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                {newsletter.pdf ? (
                    <a
                        href={newsletter.pdf}
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

        </div>
    );
}

export default Newsletter;