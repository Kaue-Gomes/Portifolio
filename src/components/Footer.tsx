

const Footer = () => {
  return (
    <div>
       <footer className="px-6 py-12 border-t border-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-bold mb-4">
                <span className="text-lime-400">DEV</span>
                <span className="text-white">FOLIO.</span>
              </div>
              <p className="text-gray-400">
                Building the future of technology, one line of code at a time.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-lime-400">Web Development</a></li>
                <li><a href="#" className="hover:text-lime-400">Mobile Apps</a></li>
                <li><a href="#" className="hover:text-lime-400">Cloud Solutions</a></li>
                <li><a href="#" className="hover:text-lime-400">DevOps</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Technologies</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-lime-400">React & Next.js</a></li>
                <li><a href="#" className="hover:text-lime-400">Node.js & Python</a></li>
                <li><a href="#" className="hover:text-lime-400">AWS & Docker</a></li>
                <li><a href="#" className="hover:text-lime-400">TypeScript</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Connect</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-lime-400">GitHub</a></li>
                <li><a href="#" className="hover:text-lime-400">LinkedIn</a></li>
                <li><a href="#" className="hover:text-lime-400">Twitter</a></li>
                <li><a href="#" className="hover:text-lime-400">Email</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2025 DevFolio. All rights reserved. Built with React and modern web technologies.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
