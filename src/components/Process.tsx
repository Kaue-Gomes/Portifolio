import { Code, Database, Globe, Play, Zap } from 'lucide-react'


const Process = () => {
  return (
    <div>
        <section className="px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
             O que há <span className="text-lime-400">de novo</span> no meu
              <br />
              <span className="text-gray-400">processo de desenvolvimento</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-lime-400 rounded-full flex items-center justify-center flex-shrink-0">
                  <Code className="w-6 h-6 text-black" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Processos Moderno</h3>
                  <p className="text-gray-400">
                   Estruturas e ferramentas mais recentes, incluindo React 18, Next.js 14 e TypeScript para aplicativos robustos.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <Database className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Banco de dados otimizado</h3>
                  <p className="text-gray-400">
                    Design avançado de banco de dados com PostgreSQL, Mysql MongoDB e Redis para operações de dados de alto desempenho.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Desempenho em primeiro lugar</h3>
                  <p className="text-gray-400">
                    Aplicativos otimizados com 99,9% de tempo de atividade, tempos de carregamento rápidos e arquitetura escalável.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Implantação global</h3>
                  <p className="text-gray-400">
                    Soluções nativas em nuvem com AWS, Docker e Kubernetes para acessibilidade mundial.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gray-800 rounded-3xl p-8 border border-gray-700">
                <div className="text-center mb-6">
                  <div className="w-20 h-20 bg-gradient-to-r from-lime-400 to-green-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Play className="w-10 h-10 text-black" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Pronto para começar a criação?</h3>
                  <p className="text-gray-400">
                    Lvamos discutir seu projeto e criar algo incrível juntos.
                  </p>
                </div>
                <button className="w-full bg-lime-400 text-black py-4 rounded-xl font-bold hover:bg-lime-300 transition-colors">
                  Start Your Project
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Process
