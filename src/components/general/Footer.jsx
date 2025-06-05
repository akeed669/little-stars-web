function Footer() {
    const contactInfo = [
        { icon: "🏫", text: "51A Botha Street, Ladybrand", href: "https://goo.gl/maps/yourLocation" },
        { icon: "📱", text: "073 237 9504", href: "tel:0732379504" },
        { icon: "✉️", text: "littlestarspp7@gmail.com", href: "mailto:littlestarspp7@gmail.com" }
    ];

    const socialLinks = [
        { icon: "fab fa-facebook", href: "#", label: "Facebook", bgColor: "bg-blue-500 hover:bg-blue-600" },
        { icon: "fab fa-instagram", href: "#", label: "Instagram", bgColor: "bg-gradient-to-br from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700" }
    ];

    const animals = ["🦁", "🐘", "🦒", "🐯", "🦊", "🐼", "🐨", "🦄"];

    return (
        <footer className="relative mt-8">
            {/* Decorative Top Border */}
            <div className="absolute top-0 left-0 right-0 h-1 flex">
                <div className="w-1/5 h-full bg-pink-400"></div>
                <div className="w-1/5 h-full bg-purple-400"></div>
                <div className="w-1/5 h-full bg-yellow-400"></div>
                <div className="w-1/5 h-full bg-teal-400"></div>
                <div className="w-1/5 h-full bg-blue-400"></div>
            </div>

            {/* Big Playful Animals Banner */}
            <div className="bg-gradient-to-r from-yellow-50 to-pink-50 overflow-hidden py-4">
                <div className="flex animate-marquee whitespace-nowrap">
                    {[...animals, ...animals].map((animal, index) => (
                        <span
                            key={index}
                            className="text-5xl mx-8 hover:scale-125 hover:rotate-12 transition-all duration-300 cursor-default animate-bounce-slow"
                            title="Hello!"
                        >
                            {animal}
                        </span>
                    ))}
                </div>
            </div>

            {/* Main Footer Content */}
            <div className="bg-gradient-to-b from-white to-gray-50 py-6">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                        {/* Contact Info */}
                        <div className="flex flex-wrap justify-center md:justify-start gap-4">
                            {contactInfo.map((item, index) => (
                                <a
                                    key={index}
                                    href={item.href}
                                    className="group flex items-center bg-white px-4 py-2 rounded-full shadow-sm hover:shadow-md transition-all duration-300 text-sm text-gray-600 hover:text-gray-800"
                                >
                                    <span className="mr-2 transform group-hover:scale-110 transition-transform duration-300">
                                        {item.icon}
                                    </span>
                                    <span className="group-hover:underline">{item.text}</span>
                                </a>
                            ))}
                        </div>

                        {/* Social Links & Copyright */}
                        <div className="flex flex-col items-center md:items-end gap-4">
                            <div className="flex gap-3">
                                {socialLinks.map((link, index) => (
                                    <a
                                        key={index}
                                        href={link.href}
                                        aria-label={link.label}
                                        className={`${link.bgColor} w-10 h-10 rounded-full flex items-center justify-center text-white shadow-sm hover:shadow-md transform hover:scale-110 transition-all duration-300`}
                                    >
                                        <i className={`${link.icon} text-lg`}></i>
                                    </a>
                                ))}
                            </div>
                            <div className="text-center md:text-right">
                                <p className="text-sm font-medium text-gray-600">
                                    © {new Date().getFullYear()} Little Stars
                                </p>
                                <p className="text-xs text-gray-500 flex items-center justify-center md:justify-end gap-2 mt-1">
                                    <span className="animate-pulse">✨</span>
                                    <span className="bg-gradient-to-r from-teal-500 to-blue-500 bg-clip-text text-transparent font-medium">
                                        Nurturing bright futures
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;