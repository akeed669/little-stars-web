import playing from '../assets/playing.jpg';

function Home() {
    return (
        <div className="font-[Patrick_Hand] bg-yellow-50 min-h-screen pb-10 px-4 pt-4">
            <img
                src={playing}
                alt="Kids Playing"
                className="w-full h-64 object-cover mb-6 rounded-3xl shadow-lg"
            />

            <h2 className="text-3xl text-center text-pink-500 mb-8">
                Nurturing Young Stars in Ladybrand!
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-12">
                <div className="bg-pink-100 p-6 rounded-2xl shadow-md text-center hover:scale-105 transition">
                    <h3 className="text-lg text-pink-600 mb-2">Play-Based Learning</h3>
                    <p className="text-sm text-gray-700">Ages 2–6, creative curriculum designed for fun and growth.</p>
                </div>
                <div className="bg-blue-100 p-6 rounded-2xl shadow-md text-center hover:scale-105 transition">
                    <h3 className="text-lg text-blue-600 mb-2">Safe Campus</h3>
                    <p className="text-sm text-gray-700">Secure environment with engaging outdoor spaces.</p>
                </div>
                <div className="bg-green-100 p-6 rounded-2xl shadow-md text-center hover:scale-105 transition">
                    <h3 className="text-lg text-green-600 mb-2">Aftercare</h3>
                    <p className="text-sm text-gray-700">Flexible hours to support working parents.</p>
                </div>
                <div className="bg-yellow-200 p-6 rounded-2xl shadow-md text-center hover:scale-105 transition">
                    <h3 className="text-lg text-yellow-700 mb-2">Holiday Programs</h3>
                    <p className="text-sm text-gray-700">Fun and educational year-round activities.</p>
                </div>
            </div>

            <div className="text-center bg-white p-6 rounded-2xl shadow-md max-w-lg mx-auto">
                <h3 className="text-xl text-teal-500 mb-3">📞 Contact Us</h3>
                <p className="text-sm text-gray-800">
                    51A Botha Street, Ladybrand, 9745<br />
                    Phone: <a href="tel:0617084155" className="underline text-teal-600">073 237 9504</a><br />
                    Email: <a href="mailto:info@littlestarspreschool.co.za" className="underline text-teal-600">littlestarspp7@gmail.com</a>
                </p>
                <a
                    href="mailto:info@littlestarspreschool.co.za"
                    className="inline-block mt-4 bg-pink-500 text-white py-2 px-6 rounded-full shadow hover:bg-pink-600 transition"
                >
                    Get in Touch
                </a>
            </div>
        </div>
    );
}

export default Home;
