import { Link } from 'react-router-dom';
import logo from '../assets/logo.jpeg';


function Header() {
    return (
        <header className="text-center py-4 bg-teal-500 text-white">
            <img src={logo} alt="Little Stars Logo" className="mx-auto h-24" />
            <h1 className="text-2xl font-bold my-2">Little Stars Preschool and Primary</h1>
            <nav className="flex justify-center space-x-4">
                <Link to="/" className="text-lg hover:text-yellow-300">Home</Link>
                <Link to="/announcements" className="text-lg hover:text-yellow-300">Announcements</Link>
                <Link to="/about" className="text-lg hover:text-yellow-300">About Us</Link>
                <Link to="/events" className="text-lg hover:text-yellow-300">Events</Link>
            </nav>
        </header>
    );
}

export default Header;