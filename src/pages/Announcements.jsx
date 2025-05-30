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
                setError('Oops! We couldn’t load the latest announcements.');
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
            <div className="flex justify-center items-center min-h-64 text-xl text-teal-500 font-[Patrick_Hand]">
                Loading announcements...
            </div>
        );
    }

    if (error) {
        return (
            <div className="bg-red-100 border border-red-300 rounded-lg p-6 max-w-xl mx-auto text-center shadow-md font-[Patrick_Hand]">
                <p className="text-red-700 text-lg">❌ {error}</p>
            </div>
        );
    }

    return (
        <Fragment>
            <div className="container mx-auto px-4 py-8 font-[Patrick_Hand]">
                <h2 className="text-3xl text-center text-pink-500 mb-6">School Announcements</h2>

                {announcements.length > 0 ? (
                    <div className="bg-white rounded-3xl shadow-lg overflow-hidden ring-1 ring-teal-100">
                        <div className="overflow-x-auto">
                            <table className="w-full text-left table-fixed">
                                <thead className="bg-teal-400 text-white text-lg">
                                    <tr>
                                        <th className="px-6 py-4">Title</th>
                                        <th className="px-6 py-4">Date</th>
                                        <th className="px-6 py-4">Details</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-teal-100 bg-yellow-50">
                                    {announcements.map((announcement, index) => (
                                        <tr key={index} className="hover:bg-yellow-100 transition">
                                            <td className="px-6 py-4 font-medium text-gray-900">{announcement.title}</td>
                                            <td className="px-6 py-4 text-gray-700">{formatDate(announcement.date)}</td>
                                            <td className="px-6 py-4 text-gray-700">{announcement.description}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                ) : (
                    <div className="bg-white rounded-xl shadow-md p-8 text-center text-gray-500 italic">
                        😴 No announcements right now. Check back soon!
                    </div>
                )}
            </div>

            <div className="mt-8">
                <Newsletter className="bg-white rounded-xl shadow-md p-6 font-[Patrick_Hand]" />
            </div>
        </Fragment>
    );
}

export default Announcements;
