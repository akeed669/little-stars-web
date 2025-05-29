import { useState, useEffect } from 'react';
import { fetchGallery, fetchArticle } from '../services/airtable';

function Events() {
    const [gallery, setGallery] = useState([]);
    const [article, setArticle] = useState({ title: '', content: '' });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

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

    const nextImage = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === gallery.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevImage = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === 0 ? gallery.length - 1 : prevIndex - 1
        );
    };

    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-64">
                <div className="text-teal-500">Loading...</div>
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
                    <h3 className="text-2xl font-semibold mb-4 text-teal-500">{article.title}</h3>
                    <p className="text-gray-700 whitespace-pre-wrap">{article.content}</p>
                </div>
            )}

            {/* Gallery Slideshow */}
            {gallery.length > 0 && (
                <div className="mb-8">
                    {/* <h3 className="text-2xl font-semibold mb-4 text-teal-500">Event Gallery</h3> */}
                    <div className="bg-white rounded-lg shadow-md overflow-hidden max-w-3xl mx-auto">
                        <div className="relative aspect-[3/2]">
                            <img
                                src={gallery[currentImageIndex].imageUrl}
                                alt={gallery[currentImageIndex].caption}
                                className="w-full h-full object-contain"
                            />
                            <button
                                onClick={prevImage}
                                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-teal-500 text-white p-2 rounded-full hover:bg-teal-600 focus:outline-none"
                                aria-label="Previous image"
                            >
                                ←
                            </button>
                            <button
                                onClick={nextImage}
                                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-teal-500 text-white p-2 rounded-full hover:bg-teal-600 focus:outline-none"
                                aria-label="Next image"
                            >
                                →
                            </button>
                        </div>
                        <p className="p-4 text-gray-600 text-center">{gallery[currentImageIndex].caption}</p>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Events;