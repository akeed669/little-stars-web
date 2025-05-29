function About() {
    return (
        <div>
            <h2 className="text-2xl mb-4 text-teal-500">About Us</h2>
            <p className="mb-4">We provide a nurturing, play-based environment to spark curiosity.</p>
            <h3 className="text-xl font-bold mb-2 text-teal-500">Our Team</h3>
            <p>Ms. Sarah, Lead Teacher: 10+ years experience.</p>
            <h3 className="text-xl font-bold mb-2 mt-4 text-teal-500">Connect With Us</h3>
            <div className="flex justify-center space-x-4">
                <a href="https://facebook.com" className="text-teal-500 hover:text-teal-600"><i className="fab fa-facebook fa-2x"></i></a>
                <a href="https://instagram.com" className="text-teal-500 hover:text-teal-600"><i className="fab fa-instagram fa-2x"></i></a>
            </div>
        </div>
    );
}

export default About;