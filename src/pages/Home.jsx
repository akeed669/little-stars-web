import { Hero } from '../components/home/Hero';
import { Programs } from '../components/home/Programs';
import { Contact } from '../components/home/Contact';

function Home() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-white to-yellow-50">
            <Hero />
            <Programs />
            <Contact />
        </div>
    );
}

export default Home;