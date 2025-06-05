export function Connect() {
    const socialLinks = [
        {
            platform: 'Facebook',
            url: 'https://facebook.com',
            icon: 'fab fa-facebook',
            className: 'bg-blue-600 hover:bg-blue-700'
        },
        {
            platform: 'Instagram',
            url: 'https://instagram.com',
            icon: 'fab fa-instagram',
            className: 'bg-gradient-to-br from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600'
        }
    ];

    return (
        <div className="mt-20 bg-white rounded-2xl shadow-lg p-8 text-center">
            <h2 className="text-2xl text-teal-500 font-[Patrick_Hand] mb-4">Connect With Us</h2>
            <p className="text-gray-700 mb-6">Join our community and stay updated with daily fun and photos!</p>
            <div className="flex justify-center space-x-6">
                {socialLinks.map((link, index) => (
                    <SocialLink key={index} {...link} />
                ))}
            </div>
        </div>
    );
}

function SocialLink({ platform, url, icon, className }) {
    return (
        <a
            href={url}
            className={`${className} text-white p-4 rounded-full transition-colors duration-300`}
            aria-label={platform}
        >
            <i className={`${icon} text-2xl`}></i>
        </a>
    );
}