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
                setError('Oops! Something went wrong loading the fun.');
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
            <div className="flex justify-center items-center min-h-64 bg-yellow-50 p-6 rounded-lg shadow-md">
                <div className="text-pink-500 text-xl font-bold animate-bounce">Loading magic...</div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="bg-red-100 border border-red-300 rounded-lg p-6 text-center">
                <p className="text-red-700 font-semibold">{error}</p>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 py-10 bg-gradient-to-br from-pink-50 to-blue-50 rounded-lg shadow-lg">
            {/* Article Section */}
            {article.title && article.content && (
                <div className="bg-white rounded-2xl shadow-md p-6 mb-10 border-2 border-yellow-200">
                    <h3 className="text-3xl font-bold mb-4 text-pink-500 font-[Comic_Sans_MS,cursive]">
                        {article.title}
                    </h3>
                    <p className="text-gray-800 text-lg whitespace-pre-wrap font-[Comic_Sans_MS,cursive]">
                        {article.content}
                    </p>
                </div>
            )}

            {/* Gallery */}
            {gallery.length > 0 && (
                <div className="mb-10">
                    <div className="bg-white rounded-3xl shadow-md overflow-hidden max-w-3xl mx-auto border-4 border-blue-200">
                        <div className="relative aspect-[3/2]">
                            <img
                                src={gallery[currentImageIndex].imageUrl}
                                alt={gallery[currentImageIndex].caption}
                                className="w-full h-full object-cover rounded-t-3xl"
                            />
                            <button
                                onClick={prevImage}
                                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-yellow-400 text-white text-2xl p-3 rounded-full hover:bg-yellow-500 shadow-lg"
                                aria-label="Previous image"
                            >
                                ⬅
                            </button>
                            <button
                                onClick={nextImage}
                                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-yellow-400 text-white text-2xl p-3 rounded-full hover:bg-yellow-500 shadow-lg"
                                aria-label="Next image"
                            >
                                ➡
                            </button>
                        </div>
                        <p className="p-4 text-purple-600 text-center font-semibold text-lg bg-yellow-50">
                            {gallery[currentImageIndex].caption}
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Events;
