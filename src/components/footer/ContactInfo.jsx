export function ContactInfo() {
    const contactInfo = [
        {
            icon: "🏫",
            text: "51A Botha Street, Ladybrand",
            href: "https://goo.gl/maps/yourLocation",
            color: "bg-pink-100 hover:bg-pink-200"
        },
        {
            icon: "📞",
            text: "073 237 9504",
            href: "tel:0732379504",
            color: "bg-purple-100 hover:bg-purple-200"
        },
        {
            icon: "✉️",
            text: "littlestarspp7@gmail.com",
            href: "mailto:littlestarspp7@gmail.com",
            color: "bg-teal-100 hover:bg-teal-200"
        }
    ];

    return (
        <div className="flex flex-wrap justify-center md:justify-start gap-4">
            {contactInfo.map((item, index) => (
                <a
                    key={index}
                    href={item.href}
                    className={`
                        group flex items-center gap-3 px-4 py-2.5 
                        ${item.color} rounded-2xl
                        transform hover:scale-105
                        transition-all duration-300
                    `}
                >
                    {/* Icon Container */}
                    <div className="
                        bg-white p-2 rounded-xl
                        transform group-hover:scale-110
                        transition-transform duration-300
                    ">
                        <span className="text-xl block">{item.icon}</span>
                    </div>

                    {/* Text Container */}
                    <span className="
                        text-sm font-[Patrick_Hand] text-gray-700
                        transition-colors duration-300
                    ">
                        {item.text}
                    </span>
                </a>
            ))}
        </div>
    );
}