import {
  ArrowRight,
  ChevronDown,
  Github,
  Download,
  Linkedin,
} from "lucide-react";
import { Button } from "../components/Button";
import AnimatedButton from "../components/AnimatedButton";

const skills = [
  "React",
  "JavaScript",
  "Node.js",
  "MongoDB",
  "TailwindCSS",
  "C#",
  "C++",
  "Unity",
  "UnrealEngine",
  "Git",
];

const Hero = () => {
  return (
    <section className="relative min-h-screen items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="./hero-bg.png"
          alt="Hero image"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-linear-to-b from-background/20 via-background/80 to-background"></div>
      </div>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full opacity-60"
            style={{
              backgroundColor: "#20B2A6",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `slow-drift ${
                15 + Math.random() * 20
              }s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>
      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className=" inline-flex items-center gap-2 px-4 py-2 glass text-sm text-primary rounded-full">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                Lorem ipsum
              </span>
            </div>

            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-100">
                Lorem <span className="text-primary glow-text"> ipsum </span>
                <br />
                lorem ipsum
                <br />
                <span className="font-serif italic font-normal text-white">
                  lorem
                </span>
              </h1>
              <p className=" text-lg text-mute-foreground max-w-lg animate-fade-in animation-delay-200">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
            <div className=" flex flex-wrap gap-4 animate-fade-in animation-delay-300">
              <Button size="lg">
                Contact Me <ArrowRight className="w-5 h-5" />
              </Button>
              <AnimatedButton>
                <Download className="w-5 h-5" />
                Download CV
              </AnimatedButton>
            </div>
            <div className="flex items-center gap-4 animate-fade-in animation-delay-400">
              <span className="text-sm text-mute-foreground">Follow: </span>
              {[
                { icon: Github, href: "#" },
                { icon: Linkedin, href: "#" },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="p-2 rounded-full glass  hover:bg-primary/10 hover:text-primary transition-all duration-300"
                >
                  {<social.icon className="w-5 h-5" />}
                </a>
              ))}
            </div>
          </div>
          <div className="relative animate-fade-in animation-delay-300">
            <div className=" relative max-w-md mx-auto">
              <div className="absolute inset-0 rounded-3xl bg-linear-to-br from-primary/30 via-transparent to-primary/10 blur-2xl animate-pulse" />
              <div className="relative glass rounded-3xl p-2 glow-border">
                <img
                  src="./profile-photo.jpg"
                  alt="peonek"
                  className="w-full aspect-4/5 object-cover rounded-2xl"
                />

                <div className="absolute -bottom-4 -right-4 glass rounded-xl px-3 py-4 animate-float">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                    <span className=" text-sm font-medium">
                      Avilable for work
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-20 animate-fade-in animation-delay-600">
          <p className="text-sm text-mute-foreground mb-6 text-center">
            Technologies I work with
          </p>
          <div className="relative overflow-hidden">
            <div className="flex animate-marquee">
              {[...skills, ...skills].map((skill, index) => (
                <div key={index} className="flex shrink-0 px-8 py-4">
                  <span className="text-xl font-semibold text-mute-foreground/50 hover:text-mute-foreground transition-colors">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in animation-delay-600">
        <a
          href="#about"
          className=" flex flex-col items-center gap-2 text-mute-foreground hover:text-primary"
        >
          <span className="text-xs uppercase tracking-wider">Scroll</span>
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
