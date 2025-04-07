import React from 'react';

const teamMembers = [
    {
        id: 1,
        name: 'Ann Maria K',
        position: 'Hardware Developer',
        image: '/Ann.png',
    },
    {
        id: 2,
        name: 'Soham Patra',
        position: 'ML developer',
        image: '/Soham.png',
    },
    {
        id: 3,
        name: 'Shatadru Bhattacharya',
        position: 'Full Stack Developer',
        image:'/SB.png',
    },
    
];

const MeetOurTeam = () => {
    return (
        <div id="team" className="px-6 py-16 ">
            <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF5F6D] to-[#FFC371] font-heading text-center mb-20">
                Meet Our Team
            </h2>
            <div className="max-w-5xl mx-auto flex flex-col gap-12">
                {teamMembers.map((member, index) => (
                    <div 
                        key={member.id} 
                        className={`flex flex-col md:flex-row items-center gap-8 md:gap-12 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                    >
                        {/* Profile Image */}
                        <div className="flex-shrink-0">
                            <img
                                src={member.image}
                                alt={member.name}
                                className="w-40 h-40 md:w-48 md:h-48 object-cover rounded-full border-4 border-white shadow-lg"
                            />
                        </div>

                        {/* Description Box */}
                        <div className="flex flex-col bg-white/5 backdrop-blur-md p-6 md:p-8 rounded-lg shadow-lg w-full md:w-2/3">
                            <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF5F6D] to-[#FFC371] font-heading">{member.name}</h3>
                            <p className="text-lg text-gray-400 mt-2 font-body">{member.position}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MeetOurTeam;