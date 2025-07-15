import { Mail, Github, Linkedin, Twitter } from 'lucide-react'


const Contact = () => {
  return (
    <div>
       <section id="contact" className="px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Vamos criar algo <span className="text-lime-400">incrivel</span> juntos
          </h2>
          <p className="text-gray-400 mb-12 max-w-2xl mx-auto">
            Pronto para iniciar seu próximo projeto? Entre em contato e vamos discutir como podemos dar vida à sua visão.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button className="bg-lime-400 text-black px-8 py-4 rounded-xl font-bold hover:bg-lime-300 transition-colors flex items-center justify-center">
              <Mail className="w-5 h-5 mr-2" />
              Entre em contato
            </button>
            <button className="bg-gray-800 text-white px-8 py-4 rounded-xl font-bold hover:bg-gray-700 transition-colors flex items-center justify-center border border-gray-700">
              <Github className="w-5 h-5 mr-2" />
              Ver GitHub
            </button>
          </div>

          <div className="flex justify-center space-x-6">
            <a href="#" className="text-gray-400 hover:text-lime-400 transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-lime-400 transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-lime-400 transition-colors">
              <Twitter className="w-6 h-6" />
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
