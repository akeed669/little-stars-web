import team from '../../assets/team.jpeg';

export function Team() {
    const teamMembers = [
        {
            name: 'Mrs Patel',
            role: 'Principal',
            description: 'Our beloved principal, leads Little Stars with wisdom and compassion. She is dedicated to creating a nurturing, excellent learning environment for all our learners and their families.'
        },
        {
            name: 'Teacher Faiza',
            role: 'Bumble Bee Forest Class',
            description: 'Brings a joyful energy to the Bumble Bee Forest class, turning learning into an exciting adventure where children are eager to explore and grow.'
        },
        {
            name: 'Teacher Lebo',
            role: 'Little Steps and Daffodils Classes',
            description: 'Lovingly guides our Little Steps and Daffodils classes with creativity and patience. She\'s known for making every child feel special while sparking their natural curiosity.'
        },
        {
            name: 'Miss Palesa',
            role: 'Grade 1 Teacher',
            description: 'Combines a strong focus on academics with kindness and encouragement, helping each child develop skills and confidence.'
        },
        {
            name: 'Teacher Caitlyn',
            role: 'Birds of Paradise (Pre-R) Class',
            description: 'A fresh face at Little Stars, enthusiastically leads the Birds of Paradise class. She\'s passionate about building confidence and nurturing each child\'s unique potential.'
        },
        {
            name: 'Miss Emily',
            role: 'Grade R Teacher',
            description: 'New to our team, warmly welcomes Grade R learners, fostering a supportive and inspiring environment for their important first year of formal schooling.'
        },
        {
            name: 'Mme Puleng',
            role: 'Classroom Assistant',
            description: 'With calm and gentle care, assists our classrooms daily, making sure everything runs smoothly and every child feels supported.'
        },
        {
            name: 'Miss Tinah',
            role: 'Teaching Assistant',
            description: 'A trusted helper who supports our teachers and learners alike, always ready with a smile and a caring heart.'
        }
    ];


    return (
        <div className="mt-20">
            <h2 className="text-3xl text-pink-500 font-[Patrick_Hand] text-center mb-12">
                Meet Our Team
            </h2>
            <div className="grid lg:grid-cols-2 gap-8 items-start">
                <TeamImage image={team} />
                <TeamList members={teamMembers} />
            </div>
        </div>
    );
}

function TeamImage({ image }) {
    return (
        <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-lg">
            <img
                src={image}
                alt="Our dedicated team"
                className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        </div>
    );
}

function TeamList({ members }) {
    return (
        <div className="bg-white rounded-2xl shadow-lg p-6 max-h-[500px] overflow-y-auto">
            <div className="space-y-6">
                {members.map((member, index) => (
                    <TeamMember key={index} {...member} />
                ))}
            </div>
        </div>
    );
}

function TeamMember({ name, role, description }) {
    return (
        <div className="border-l-4 border-teal-500 pl-4 hover:bg-gray-50 transition-colors duration-300">
            <h3 className="text-xl text-teal-500 font-[Patrick_Hand]">{name}</h3>
            <p className="text-sm text-gray-500">{role}</p>
            <p className="mt-1 text-gray-700">{description}</p>
        </div>
    );
}