import { Code2, Lightbulb, Rocket, Users } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Skalowalność",
    description: "Piszę kod, który rośnie razem z Twoim projektem.",
  },
  {
    icon: Rocket,
    title: "Doświadczenie Interakcji",
    description:
      "Dzięki Unity wiem, jak sprawić, by użytkownik czuł aplikację.",
  },
  {
    icon: Users,
    title: "Bezpieczeństwo Danych",
    description:
      "Solidne podstawy w Node, Redis, MongoDB oraz SQL gwarantują stabilny backend.",
  },
  {
    icon: Lightbulb,
    title: "Szybka Adaptacja",
    description:
      "Od C# po React - szybko uczę się nowych narzędzi, by rozwiązywać realne problemy.",
  },
];

const About = () => {
  return (
    <section className="py-32 relative overflow-hidden" id="about">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-secondary-foreground txt-sm font-medium tracking-wide uppercase ">
                O mnie
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
              Kilka słów o mnie,{" "}
              <span className="text-foreground font-serif italic font-normal">
                czyli jak łączę różne światy.{" "}
              </span>
            </h2>
            <div className="space-y-4 text-mute-foreground animate-fade-in animation-delay-200 text-justify">
              <p>
                Moja droga z kodem zaczęła się od fundamentów backendowych w
                Node.js. Choć był to krótki, pozwolił mi on zrozumieć, jak
                działają serwery i przepływ danych. Następnie na dwa lata
                zanurzyłem się w świecie Unity. Praca z C# nauczyła mnie
                dyscypliny w pisaniu wydajnego kodu oraz dbałości o interakcję
                użytkownika z produktem.
              </p>
              <p>
                Obecnie moje horyzonty skupione są na ekosystemie Reacta.
                Wykorzystuję bagaż doświadczeń z gamedevu i backendu, aby
                budować nowoczesne, skalowalne aplikacje webowe. Szukam wyzwań,
                gdzie będę mógł wykorzystać swoją wszechstronność — od czystej
                logiki po dopracowany UI.
              </p>
            </div>
            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-foreground">
                "Wierzę, że najlepsze produkty powstają na styku pasji do
                designu i inżynierskiego podejścia do wydajności."
              </p>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="glass rounded-2xl p-6 animate-fade-in"
                style={{ animationDelay: `${(index + 1) * 100}ms` }}
              >
                <div className=" w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className=" text-sm text-mute-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
