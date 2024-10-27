// pages/team.js
import Image from 'next/image';

const Team = () => {
    const teamMembers = [
        {
            name: "Vikram Sinha",
            title: "Founder / CEO",
            description: "Tech innovator solving real-world problems.",
            imgSrc: "/in1.jpg",
        },
        {
            name: "Radhika Iyer",
            title: "Chief Strategy Officer",
            description: "Drives growth with strategic insights.",
            imgSrc: "/inf1.jpg",
        },
        {
            name: "Ethan Mitchell",
            title: "Lead Product Designer",
            description: "Designs seamless and innovative user experiences.",
            imgSrc: "/am1.jpg",
        },
        {
            name: "Meera Joshi",
            title: "Head of Digital Marketing",
            description: "Boosts online presence and recognition.",
            imgSrc: "/inf2.jpg",
        },
        {
            name: "Chris Anderson",
            title: "Content Strategist",
            description: "Creates engaging content strategies.",
            imgSrc: "/am2.jpg",
        },
        {
            name: "Sophia Miller",
            title: "Social Media Manager",
            description: "Builds brands through social media.",
            imgSrc: "/amf1.jpg",
        },
        {
            name: "Amit Verma",
            title: "Senior UI/UX Designer",
            description: "Crafts intuitive and appealing interfaces.",
            imgSrc: "/in2.jpg",
        },
        {
            name: "Nisha Rao",
            title: "Brand Manager",
            description: "Maintains strong brand identity.",
            imgSrc: "/amf2.jpg",
        },
        {
            name: "Benjamin Harris",
            title: "SEO Specialist",
            description: "Optimizes content for search rankings.",
            imgSrc: "/am3.jpg",
        },
        {
            name: "Olivia Brown",
            title: "Content Writer",
            description: "Develops engaging and informative content.",
            imgSrc: "/inf4.jpg",
        },
        {
            name: "Rajesh Kannan",
            title: "Graphic Designer",
            description: "Creates visually striking designs.",
            imgSrc: "/in3.jpg",
        },
        {
            name: "Aditi Shah",
            title: "Public Relations Manager",
            description: "Manages media relations and communication.",
            imgSrc: "/inf5.jpg",
        },
        {
            name: "James Cooper",
            title: "Business Analyst",
            description: "Uses data to drive decisions.",
            imgSrc: "/am4.jpg",
        },
        {
            name: "Priya Desai",
            title: "HR Manager",
            description: "Optimizes talent management and environment.",
            imgSrc: "/amf3.jpg",
        },
        {
            name: "Robert Taylor",
            title: "Technical Support Lead",
            description: "Ensures smooth technical operations.",
            imgSrc: "/am5.jpg",
        },
        {
            name: "Sneha Menon",
            title: "Project Manager",
            description: "Manages projects for quality outcomes.",
            imgSrc: "/amf4.jpg",
        },
    ];

    return (
        <section className="ezy__team7 light py-14 bg-[#020817]  text-white ">
            <div className="container px-4 mx-auto">
                <div className="flex justify-center mb-6 md:mb-12">
                    <div className="text-center w-[80vw]">
                        <h2 className="text-3xl leading-none font-bold md:text-[45px] mb-4 text-white">Our Experts Team</h2>
                        <p className="text-xl font-normal mt-2 text-white">
                            At Everything Talent, our innovative team develops AI-driven assessments and an advanced ATS to modernize hiring. We focus on reducing bias, making recruitment efficient, and providing accessible tools for companies of all sizes to attract top talent.
                        </p>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {teamMembers.map((member) => (
                        <div className="flex justify-center" key={member.name}>
                            <div className="relative w-full max-w-[100px] max-h-[100px] h-full group cursor-pointer">
                                <Image
                                    alt={member.name}
                                    loading="lazy"
                                    width={70}
                                    height={70}
                                    className="max-w-[100px] w-full h-full max-h-[100px] rounded-full cursor-pointer"
                                    src={member.imgSrc}
                                />
                                <div className="absolute top-0 -mt-[2.5rem] md:-mt-[0rem] group-hover:opacity-100 max-h-[200px] opacity-0 transition-all duration-300 ease-in-out left-1/2 z-10 -translate-x-1/2 pointer-events-none">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#2564ebb6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="absolute text-[#2564ebb6] -bottom-[7px] group-hover:opacity-100 opacity-0 transition-all duration-200 left-1/2 z-0 -translate-x-1/2 lucide lucide-triangle">
                                        <path d="M13.73 4a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
                                    </svg>
                                    <div className="rounded-lg max-h-[200px] w-[100px] h-fit group-hover:w-[300px] group-hover:h-fit bg-blue-600 bg-opacity-60 backdrop-blur-lg transform translate-y-full transition-all duration-300 flex flex-col justify-center items-center text-center p-0">
                                        <h4 className="text-2xl font-medium mb-1 text-white">{member.name}</h4>
                                        <p className="text-sm mb-4 text-white">{member.title}</p>
                                        <p className="text-white opacity-75">{member.description}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="py-12 relative z-20">
                <div className="border bg-card text-card-foreground shadow-sm max-w-[850px] w-full m-auto rounded-xl">
                    <div className="flex flex-col space-y-1.5 p-6">
                        <h3 className="text-2xl font-semibold leading-none tracking-tight text-white">Our Culture</h3>
                        <p className="text-sm text-muted-foreground text-white">
                            We foster a collaborative and inclusive environment where innovation thrives, professional growth is supported, and every team member is valued.
                        </p>
                    </div>
                    <div className="p-6 pt-0 text-white">
                        Everything Talent is built on the principles of collaboration, respect, and continuous growth. We are a team of dedicated professionals passionate about improving the hiring experience for both employers and candidates. Our culture fosters creativity, encourages learning, and supports each individual’s development.
                    </div>
                    <div className="p-6 pt-0 text-white">
                        We are driven by a shared commitment to making a positive impact on the world of recruitment. As we grow, we remain focused on delivering solutions that are not only effective but also aligned with our core values. We invite you to join us on this journey and experience the difference our platform can make in your hiring process.
                    </div>
                    <div className="items-center p-6 pt-0 flex justify-between text-white">
                        <a href="/support">
                            <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 rounded bg-gradient-to-b from-blue-500 to-blue-600 text-white focus:ring-2 focus:ring-blue-400 hover:shadow-xl transition duration-200 h-10 px-4 py-2">
                                Contact Us
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default Team;
