import playing from '../assets/playing.jpg';

function Home() {
    return (
        <div>
            <img src={playing} alt="Kids Playing" className="w-full h-64 object-cover mb-4 rounded" />
            <h2 className="text-2xl text-center mb-4 text-orange-500">Nurturing Young Stars in Ladybrand!</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
                <div className="p-4 bg-orange-100 rounded">
                    <h3 className="font-bold text-orange-500">Play-Based Learning</h3>
                    <p>Ages 2-6, creative curriculum.</p>
                </div>
                <div className="p-4 bg-orange-100 rounded">
                    <h3 className="font-bold text-orange-500">Safe Campus</h3>
                    <p>Secure environment with outdoor play.</p>
                </div>
                <div className="p-4 bg-orange-100 rounded">
                    <h3 className="font-bold text-orange-500">Aftercare</h3>
                    <p>Support for working parents.</p>
                </div>
                <div className="p-4 bg-orange-100 rounded">
                    <h3 className="font-bold text-orange-500">Holiday Programs</h3>
                    <p>Fun activities year-round.</p>
                </div>
            </div>
            <div className="text-center">
                <h3 className="text-xl font-bold text-orange-500 mb-2">Contact Us</h3>
                <p>51A Botha Street, Ladybrand, 9745<br />Phone: 061 708 4155<br />Email: info@littlestarspreschool.co.za</p>
                <a href="mailto:info@littlestarspreschool.co.za" className="inline-block mt-2 bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600">Get in Touch</a>
            </div>
        </div>
    );
}

export default Home;