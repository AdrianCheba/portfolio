import { ArrowRight } from "lucide-react";
import { Button } from "../components/Button";
import AnimatedButton from "../components/AnimatedButton";

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
        <div>
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
              <AnimatedButton />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
