import { ArrowUpRight, Github } from "lucide-react";
import AnimatedButton from "../components/AnimatedButton";

const projects = [
  {
    title: "strona1",
    description: "Opis projektu",
    image: "./projects/project1.png",
    tags: ["React", "JavaScript", "TailwindCSS"],
    github: "#",
  },
  {
    title: "strona2",
    description: "Opis projektu2",
    image: "./projects/project2.png",
    tags: ["React", "JavaScript", "TailwindCSS"],
    github: "#",
  },
  {
    title: "strona3",
    description: "Opis projektu3",
    image: "./projects/project1.png",
    tags: ["React", "JavaScript", "TailwindCSS"],
    github: "#",
  },
];

const Projects = () => {
  return (
    <section className="py-32 relative overflow-hidden" id="projects">
      <div className="absolute top-1/4 right-0 w-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mx-auto max-w-3xl mb-16 animate-fade-in animation-delay-100">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Featured Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-secondary-foreground">
            Project
            <span className="font-serif italic font-normal text-white">
              {" "}
              with something
            </span>
          </h2>
          <p className="text-mute-foreground animate-fade-in animation-delay-200">
            Wybrane projekty
          </p>
        </div>
        <div>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
                style={{ animationDelay: `${(index + 1) * 100}ms` }}
              >
                <div className=" relative overflow-hidden aspect-video">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-linear-to-t  from-card via-card/50 to-transparent opacity-60" />
                  <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 duration-300 ">
                    <a
                      href={project.github}
                      className=" p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  </div>
                </div>
                <div className="p-6 space-y-4">
                  <div className=" flex items-start justify-between">
                    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <ArrowUpRight className="w-5 h-5 text-mute-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                  </div>
                  <p className="text-mute-foreground text-sm">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border
                                       border-border/50 text-mute-foreground hover:border-primary/50
                                       hover:text-primary transition-all duration-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="text-center mt-12 animate-fade-in animation-delay-300">
          <AnimatedButton>
            Wszystkie Projekty
            <ArrowUpRight className="w-5 h-5" />
          </AnimatedButton>
        </div>
      </div>
    </section>
  );
};

export default Projects;
