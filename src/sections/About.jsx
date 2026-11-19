import { Code2, Lightbulb, Rocket, Users, } from "lucide-react";

const highlights = [
    {
        icon: Code2,
        title: "Clean Code",
        description: "Writing maintainable, scalable code that stands the test of time",
    },

    {
        icon: Rocket,
        title: "Performance",
        description: "Optimising for speed and delivering lightning-fast user experience",

    },

    {
        icon: Users,
        title: "Collaboration",
        description: "Working closely with teams to bring ideas to life",

    },

    {
        icon: Lightbulb,
        title: "Innovation",
        description: "Staying ahead with the technologies and best practices",
    },
];

export const About = () => {
    return (
        <section id="about" className="py-32 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left Column */}
                    <div className="space-y-8">
                        <div className="animate-fade-in">
                            <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">About Me</span>
                        </div>

                        <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
                            Building the future,
                            <span className="font-serif italic font-normal text-white"> one component at a time</span>
                        </h2>

                        <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
                            <p>
                                I am a motivated Software Engineer with a strong passion for building innovative, 
                                reliable, and user-focused technology solutions. 
                                My expertise includes backend development, web application development, 
                                Python programming, database management, and API integration. 
                                I enjoy transforming ideas into practical software solutions 
                                that solve real-world problems while continuously expanding my technical knowledge and skills.
                            </p>
                            <p>
                                I have hands-on experience developing web applications and AI-powered systems, 
                                including an AI-Based Email Spam Classification System that integrates machine learning 
                                with web technologies. I am passionate about writing clean, maintainable code, 
                                designing efficient systems, solving complex technical challenges, 
                                and exploring emerging technologies. I am committed to continuous learning 
                                and improving my ability to build secure, scalable, and efficient applications 
                                that deliver meaningful value to users and businesses.
                            </p>
                            <p>
                                Beyond writing code, I value teamwork, creativity, problem-solving, 
                                and continuous improvement. I am eager to collaborate with developers, 
                                businesses, and organizations to turn innovative ideas into impactful digital products. 
                                My goal is to grow as a software professional, contribute to meaningful technology projects, 
                                and use my skills to create solutions that make a difference. 
                                This portfolio showcases my projects, technical capabilities, 
                                and commitment to building the future through technology.
                            </p>
                        </div>
                        <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
                            <p className="text-lg font-medium italic text-foreground">
                                "My mission is to develop innovative, reliable, and impactful software solutions 
                                that solve real-world problems, simplify everyday tasks, and create opportunities 
                                for individuals and businesses."
                            </p>
                            
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="grid sm:grid-cols-2 gap-6">
                        {highlights.map((item, idx) =>(
                            <div key={idx} className="glass p-6 rounded-2xl animate-fade-in"
                                style={{animationDelay:`${(idx + 1) * 100}ms`}}
                            >
                                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                                    <item.icon className="w-6 h-6 text-primary"/>
                                </div>
                                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                                <p className="text-sm text-muted-foreground">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};