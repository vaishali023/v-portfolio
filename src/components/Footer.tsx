
export default function Footer() {
    const currentYear = new Date().getFullYear()
   
    return (
        <footer className="bg-gray-900 text-white py-12">
           <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#" className="text-2xl font-bold">
              <span className="text-primary">Dev</span>Portfolio
            </a>
            <p className="mt-2 text-gray-400 max-w-md">
              A passionate frontend engineer focused on creating intuitive and engaging user experiences.
            </p>
          </div>

          <div className="flex space-x-4">
           
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400">© {currentYear} Your Name. All rights reserved.</p>

          <nav className="mt-4 md:mt-0">
            <ul className="flex space-x-6">
              <li>
                <a href="#" className="text-gray-400 hover:text-primary transition-colors duration-300">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-primary transition-colors duration-300">
                  Terms of Service
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
        </footer>
    )
}