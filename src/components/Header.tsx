export const Header = () => {
  return (
    <header className="bg-white border-b sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="bg-blue-600 text-white w-10 h-10 rounded-lg flex items-center justify-center font-bold text-lg">
              CM
            </div>
            <span className="text-xl font-bold">CA MONK</span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#"
              className="text-sm font-medium hover:text-blue-600 transition-colors"
            >
              Tools
            </a>
            <a
              href="#"
              className="text-sm font-medium hover:text-blue-600 transition-colors"
            >
              Practice
            </a>
            <a
              href="#"
              className="text-sm font-medium hover:text-blue-600 transition-colors"
            >
              Events
            </a>
            <a
              href="#"
              className="text-sm font-medium hover:text-blue-600 transition-colors"
            >
              Job Board
            </a>
            <a
              href="#"
              className="text-sm font-medium hover:text-blue-600 transition-colors"
            >
              Points
            </a>
          </nav>

          {/* Profile Button */}
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
            Profile
          </button>
        </div>
      </div>
    </header>
  );
};
