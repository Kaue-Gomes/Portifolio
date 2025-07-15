import { ChevronRight, ArrowLeft, Code, Cloud, Shield } from "lucide-react"
import { useState } from "react"
import './style/About.css'


const About = () => {
  const [flippedCard, setFlippedCard] = useState<number | null>(null);

  const cardsData = [
    {
      id: 1,
      number: "01.",
      title: "Desenvolvimento Full-Stack",
      description: "Desenvolvimento de ponta a ponta, do conceito à implantação, garantindo experiências perfeitas para o usuário.",
      bgColor: "bg-gray-800",
      textColor: "text-white",
      accentColor: "text-lime-400",
      borderColor: "border-gray-700",
      detailsContent: {
        icon: Code,
        title: "Tecnologias Full-Stack",
        points: [
          "Frontend: React, Next.js, Vue.js, TypeScript",
          "Backend: Node.js, Python, Java, .NET",
          "Banco de Dados: PostgreSQL, MongoDB, Redis",
          "APIs: REST, GraphQL, WebSockets",
          "Mobile: React Native, Flutter"
        ]
      }
    },
    {
      id: 2,
      number: "02.",
      title: "Arquitetura em nuvem",
      description: "Soluções de nuvem escaláveis usando AWS, Docker e Kubernetes para aplicativos de alto desempenho.",
      bgColor: "bg-lime-400",
      textColor: "text-black",
      accentColor: "text-black",
      borderColor: "",
      detailsContent: {
        icon: Cloud,
        title: "Soluções Cloud",
        points: [
          "AWS Services: EC2, Lambda, S3, RDS",
          "Containerização: Docker, Kubernetes",
          "Microserviços: API Gateway, Load Balancer",
          "Monitoramento: CloudWatch, Prometheus",
          "CDN: CloudFront, distribuição global"
        ]
      }
    },
    {
      id: 3,
      number: "03.",
      title: "DevOps & Segurança",
      description: "Pipelines de implantação automatizados e implementações de segurança robustas para aplicativos corporativos.",
      bgColor: "bg-gray-800",
      textColor: "text-white",
      accentColor: "text-lime-400",
      borderColor: "border-gray-700",
      detailsContent: {
        icon: Shield,
        title: "DevOps & Security",
        points: [
          "CI/CD: GitHub Actions, Jenkins, GitLab",
          "Segurança: OAuth, JWT, SSL/TLS",
          "Infraestrutura: Terraform, Ansible",
          "Monitoramento: Grafana, ELK Stack",
          "Backup: Estratégias automatizadas"
        ]
      }
    }
  ];

  const handleCardClick = (cardId: number) => {
    setFlippedCard(flippedCard === cardId ? null : cardId);
  };

  return (
    <div>
      <section id="about" className="px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold">
              Seu <span className="text-lime-400">parceiro de</span> confiança em
              <br />
              <span className="text-gray-400">Inovação digital.</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Focados em fornecer soluções de ponta utilizando as tecnologias mais recentes.
              Especializados em criar aplicações escaláveis que acompanham o crescimento do seu negócio.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {cardsData.map((card) => (
              <div key={card.id} className="relative h-80 perspective-1000">
                <div
                  className={`absolute inset-0 w-full h-full transition-transform duration-700 transform-style-preserve-3d ${
                    flippedCard === card.id ? 'rotate-y-180' : ''
                  }`}
                >
                  {/* Frente do Card */}
                  <div className={`absolute inset-0 w-full h-full backface-hidden ${card.bgColor} ${card.textColor} rounded-3xl p-8 ${card.borderColor ? `border ${card.borderColor}` : ''}`}>
                    <div className="text-sm text-gray-400 mb-2">{card.number}</div>
                    <h3 className="text-xl font-bold mb-4">{card.title}</h3>
                    <p className="text-gray-400 mb-6">{card.description}</p>
                    <div
                      className={`flex items-center ${card.accentColor} hover:opacity-80 cursor-pointer transition-opacity`}
                      onClick={() => handleCardClick(card.id)}
                    >
                      <span className="mr-2">Leia Mais</span>
                      <ChevronRight className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Verso do Card */}
                  <div className={`absolute inset-0 w-full h-full backface-hidden rotate-y-180 ${card.bgColor} ${card.textColor} rounded-3xl p-8 ${card.borderColor ? `border ${card.borderColor}` : ''}`}>
                    <div className="flex items-center mb-4">
                      <card.detailsContent.icon className={`w-6 h-6 ${card.accentColor} mr-3`} />
                      <h3 className="text-xl font-bold">{card.detailsContent.title}</h3>
                    </div>
                    <div className="space-y-3 mb-6">
                      {card.detailsContent.points.map((point, index) => (
                        <div key={index} className="flex items-start">
                          <div className={`w-2 h-2 rounded-full ${card.id === 2 ? 'bg-black' : 'bg-lime-400'} mt-2 mr-3 flex-shrink-0`}></div>
                          <p className="text-sm text-gray-400">{point}</p>
                        </div>
                      ))}
                    </div>
                    <div
                      className={`flex items-center ${card.accentColor} hover:opacity-80 cursor-pointer transition-opacity`}
                      onClick={() => handleCardClick(card.id)}
                    >
                      <ArrowLeft className="w-4 h-4 mr-2" />
                      <span>Voltar</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

   
