function About() {
    return (
        <div className="container mx-auto px-4 py-8 font-[Patrick_Hand] text-lg text-gray-800">
            <h2 className="text-4xl text-pink-500 mb-6 text-center">🎨 About Us</h2>
            <p className="mb-6 text-center max-w-xl mx-auto">
                Welcome to our cozy corner! We believe in learning through play and imagination.
                Our nurturing environment is designed to spark curiosity, kindness, and joy in every child.
            </p>

            <div className="bg-white shadow-lg rounded-3xl p-6 mb-8">
                <h3 className="text-2xl text-teal-500 mb-4">👩‍🏫 Our Team</h3>
                <ul className="list-disc pl-6 space-y-2">
                    <li><span className="font-bold">Ms. Sarah</span> – Lead Teacher with 10+ years of experience bringing joy and learning together!</li>
                    <li><span className="font-bold">Mr. Ben</span> – Our music & movement specialist who turns every day into a dance party!</li>
                    <li><span className="font-bold">Ms. Lily</span> – Craft queen and storytime superstar!</li>
                </ul>
            </div>

            <div className="bg-yellow-50 shadow-inner rounded-2xl p-6 text-center">
                <h3 className="text-2xl text-teal-500 mb-4">📬 Connect With Us</h3>
                <p className="mb-4">We love sharing smiles and updates. Follow us for daily fun and photos!</p>
                <div className="flex justify-center space-x-6 text-3xl">
                    <a
                        href="https://facebook.com"
                        className="text-blue-600 hover:text-blue-800 transition"
                        aria-label="Facebook"
                    >
                        <i className="fab fa-facebook"></i>
                    </a>
                    <a
                        href="https://instagram.com"
                        className="text-pink-500 hover:text-pink-600 transition"
                        aria-label="Instagram"
                    >
                        <i className="fab fa-instagram"></i>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default About;
