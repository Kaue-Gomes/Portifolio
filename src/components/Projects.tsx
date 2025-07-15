import { Cloud, Shield, TrendingUp, Users } from "lucide-react"


const Projetcts = () => {
      const projects = [
    {
      title: 'AI-Powered Analytics Platform',
      description: 'Full-stack application with real-time data processing and machine learning insights',
      tech: ['React', 'Node.js', 'TensorFlow', 'AWS'],
      status: 'Live',
      users: '50K+',
      growth: '+245%'
    },
    {
      title: 'Microservices Architecture',
      description: 'Scalable backend system handling millions of requests with 99.9% uptime',
      tech: ['Kubernetes', 'Docker', 'MongoDB', 'Redis'],
      status: 'Production',
      users: '1M+',
      growth: '+180%'
    },
    {
      title: 'Blockchain DeFi Protocol',
      description: 'Smart contract development with advanced security and gas optimization',
      tech: ['Solidity', 'Web3.js', 'Hardhat', 'IPFS'],
      status: 'Beta',
      users: '25K+',
      growth: '+320%'
    }
  ];
  return (
    <div>
        <section id="projects" className="px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Faça <span className="text-lime-400">seu</span> futuro digital
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Descubra projetos inovadores que mostram práticas modernas de engenharia e implementações de tecnologia de ponta.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-gray-800 rounded-3xl p-8 border border-gray-700 hover:border-lime-400 transition-colors group">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-lime-400 rounded-2xl flex items-center justify-center mb-4">
                    {index === 0 && <TrendingUp className="w-8 h-8 text-black" />}
                    {index === 1 && <Cloud className="w-8 h-8 text-black" />}
                    {index === 2 && <Shield className="w-8 h-8 text-black" />}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span key={tech} className="bg-gray-700 text-xs px-3 py-1 rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-lime-400">{project.status}</span>
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center">
                        <Users className="w-4 h-4 mr-1" />
                        <span>{project.users}</span>
                      </div>
                      <div className="flex items-center text-green-400">
                        <TrendingUp className="w-4 h-4 mr-1" />
                        <span>{project.growth}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <button className="w-full bg-gray-700 text-white py-3 rounded-xl font-medium hover:bg-lime-400 hover:text-black transition-colors group-hover:bg-lime-400 group-hover:text-black">
                  View Project
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Projetcts
