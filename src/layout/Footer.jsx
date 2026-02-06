import { Github, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-6">
        <div className=" flex flex-col md:flex-row justify-between items-center gap-8">
          <a
            href="#"
            className="text-xl font-bold tracking-tight hover:text-primary"
          >
            ACH<span className="text-primary">.</span>
          </a>

          <div className=" flex space-x-6 mb-2">
            <a
              href="https://github.com/AdrianCheba"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Github"
              className="p-2 rounded-full glass  hover:bg-primary/10 hover:text-primary transition-all duration-300"
            >
              <Github className="h-7 w-7" />
            </a>
            <a
              href="https://www.linkedin.com/in/adrian-cheba-6a454a265/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit or Twitter page"
              className="p-2 rounded-full glass  hover:bg-primary/10 hover:text-primary transition-all duration-300"
            >
              <Linkedin className="h-7 w-7" />
            </a>
          </div>
          <p className="text-sm">&copy; 2026 Wszelkie prawa zastrzeżone. </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
