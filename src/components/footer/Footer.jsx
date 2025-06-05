import { RainbowBorder } from './RainbowBorder';
import { AnimalsMarquee } from './AnimalsMarquee';
import { ContactInfo } from './ContactInfo';
import { SocialLinks } from './SocialLinks';
import { Copyright } from './Copyright';

export default function Footer() {
    return (
        <footer className="relative mt-8">
            <RainbowBorder />
            <AnimalsMarquee />

            <div className="bg-gradient-to-b from-white to-gray-50 py-8">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                        <ContactInfo />
                        <Copyright />
                        <div className="flex flex-col items-center md:items-end gap-6">
                            <SocialLinks />

                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}