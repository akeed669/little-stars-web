import { useState, useEffect } from 'react';
import { fetchGallery, fetchArticle } from '../services/airtable';
import { LoadingState } from '../components/general/LoadingState';
import { ErrorState } from '../components/general/ErrorState';
import { ArticleSection } from '../components/events/ArticleSection';
import { Gallery } from '../components/events/Gallery';

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

    if (loading) return <LoadingState message="Loading our events..." />;
    if (error) return <ErrorState message={error} />;

    return (
        <div className="container mx-auto px-4 py-10">
            <div className="h-2 bg-gradient-to-r from-pink-400 via-yellow-400 to-purple-400 rounded-full mx-4 mb-8"></div>

            {article.title && article.content && (
                <ArticleSection
                    title={article.title}
                    content={article.content}
                />
            )}

            {gallery.length > 0 && (
                <Gallery
                    images={gallery}
                    currentIndex={currentImageIndex}
                    onPrev={prevImage}
                    onNext={nextImage}
                    onSelect={setCurrentImageIndex}
                />
            )}
        </div>
    );
}

export default Events;
