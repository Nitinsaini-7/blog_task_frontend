import { Facebook, Twitter, Instagram, Mail } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-slate-50 border-t border-gray-200">
      <div className="container mx-auto px-4 py-8">
        {/* Desktop and Mobile Layout */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center">
          {/* Logo and Description */}
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold text-gray-800">BlogFolio</h2>
            <p className="mt-2 text-sm text-gray-600 max-w-xs">Sharing thoughts, stories, and ideas with the world.</p>
          </div>

          {/* Navigation Links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 md:gap-16">
            {/* Quick Links */}
            <div className="mb-6 md:mb-0">
              <h3 className="text-sm font-semibold text-gray-800 uppercase tracking-wider mb-4">Navigation</h3>
              <ul className="space-y-2">
                <li>
                  <a href="/" className="text-gray-600 hover:text-gray-900">
                    Home
                  </a>
                </li>
                <li>
                  <a href="/blog" className="text-gray-600 hover:text-gray-900">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="/about" className="text-gray-600 hover:text-gray-900">
                    About
                  </a>
                </li>
                <li>
                  <a href="/contact" className="text-gray-600 hover:text-gray-900">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Categories */}
            <div className="mb-6 md:mb-0">
              <h3 className="text-sm font-semibold text-gray-800 uppercase tracking-wider mb-4">Categories</h3>
              <ul className="space-y-2">
                <li>
                  <a href="/category/technology" className="text-gray-600 hover:text-gray-900">
                    Technology
                  </a>
                </li>
                <li>
                  <a href="/category/lifestyle" className="text-gray-600 hover:text-gray-900">
                    Lifestyle
                  </a>
                </li>
                <li>
                  <a href="/category/travel" className="text-gray-600 hover:text-gray-900">
                    Travel
                  </a>
                </li>
                <li>
                  <a href="/category/food" className="text-gray-600 hover:text-gray-900">
                    Food
                  </a>
                </li>
              </ul>
            </div>

            {/* Social Links */}
            <div className="mb-6 md:mb-0">
              <h3 className="text-sm font-semibold text-gray-800 uppercase tracking-wider mb-4">Connect</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  <Facebook size={20} />
                  <span className="sr-only">Facebook</span>
                </a>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  <Twitter size={20} />
                  <span className="sr-only">Twitter</span>
                </a>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  <Instagram size={20} />
                  <span className="sr-only">Instagram</span>
                </a>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  <Mail size={20} />
                  <span className="sr-only">Email</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section with Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-600">&copy; {new Date().getFullYear()} BlogFolio. All rights reserved.</p>
            <div className="mt-4 md:mt-0">
              <ul className="flex space-x-6">
                <li>
                  <a href="/privacy" className="text-xs text-gray-600 hover:text-gray-900">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="/terms" className="text-xs text-gray-600 hover:text-gray-900">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="/cookies" className="text-xs text-gray-600 hover:text-gray-900">
                    Cookie Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
