export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-16">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-blue-600 text-white w-8 h-8 rounded-lg flex items-center justify-center font-bold">
                CM
              </div>
              <span className="text-white font-bold">CA MONK</span>
            </div>
            <p className="text-sm text-gray-400">
              Empowering the next generation of financial leaders with tools,
              community, and knowledge.
            </p>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-semibold mb-4">RESOURCES</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-sm hover:text-white transition-colors"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm hover:text-white transition-colors"
                >
                  Webinars
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm hover:text-white transition-colors"
                >
                  Case Studies
                </a>
              </li>
            </ul>
          </div>

          {/* Platform */}
          <div>
            <h3 className="text-white font-semibold mb-4">PLATFORM</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-sm hover:text-white transition-colors"
                >
                  Job Board
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm hover:text-white transition-colors"
                >
                  Practice Tests
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm hover:text-white transition-colors"
                >
                  Mentorship
                </a>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-white font-semibold mb-4">CONNECT</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-sm hover:text-white transition-colors"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm hover:text-white transition-colors"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm hover:text-white transition-colors"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-400">
            © 2024 CA Monk. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="#"
              className="text-sm text-gray-400 hover:text-white transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-sm text-gray-400 hover:text-white transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
