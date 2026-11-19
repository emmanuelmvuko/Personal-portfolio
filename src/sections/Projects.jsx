import { ArrowUpRight } from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton"
import { FaGithub } from "react-icons/fa";
const projects = [
    {
        title: "AI-Based email spam classification system",
        description: "An AI system that classifys emails as either spam or ham.",
        image: "/project1.png",
        tags: ["Python", "Scikit-learn", "Gmail API", "HTML", "Pandas", "SQLite", "JavaScript"],
        link: "#",
        github: "https://github.com/emmanuelmvuko/Spam-detector",
    },

    {
        title: "Markben Hotel",
        description: "A hotel website displaying the services offered, and visitors can book rooms or tables or book for an event.",
        image: "/project2.png",
        tags: ["html", "CSS", "JavaScript"],
        link: "#",
        github: "https://github.com/emmanuelmvuko/Markben-Hotel",
    },

    {
        title: "Weather App",
        description: "A weather web app where one can enter city name and find details of the weather in that city.",
        image: "/project3.png",
        tags: ["html", "CSS", "JavaScript"],
        link: "#",
        github: "https://github.com/emmanuelmvuko/Weather-app",
    },

    {
        title: "The Trading Bot",
        description: "A trading bot that analyse market trends and automatic excecute trades and closes trades based on trends lines.",
        image: "project4.jpeg",
        tags: ["Python", "pandas", "REST APIs"],
        link: "#",
        github: "https://github.com/emmanuelmvuko/TradingBot",
    },
];

export const Projects = () => {
    return (
        <section id="projects" className="py-32 relative overflow-hidden">
            {/* Bg glows */}
            <div className="absolute top-1/4 right-0 w-96 bg-primary/5 rounded-full blur-3xl"/>
            <div className="absolute bottom-1/4 left-0 w-64 bg-highlight/5 rounded-full blur-3xl"/>
            <div className="container mx-auto px-6 relative z-10">
                {/* Section header */}
                <div className="text-center mx-auto max-w-3xl mb-16">
                    <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">Featured Work</span>
                    <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
                        Projects that
                        <span className="font-serif italic font-normal text-white"> make an impact.</span>
                    </h2>
                    <p className=" text-muted-foreground animate-fade-in animation-delay-200">
                        A selection of my recent work, from complex web applications 
                        to innovative tools that solve real-world problems.
                    </p>
                </div>

                {/* Projects Grid */}
                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((project, idx) => (
                        <div key={idx} className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1" style={{animationDelay: `${(idx + 1) * 100} ms`}}>
                            {/* Image */}
                            <div className="relative overflow-hidden aspect-video">
                                <img src= {project.image} alt= {project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"/>
                                <div
                                className="absolute inset-0 bg-linear-to-t
                                 from-card via-card/50 
                                 to-transparent opacity-60"
                                />

                                {/* Overlay Links */}
                                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <a href={project.link} className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all">
                                        <ArrowUpRight className="w-5 h-5"/>
                                    </a>
                                    <a href={project.github} className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all">
                                        <FaGithub className="w-5 h-5"/>
                                    </a>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6 space-y-4">
                                <div className="flex items-start justify-between">
                                    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">{project.description.title}</h3>
                                    <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all"/>
                                </div>
                                <p className="text-muted-foreground text-sm">{project.description}</p>
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag, tagidx) => (
                                        <span key={tagidx} className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300">{tag}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}

                </div>
                {/*view all CTA*/}
                <div className="text-center mt-12 animate-fade-in animation-delay-500">
                   <AnimatedBorderButton
                     onClick={() => {
                            const link = document.createElement("a");
                            link.href = "https://github.com/emmanuelmvuko";
                            link.click();
                        }}
                   >
                    View All projects
                    <ArrowUpRight className="w-5 h-5"/> 
                   </AnimatedBorderButton>
                </div>
            </div>
        </section>
    );
};