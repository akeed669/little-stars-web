import { Hero } from '../components/about/Hero';
import { Mission } from '../components/about/Mission';
import { Programs } from '../components/about/Programs';
import { Team } from '../components/about/Team';
import { Connect } from '../components/about/Connect';

function About() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-white to-yellow-50">
            <div className="container mx-auto px-4 py-16">
                <Hero />
                <Mission />
                <Programs />
                <Team />
                <Connect />
            </div>
        </div>
    );
}

export default About;