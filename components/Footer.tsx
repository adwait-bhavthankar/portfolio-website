import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-6 sm:px-12 text-center sm:text-left">
        {/* Top Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center sm:items-start mb-6">
          {/* About Section */}
          <div className="mb-6 sm:mb-0">
            <h3 className="text-lg font-bold mb-2">About Me</h3>
            <p className="text-gray-400 max-w-xs">
              I am a passionate web developer dedicated to building functional, responsive, and visually appealing web experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div className="mb-6 sm:mb-0">
            <h3 className="text-lg font-bold mb-2">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#projects"
                  className="text-gray-400 hover:text-blue-500 transition duration-300"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className="text-gray-400 hover:text-blue-500 transition duration-300"
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-400 hover:text-blue-500 transition duration-300"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-bold mb-2">Follow Me</h3>
            <div className="flex space-x-4">
              <a
                href="https://github.com/adwait-bhavthankar"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-500 transition duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 .5C5.7.5.6 5.6.6 12c0 5.1 3.3 9.5 7.9 11 .6.1.8-.2.8-.6v-2.2c-3.2.7-3.9-1.4-3.9-1.4-.5-1.2-1.3-1.6-1.3-1.6-1.1-.8.1-.8.1-.8 1.2.1 1.8 1.3 1.8 1.3 1 .1.8 1.1.8 1.1.9 1.5 2.4 1.1 3 .8 0-.7.3-1.1.6-1.4-2.6-.3-5.3-1.3-5.3-5.9 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.4.1-2.9 0 0 1-.3 3.2 1.2a10.9 10.9 0 0 1 5.7 0c2.2-1.5 3.2-1.2 3.2-1.2.6 1.5.2 2.6.1 2.9.7.8 1.2 1.8 1.2 3.1 0 4.6-2.7 5.6-5.3 5.9.3.3.7.9.7 1.8v2.6c0 .4.2.7.8.6 4.6-1.5 7.9-5.9 7.9-11C23.4 5.6 18.3.5 12 .5z" />
                </svg>
              </a>
              <a
                href="/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-500 transition duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M4.98 3.5c0-1.2-.9-2-2-2s-2 .8-2 2c0 1.1.9 2 2 2s2-.8 2-2zM0 23.9h4V8.3H0v15.6zM8.3 8.3h3.8v2.1h.1c.5-1 1.8-2.1 3.6-2.1 3.9 0 4.7 2.6 4.7 6v9h-4v-8c0-1.9-.7-3.1-2.3-3.1-1.2 0-2 .8-2.4 1.6-.1.3-.1.6-.1.9v8.5h-4c.1-13.9.1-15.7.1-15.7z" />
                </svg>
              </a>
              <a
                href="/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-500 transition duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.75 3A4.75 4.75 0 003 7.75v8.5A4.75 4.75 0 007.75 21h8.5A4.75 4.75 0 0021 16.25v-8.5A4.75 4.75 0 0016.25 3h-8.5zM16.25 2.5A6.25 6.25 0 0122.5 8.75v8.5A6.25 6.25 0 0116.25 23.5h-8.5A6.25 6.25 0 012.5 16.25v-8.5A6.25 6.25 0 018.75 2.5h8.5zM17.75 8.75a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 pt-6 text-gray-400 text-sm text-center">
          © {new Date().getFullYear()} Adwait Bhavathankar. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
