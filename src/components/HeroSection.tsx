

const HeroSection = () => {
  return (
    <div>
        <section className="relative px-6 py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-2 bg-gray-800 rounded-full px-4 py-2">
                <span className="text-lime-400 text-sm font-medium">FULL-STACK ENGINEER</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                Criando o
                <span className="text-lime-400 block">futuro da tecnologia</span>
                <span className="text-gray-400">com código.</span>
              </h1>
              <div className="flex items-center space-x-4">
                <div className="flex -space-x-2">
                  {[1,2,3,4,5].map((i) => (
                    <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-r from-lime-400 to-green-500 border-2 border-gray-900"></div>
                  ))}
                </div>
                <div>
                  <div className="text-xl font-bold">50+</div>
                  <div className="text-sm text-gray-400">Projetos Completos</div>
                </div>
              </div>
              <p className="text-gray-400 text-lg max-w-md">
                Especializado em tecnologias modernas, arquitetura em nuvem, e sistema escaláveis. 
                Apaixonado por criar soluções inovadoras que impulsonem o crescimento dos negócios.
              </p>
            </div>
            <div className="relative">
              <div className="relative z-10">
                <div className="bg-gray-800 rounded-3xl p-6 transform rotate-3 hover:rotate-0 transition-transform duration-300">
                  <div className="bg-black rounded-2xl p-4 space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex space-x-2">
                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      </div>
                      <div className="text-sm text-gray-400">Terminal</div>
                    </div>
                    <div className="font-mono text-sm space-y-2">
                      <div className="text-lime-400">$ npm run build</div>
                      <div className="text-gray-400">Building application...</div>
                      <div className="text-green-400">✓ Compiled successfully</div>
                      <div className="text-lime-400">$ git push origin main</div>
                      <div className="text-gray-400">Deploying to production...</div>
                      <div className="text-green-400">✓ Deploy complete</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-lime-400 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-500 rounded-full opacity-10 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HeroSection
