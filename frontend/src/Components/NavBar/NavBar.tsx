import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  HomeIcon,
  MusicalNoteIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

const NavBar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Home", icon: HomeIcon },
    { path: "/feed", label: "Feed", icon: MusicalNoteIcon },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      {/* Transparent NavBar with glassmorphism */}
      <div className="backdrop-blur-xl bg-blue-50/60 border-b border-blue-200/40 shadow-lg">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo Section */}
            <Link to="/" className="flex items-center space-x-3 group">
              <img
                src="/HarmoniqlogoOnly.svg"
                alt="Harmoniq Logo"
                className="h-10 w-10 transition-transform duration-300 group-hover:scale-110"
              />
              <span className="text-2xl font-bold text-blue-900 hidden sm:block">
                Harmoniq
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`flex items-center gap-1.5 px-3 py-2 rounded-xl transition-all duration-300 ${
                      isActive(item.path)
                        ? "bg-white/50 text-blue-900 font-semibold shadow-md"
                        : "text-blue-800 hover:bg-white/20 hover:text-blue-900"
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    {/* <span className="font-medium">{item.label}</span> */}
                  </Link>
                );
              })}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-xl bg-white/20 text-blue-900 hover:bg-white/30 transition-all duration-300"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <XMarkIcon className="w-6 h-6" />
              ) : (
                <Bars3Icon className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Mobile Navigation Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden pb-4 pt-2">
              <div className="flex flex-col space-y-2">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <Link
                      key={item.path}
                      to={item.path}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-300 ${
                        isActive(item.path)
                          ? "bg-white/30 text-blue-900 font-semibold shadow-md"
                          : "text-blue-800 hover:bg-white/20 hover:text-blue-900"
                      }`}
                    >
                      <Icon className="w-6 h-6" />
                      <span className="font-medium text-lg">{item.label}</span>
                    </Link>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
