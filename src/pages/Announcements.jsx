import React, { useState, useEffect, Fragment } from 'react';

import { fetchAnnouncements } from '../services/airtable';
import Newsletter from './Newsletter';

function Announcements() {
    const [announcements, setAnnouncements] = useState([]);
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

    const formatDate = (dateString) => {
        if (!dateString) return 'TBD';
        const date = new Date(dateString);
        return date.toLocaleDateString('en-GB', {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
        });
    };

    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-64">
                <div className="text-teal-500">Loading announcements...</div>
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
        <Fragment>
            <div className="container mx-auto px-4 py-8">
                <h2 className="text-3xl font-bold mb-6 text-teal-500">Announcements</h2>
                {/* <p className="text-gray-600 mb-8">Stay updated with our latest news.</p>             */}

                {/* Announcements Table */}
                {announcements.length > 0 ? (
                    <div className="bg-white rounded-lg shadow-md overflow-hidden">
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead className="bg-teal-500 text-white">
                                    <tr>
                                        <th className="px-6 py-4 text-left font-semibold">Announcement</th>
                                        <th className="px-6 py-4 text-left font-semibold">Date</th>
                                        <th className="px-6 py-4 text-left font-semibold">Description</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200">
                                    {announcements.map((announcement, index) => (
                                        <tr key={index} className="hover:bg-gray-50">
                                            <td className="px-6 py-4 font-medium text-gray-900">{announcement.title}</td>
                                            <td className="px-6 py-4 text-gray-600">{formatDate(announcement.date)}</td>
                                            <td className="px-6 py-4 text-gray-600">{announcement.description}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                ) : (
                    <div className="bg-white rounded-lg shadow-md p-8 text-center">
                        <p className="text-gray-500 italic">No announcements at this time.</p>
                    </div>
                )}

            </div>

            <Newsletter className="bg-white rounded-lg shadow-md p-6 mb-8" />

        </Fragment>
    );
}

export default Announcements;

{/* Newsletter */ }
