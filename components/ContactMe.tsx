import React from 'react';

const ContactMe: React.FC = () => {
  return (
    <section id='contact' className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-6 sm:px-12 max-w-6xl">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-12">
          Contact Me
        </h2>

        <div className="flex flex-col sm:flex-row justify-center items-center space-y-8 sm:space-y-0 sm:space-x-16 text-center">
          {/* Email Section */}
          <div>
            <h3 className="text-2xl font-semibold mb-2">Email</h3>
            <p className="text-gray-300">
              <a
                href="mailto:adwaitbhav4@gmail.com"
                className="text-blue-500 hover:underline"
              >
                adwaitbhav4@gmail.com
              </a>
            </p>
          </div>

          {/* Phone Section */}
          <div>
            <h3 className="text-2xl font-semibold mb-2">Phone</h3>
            <p className="text-gray-300">
              <a
                href="tel:+918767244492"
                className="text-blue-500 hover:underline"
              >
                +91 8767244492
              </a>
            </p>
          </div>

          {/* Location Section */}
          <div>
            <h3 className="text-2xl font-semibold mb-2">Location</h3>
            <p className="text-gray-300">Pune, Maharashtra, India</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
