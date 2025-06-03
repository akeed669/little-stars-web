import team from '../assets/team.jpeg';

function About() {
    return (
        <div className="container mx-auto px-4 py-8 font-[Patrick_Hand] text-lg text-gray-800">
            <h2 className="text-4xl text-pink-500 mb-6 text-center">About Us</h2>
            <p className="mb-6 text-center max-w-xl mx-auto">
                At Little Stars Pre and Primary Independent School, we are dedicated to nurturing confident, capable, and curious learners from the earliest years through to the foundation phase. We provide a warm, structured, and stimulating environment where excellence is not just encouraged — it's expected.

                Our school is founded on the belief that every child is unique and possesses great potential. We focus on laying strong academic and emotional foundations, preparing our learners for a bright and successful future.

                Our motto, “Creating Our childrens’ Future,” reflects our commitment to guiding each child’s journey with care, purpose, and excellence.
            </p>
            <h1 className="text-center">Preschool</h1>
            <p className="mb-6 text-center max-w-xl mx-auto">


                Our preschool offers a strong academic focus delivered through engaging, age-appropriate activities. Early academic development is key to success, so we provide a structured program that supports foundational skills in literacy, numeracy, and language, alongside social and emotional growth.

                Our experienced educators create a nurturing, supportive environment where children feel safe and inspired to learn. We prepare each child to transition confidently into formal schooling with the skills and knowledge needed to excel.

            </p>
            <h1 className="text-center">Primary (Grades 1–3)
            </h1>
            <p className="mb-6 text-center max-w-xl mx-auto">


                In our foundation phase (Grades 1 to 3), we follow the CAPS curriculum and uphold high academic standards. Our experienced educators create engaging, inclusive classrooms where learners are challenged, supported, and inspired to excel.

                We focus on building strong foundations in literacy, numeracy, and life skills, while also encouraging critical thinking, creativity, and personal responsibility. At Little Stars, excellence is a shared goal between our learners, staff, and families.
                Mission
                To provide high-quality preschool and foundation-phase education that promotes academic excellence, creativity, and holistic development in a safe, supportive, and inclusive environment.
                Vision
                To be a leading independent school known for academic excellence, innovative teaching, and the nurturing of well-rounded, confident learners — equipped for lifelong success

            </p>

            <img
                src={team}
                alt="Kids Playing"
                className="w-full h-auto object-cover mb-6 rounded-3xl shadow-lg scale-90"
            />

            <div className="bg-white shadow-lg rounded-3xl p-6 mb-8">
                <h3 className="text-2xl text-teal-500 mb-4">Our Team</h3>
                <ul className="list-disc pl-6 space-y-2">
                    <li><span className="font-bold">Teacher Faiza</span> – Teacher Faiza brings a joyful energy to the Bumble Bee Forest class, turning learning into an exciting adventure where children are eager to explore and grow.
                    </li>
                    <li><span className="font-bold">Teacher Lebo</span> – Teacher Lebo lovingly guides our Little Steps and Daffodils classes with creativity and patience. She’s known for making every child feel special while sparking their natural curiosity.
                    </li>
                    <li><span className="font-bold">Miss Palesa</span> – Our Grade 1 teacher, Miss Palesa, combines a strong focus on academics with kindness and encouragement, helping each child develop skills and confidence.
                    </li>
                    <li><span className="font-bold">Teacher Caitlyn</span> – A fresh face at Little Stars, Teacher Caitlyn enthusiastically leads the Birds of Paradise (Pre-R) class. She’s passionate about building confidence and nurturing each child’s unique potential.

                    </li>
                    <li><span className="font-bold">Miss Emily</span> – New to our team, Miss Emily warmly welcomes Grade R learners, fostering a supportive and inspiring environment for their important first year of formal schooling.

                    </li>
                    <li><span className="font-bold">Mme Puleng</span> – With calm and gentle care, Mme Puleng assists our classrooms daily, making sure everything runs smoothly and every child feels supported.
                    </li>
                    <li><span className="font-bold">Miss Tinah</span> – Miss Tinah is a trusted helper who supports our teachers and learners alike, always ready with a smile and a caring heart.

                    </li>
                    <li><span className="font-bold">Mrs Patel</span> – Our beloved principal, Mrs Patel, leads Little Stars with wisdom and compassion. She is dedicated to creating a nurturing, excellent learning environment for all our learners and their families.
                    </li>

                </ul>
            </div>

            <div className="bg-yellow-50 shadow-inner rounded-2xl p-6 text-center">
                <h3 className="text-2xl text-teal-500 mb-4">Connect With Us</h3>
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
