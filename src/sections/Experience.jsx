const experiences = [
  {
    period: "Listopad 2023 - Listopad 2025 ",
    role: "Junior Unity Developer",
    company: "Freelance",
    description:
      "Wykonywałem zadania do gry co-operacyjnej hack-n-slash, projekt był realizowany w Unity w oparciu o HDRP i Netcode for Gameobjects. Głównie zajmowałem się wdrażaniem nowych mechanik, implementacją UI oraz usuwaniem błędów. Podczas pracy korzystałem również z plugin-u DOTween do tworzenia prostych animacji obiektów oraz implementowałem różnego rodzaju efekty wizualne typu Particle System i Shader Graph.",
    technologies: ["Unity", "C#", "Network for GameObject", "DOTween"],
    current: false,
  },
  {
    period: "Luty 2022 - Maj 2022 ",
    role: "Junior Node.js Developer",
    company: "Sagaca",
    description:
      "Praca nad projektami wewnętrznymi przy wykorzystaniu Node.js oraz JavaScript/TypeScript",
    technologies: ["Node.js", "Express.js", "JavaScript", "TypeScript"],
    current: false,
  },
  {
    period: "Marzec 2020 - Wrzesień 2021 ",
    role: "Magister Inżynier Informatyki",
    company: "Politechnika Świętokrzyska w Kielcach",
    description:
      "Moja praca magisterska oraz inżynierska opierały się na aplikacjach mobilnych AR w Unity",
    technologies: ["Unity", "C#", "Vuforia"],
    current: false,
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-32 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            {" "}
            Podróż zawodowa
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Doświadczenie{" "}
            <span className="font-serif italic font-normal text-white">
              {" "}
              które mówi samo za siebie.
            </span>
          </h2>
          <p className="text-mute-foreground animate-fade-in animation-delay-200">
            Moje doświadczenia
          </p>
        </div>

        <div className="relative">
          <div className="timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-linear-to-b from-primary/70 via-primary/30 to-transparent md:-translate-x-1/2 shadow-[0_0_25px_rgba(32,178,166,0.8)]" />
          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <div
                key={index}
                className="relative grid md:grid-cols-2 gap-8 animate-fade-in"
                style={{ animationDelay: `${(index + 1) * 100}ms` }}
              >
                <div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background z-10">
                  {experience.current && (
                    <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75" />
                  )}
                </div>

                <div
                  className={`pl-8 md:pl-0 ${
                    index % 2 === 0
                      ? "md:pr-16 md:text-right"
                      : "md:col-start-2 md:pl-16"
                  }`}
                >
                  <div
                    className={`glass p-6 rounded-2xl border border-primary/30 hover:border-primary/50 transition-all duration-500`}
                  >
                    <span className="text-sm text-primary font-medium">
                      {experience.period}
                    </span>
                    <h3 className="text-xl font-semibold mt-2">
                      {experience.role}
                    </h3>
                    <p className="text-mute-foreground">{experience.company}</p>
                    <p className="text-sm text-mute-foreground mt-4">
                      {experience.description}
                    </p>
                    <div
                      className={`flex flex-wrap gap-2 mt-4 ${
                        index % 2 === 0 ? "md:justify-end" : ""
                      }`}
                    >
                      {experience.technologies.map((tech, techInx) => (
                        <span
                          key={techInx}
                          className="px-3 py-1 bg-surface rounded-full text-xs text-mute-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
