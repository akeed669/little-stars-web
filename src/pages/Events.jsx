import { useState, useEffect } from 'react';
import { fetchEvents, fetchGallery, fetchArticle } from '../services/airtable';

function Events() {

    const [gallery, setGallery] = useState([]);
    const [article, setArticle] = useState({ title: '', content: '' });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadData = async () => {
            try {
                const [galleryData, articleData] = await Promise.all([

                    fetchGallery(),
                    fetchArticle()
                ]);

                setGallery(galleryData);
                setArticle(articleData);
            } catch (err) {
                setError('Failed to load data');
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        loadData();
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
                <div className="text-orange-500">Loading...</div>
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

            {/* Newspaper Article */}
            {article.title && article.content && (
                <div className="bg-white rounded-lg shadow-md p-6 mb-8 border border-gray-200">
                    <h3 className="text-2xl font-semibold mb-4 text-orange-500">{article.title}</h3>
                    <p className="text-gray-700 whitespace-pre-wrap">{article.content}</p>
                </div>
            )}

            {/* Gallery */}
            {gallery.length > 0 && (
                <div className="mb-8">
                    <h3 className="text-2xl font-semibold mb-4 text-orange-500">Event Gallery</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {gallery.map((item, index) => (
                            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                                <img
                                    src={item.imageUrl}
                                    alt={item.caption}
                                    className="w-full h-48 object-cover"
                                />
                                <p className="p-4 text-gray-600 text-center">{item.caption}</p>
                            </div>
                        ))}
                    </div>
                </div>
            )}

        </div>
    );
}

export default Events;