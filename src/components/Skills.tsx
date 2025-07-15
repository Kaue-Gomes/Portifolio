import  { useState } from 'react';
import { Star, ChevronRight } from 'lucide-react';

const Skills = () => {
  const baseSkills = [
    { name: 'React', level: 95, color: 'bg-blue-500' },
    { name: 'TypeScript', level: 90, color: 'bg-blue-600' },
    { name: 'Node.js', level: 88, color: 'bg-green-500' },
    { name: 'PHP', level: 95, color: 'bg-yellow-500' },
    { name: 'AWS', level: 82, color: 'bg-orange-500' },
    { name: 'Docker', level: 80, color: 'bg-blue-400' }
  ];

  const extraSkills = [
    { name: 'MySQL', level: 85, color: 'bg-blue-300' },
    { name: 'Bootstrap', level: 80, color: 'bg-purple-500' },
    { name: 'Next.js', level: 87, color: 'bg-gray-700' },
    { name: 'Tailwind CSS', level: 92, color: 'bg-teal-400' },
    { name: 'Git', level: 89, color: 'bg-red-500' },
    { name: 'GitHub', level: 90, color: 'bg-black' }
  ];

  const [showAll, setShowAll] = useState(false);
  const allSkills = showAll ? [...baseSkills, ...extraSkills] : baseSkills;

  // Divide em duas colunas
  const midpoint = Math.ceil(allSkills.length / 2);
  const firstColumn = allSkills.slice(0, midpoint);
  const secondColumn = allSkills.slice(midpoint);

  return (
    <div>
      <section id="skills" className="px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            {/* Texto à esquerda */}
            <div>
              <h2 className="text-4xl font-bold mb-6">
                Tecnologias <span className="text-lime-400">confiáveis</span>
                <br />
                <span className="text-gray-400">a todo momento para todos.</span>
              </h2>
              <div className="flex items-center space-x-2 mb-6">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="w-5 h-5 text-lime-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-400 mb-8">
                Expertise em frameworks e ferramentas modernas, aprendendo e se adaptando constantemente a novas tecnologias
                para entregar soluções de ponta.
              </p>

              {/* Botão alternar skills */}
              <div
                className="flex items-center text-lime-400 hover:text-lime-300 cursor-pointer"
                onClick={() => setShowAll(!showAll)}
              >
                <span className="mr-2">
                  {showAll ? 'Mostrar menos' : 'Ver todas as Skills'}
                </span>
                <ChevronRight className={`w-4 h-4 transform transition-transform ${showAll ? 'rotate-180' : ''}`} />
              </div>
            </div>

            {/* Skills divididas */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[firstColumn, secondColumn].map((column, colIndex) => (
                <div key={colIndex} className="space-y-6">
                  {column.map((skill) => (
                    <div key={skill.name} className="bg-gray-800 rounded-2xl p-6">
                      <div className="flex items-center justify-between mb-4">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-lime-400">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div
                          className={`h-2 rounded-full ${skill.color} transition-all duration-1000`}
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;
