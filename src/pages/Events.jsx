import { useState, useEffect } from 'react';
import { fetchEvents } from '../services/airtable';

function Events() {
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadEvents = async () => {
            try {
                const data = await fetchEvents();
                setEvents(data);
            } catch (err) {
                setError('Failed to load events');
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        loadEvents();
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
                <div className="text-orange-500">Loading events...</div>
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
            <h2 className="text-3xl font-bold mb-6 text-orange-500">Upcoming Events</h2>
            <p className="text-gray-600 mb-8">Join us for these exciting activities and special occasions.</p>

            {events.length > 0 ? (
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead className="bg-orange-500 text-white">
                                <tr>
                                    <th className="px-6 py-4 text-left font-semibold">Event</th>
                                    <th className="px-6 py-4 text-left font-semibold">Date</th>
                                    <th className="px-6 py-4 text-left font-semibold">Description</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                {events.map((event, index) => (
                                    <tr key={index} className="hover:bg-gray-50">
                                        <td className="px-6 py-4 font-medium text-gray-900">
                                            {event.title}
                                        </td>
                                        <td className="px-6 py-4 text-gray-600">
                                            {formatDate(event.date)}
                                        </td>
                                        <td className="px-6 py-4 text-gray-600">
                                            {event.description}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            ) : (
                <div className="bg-white rounded-lg shadow-md p-8 text-center">
                    <p className="text-gray-500 italic">No upcoming events scheduled at this time.</p>
                </div>
            )}
        </div>
    );
}

export default Events;