import { Link, NavLink } from "react-router-dom";

const Layout = ({ children }) => {
  const navLinkClass = ({ isActive }) =>
    isActive
      ? "text-gray-900 text-sm font-medium"
      : "text-gray-600 hover:text-gray-900 text-sm font-medium";

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-14">
            <div className="flex items-center">
              <Link to="/" className="text-lg font-semibold text-gray-900">
                TodoList
              </Link>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <NavLink to="/" className={navLinkClass}>
                Dashboard
              </NavLink>
              <NavLink to="/home" className={navLinkClass}>
                Home
              </NavLink>
              <NavLink to="/todo" className={navLinkClass}>
                Tasks
              </NavLink>
              <NavLink to="/groups" className={navLinkClass}>
                Groups
              </NavLink>
              <NavLink to="/guide" className={navLinkClass}>
                Guide
              </NavLink>
              <NavLink to="/developers" className={navLinkClass}>
                Developers
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {children}
      </main>
    </div>
  );
};

export default Layout;
