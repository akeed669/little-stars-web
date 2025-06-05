import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/logo.jpeg';

function Header() {
    const location = useLocation();

    const isActive = (path) => {
        return location.pathname === path;
    };

    const navLinks = [
        { to: "/", text: "Home", icon: "🏠", color: "hover:bg-yellow-100 hover:text-yellow-700" },
        { to: "/announcements", text: "Announcements", icon: "📢", color: "hover:bg-pink-100 hover:text-pink-700" },
        { to: "/about", text: "About Us", icon: "✨", color: "hover:bg-purple-100 hover:text-purple-700" },
        { to: "/events", text: "Events", icon: "🎨", color: "hover:bg-blue-100 hover:text-blue-700" }
    ];

    return (
        <header className="relative bg-gradient-to-b from-white to-yellow-50">
            {/* Decorative Top Border */}
            <div className="absolute top-0 left-0 right-0 h-1.5 flex">
                <div className="w-1/5 h-full bg-yellow-400"></div>
                <div className="w-1/5 h-full bg-pink-400"></div>
                <div className="w-1/5 h-full bg-purple-400"></div>
                <div className="w-1/5 h-full bg-blue-400"></div>
                <div className="w-1/5 h-full bg-teal-400"></div>
            </div>

            <div className="max-w-6xl mx-auto px-4 py-6 mt-1.5">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    {/* Logo and Title Section */}
                    <div className="flex items-center justify-center md:justify-start group">
                        <div className="relative">
                            <img
                                src={logo}
                                alt="Little Stars Logo"
                                className="h-20 w-20 rounded-full border-4 border-yellow-200 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105"
                            />
                            <span className="absolute -top-1 -right-1 text-2xl animate-bounce">⭐</span>
                        </div>
                        <div className="ml-4">
                            <h1 className="text-3xl font-[Patrick_Hand] text-gray-800 relative">
                                Little Stars
                                <span className="absolute -top-4 -right-4 text-lg rotate-12">✨</span>
                            </h1>
                            <p className="text-sm bg-gradient-to-r from-teal-500 to-blue-500 bg-clip-text text-transparent font-medium">
                                Preschool and Primary
                            </p>
                        </div>
                    </div>

                    {/* Navigation Section */}
                    <nav className="mt-6 md:mt-0">
                        <ul className="flex flex-wrap justify-center gap-3">
                            {navLinks.map(({ to, text, icon, color }) => (
                                <li key={to}>
                                    <Link
                                        to={to}
                                        className={`
                                            inline-flex items-center px-5 py-2.5 rounded-full text-sm font-medium
                                            transition-all duration-300 group relative
                                            ${isActive(to)
                                                ? 'bg-gradient-to-r from-teal-50 to-blue-50 text-teal-700 shadow-md'
                                                : `text-gray-600 ${color}`
                                            }
                                        `}
                                    >
                                        <span className="mr-2 text-xl transition-transform duration-300 group-hover:scale-125 group-hover:rotate-12">
                                            {icon}
                                        </span>
                                        {text}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
}

export default Header;