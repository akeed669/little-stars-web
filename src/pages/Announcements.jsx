import React, { useState, useEffect } from 'react';
import { fetchAnnouncements } from '../services/airtable';
import { LoadingState } from '../components/general/LoadingState';
import { ErrorState } from '../components/general/ErrorState';
import { AnnouncementCard } from '../components/announcements/AnnouncementCard';
import { EmptyState } from '../components/announcements/EmptyState';
import { NewsletterSection } from '../components/announcements/NewsletterSection';

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

    if (loading) return <LoadingState message="Loading our stories..." />;
    if (error) return <ErrorState message={error} />;

    return (
        <div className="min-h-screen bg-gradient-to-br from-white via-yellow-50 to-pink-50 py-12">
            {/* Playful Top Border */}
            <div className="absolute top-0 left-0 right-0 h-3 bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-400 rounded-b-lg"></div>

            <div className="container mx-auto px-4 max-w-5xl">
                {/* Header Section */}
                <div className="text-center mb-12">
                    <div className="inline-block relative">
                        <h1 className="text-4xl font-[Patrick_Hand] text-gray-800 mb-2 relative">
                            School Announcements
                        </h1>
                        <div className="absolute -bottom-2 left-0 right-0 h-2 bg-yellow-200 opacity-50 rounded-full"></div>
                    </div>
                    <p className="text-gray-600 mt-6 font-[Patrick_Hand] text-lg">
                        Stay updated with our latest news and events!
                    </p>
                </div>

                {/* Content Section */}
                <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-b from-yellow-100/20 to-pink-100/20 rounded-3xl -m-6"></div>
                    {announcements.length > 0 ? (
                        <div className="space-y-6 relative">
                            {announcements.map((announcement, index) => (
                                <AnnouncementCard
                                    key={index}
                                    {...announcement}
                                    formatDate={formatDate}
                                />
                            ))}
                        </div>
                    ) : (
                        <EmptyState />
                    )}
                </div>

                {/* Newsletter Section */}
                <NewsletterSection />
            </div>
        </div>
    );
}

export default Announcements;