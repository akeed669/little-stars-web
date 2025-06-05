import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons';

export function SocialLinks() {
    const socialLinks = [
        {
            icon: faFacebookF,
            href: import.meta.env.VITE_FACEBOOK_URL || "#",
            label: "Facebook",
            bgColor: "bg-[#1877F2] hover:bg-[#0d6ae4]",
            iconClasses: "text-xl"
        },
        {
            icon: faInstagram,
            href: import.meta.env.VITE_INSTAGRAM_URL || "#",
            label: "Instagram",
            bgColor: "bg-gradient-to-tr from-[#ff8a00] via-[#e31d65] to-[#8134af]",
            iconClasses: "text-2xl"
        }
    ];

    return (
        <div className="flex gap-4">
            {socialLinks.map((link, index) => (
                <a
                    key={index}
                    href={link.href}
                    aria-label={link.label}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`
                        ${link.bgColor} w-14 h-14 rounded-2xl
                        flex items-center justify-center text-white
                        shadow-md hover:shadow-xl transform hover:scale-110 hover:-rotate-6
                        transition-all duration-300
                    `}
                >
                    <FontAwesomeIcon icon={link.icon} className={link.iconClasses} />
                </a>
            ))}
        </div>
    );
}