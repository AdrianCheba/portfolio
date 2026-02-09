import { ArrowUpRight, Github } from "lucide-react";
import AnimatedButton from "../components/AnimatedButton";

const projects = [
  {
    title: "Landing Page (Modern UI)",
    description:
      "Responsywny landing page, którego głównym celem było stworzenie minimalistycznego, nowoczesnego interfejsu z płynnymi przejściami. Projekt pozwolił mi na perfekcyjne opanowanie utility-first CSS w Tailwindzie.",
    image: "./projects/project1.png",
    tags: ["React", "JavaScript", "TailwindCSS"],
    github: "https://github.com/AdrianCheba/LandingPage",
  },
  {
    title: "Platforma E-commerce MERN",
    description:
      "Aplikacja typu dashboard do zarządzania asortymentem sklepu. Umożliwia dodawanie nowych produktów z obrazami, dynamiczną edycję cen oraz usuwanie pozycji z bazy w czasie rzeczywistym. Kompletny system CRUD połączony z bazą MongoDB oraz REST API w Node.js.",
    image: "./projects/project2.png",
    tags: [
      "MongoDB",
      "Express.js",
      "React",
      "Node.js",
      "JavaScript",
      "TailwindCSS",
    ],
    github: "https://github.com/AdrianCheba/MERNProductStore",
  },
  {
    title: "Real-time Chat App",
    description:
      "Aplikacja do komunikacji, stawiająca na szybkość i bezpieczeństwo. Dzięki wykorzystaniu Redisa do cachowania wiadomości oraz Pusher, wiadomości docierają do odbiorców natychmiastowo, bez odświeżania strony. Autentykacja przez Kinde, wiadomości w czasie rzeczywistym oraz nowoczesne komponenty UI z biblioteki shadcn.",
    image: "./projects/project3.png",
    tags: [
      "Next.js",
      "TypeScript",
      "Redis",
      "Pusher",
      "Kinde",
      "Cloudinary",
      "shadcn/ui",
      "TailwindCSS",
      "Framer Motion",
    ],
    github: "https://github.com/AdrianCheba/ChatApplication",
  },
];

const Projects = () => {
  return (
    <section className="py-32 relative overflow-hidden" id="projects">
      <div className="absolute top-1/4 right-0 w-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mx-auto max-w-3xl mb-16 animate-fade-in animation-delay-100">
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-secondary-foreground">
            Wybrane
            <span className="font-serif italic font-normal text-white">
              {" "}
              projekty
            </span>
          </h2>
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
          <a
            href="https://github.com/stars/AdrianCheba/lists/web-apps"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AnimatedButton>
              Wszystkie Projekty
              <ArrowUpRight className="w-5 h-5" />
            </AnimatedButton>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
