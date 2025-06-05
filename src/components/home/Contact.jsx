function ContactCard() {
    const contactInfo = [
        { icon: "📍", title: "Visit Us", content: "51A Botha Street\nLadybrand, 9745" },
        { icon: "📞", title: "Call Us", content: "073 237 9504", href: "tel:0732379504" },
        { icon: "📧", title: "Email Us", content: "littlestarspp7@gmail.com", href: "mailto:littlestarspp7@gmail.com" }
    ];

    return (
        <div className="bg-gradient-to-br from-teal-500 to-emerald-400 rounded-3xl shadow-xl p-8 text-white">
            <div className="space-y-8">
                {contactInfo.map((info, index) => (
                    <div key={index}>
                        <h3 className="text-2xl font-[Patrick_Hand] mb-4 flex items-center">
                            <span className="text-2xl mr-3">{info.icon}</span> {info.title}
                        </h3>
                        <p className="ml-9">
                            {info.href ? (
                                <a href={info.href} className="hover:underline">
                                    {info.content}
                                </a>
                            ) : (
                                info.content.split('\n').map((line, i) => (
                                    <span key={i}>
                                        {line}
                                        {i < info.content.split('\n').length - 1 && <br />}
                                    </span>
                                ))
                            )}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}

function EnrollmentCard() {
    const benefits = [
        "Enrollment Process",
        "Available Programs",
        "School Fees",
        "Required Documents"
    ];

    return (
        <div className="bg-white rounded-3xl shadow-xl p-8 border-2 border-teal-100">
            <h3 className="text-2xl font-[Patrick_Hand] text-gray-800 mb-4">
                Ready to Join Our Family?
            </h3>
            <p className="text-gray-600 mb-6">
                We're excited to welcome new stars! Contact us to learn more about:
            </p>
            <ul className="space-y-3 text-gray-600 mb-8">
                {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center">
                        <span className="text-teal-500 mr-2">✓</span> {benefit}
                    </li>
                ))}
            </ul>
            <a
                href="mailto:littlestarspp7@gmail.com"
                className="inline-block bg-gradient-to-r from-teal-500 to-emerald-400 text-white py-3 px-8 rounded-full font-medium hover:from-teal-600 hover:to-emerald-500 transition-all duration-300 shadow-md hover:shadow-lg"
            >
                Enroll Now
            </a>
        </div>
    );
}

export function Contact() {
    return (
        <div className="bg-white">
            <div className="container mx-auto px-4 py-16">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-[Patrick_Hand] text-center text-gray-800 mb-12">
                        Get in Touch
                    </h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <ContactCard />
                        <EnrollmentCard />
                    </div>
                </div>
            </div>
        </div>
    );
}