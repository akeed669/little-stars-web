import { Link } from 'react-router-dom';
import logo from '../assets/logo.jpeg';

function Header() {
    return (
        <header className="bg-gradient-to-r from-pink-200 to-blue-200 py-6 shadow-md rounded-b-3xl">
            <div className="flex flex-col items-center">
                <img
                    src={logo}
                    alt="Little Stars Logo"
                    className="h-28 w-auto rounded-full border-4 border-white shadow-lg mb-3 hover:animate-bounce transition"
                />

                <h1 className="text-3xl font-extrabold text-pink-600 font-[Comic_Sans_MS,cursive]">
                    Little Stars Preschool and Primary
                </h1>
                <nav className="mt-4 flex flex-wrap justify-center gap-4 px-4">
                    <Link
                        to="/"
                        className="bg-yellow-300 text-pink-800 font-semibold py-2 px-5 rounded-full shadow hover:bg-yellow-400 transition"
                    >
                        Home
                    </Link>
                    <Link
                        to="/announcements"
                        className="bg-green-300 text-green-900 font-semibold py-2 px-5 rounded-full shadow hover:bg-green-400 transition"
                    >
                        Announcements
                    </Link>
                    <Link
                        to="/about"
                        className="bg-purple-300 text-purple-800 font-semibold py-2 px-5 rounded-full shadow hover:bg-purple-400 transition"
                    >
                        About Us
                    </Link>
                    <Link
                        to="/events"
                        className="bg-blue-300 text-blue-800 font-semibold py-2 px-5 rounded-full shadow hover:bg-blue-400 transition"
                    >
                        Events
                    </Link>
                </nav>
            </div>
        </header>
    );
}

export default Header;
