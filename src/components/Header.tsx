const Header = () => {
  return (
   <>      {/* Header */}
      <header className="relative z-50 px-6 py-4">
        <nav className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="text-2xl font-bold">
            <span className="text-lime-400">KAUÊ</span>
            <span className="text-white">GOMES.</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="hover:text-lime-400 transition-colors">About</a>
            <a href="#projects" className="hover:text-lime-400 transition-colors">Projects</a>
            <a href="#skills" className="hover:text-lime-400 transition-colors">Skills</a>
            <a href="#contact" className="hover:text-lime-400 transition-colors">Contact</a>
          </div>
          <button className="bg-lime-400 text-black px-6 py-2 rounded-full font-medium hover:bg-lime-300 transition-colors">
            Hire Me Now
          </button>
        </nav>
      </header>
    </>

  )
}

export default Header;
