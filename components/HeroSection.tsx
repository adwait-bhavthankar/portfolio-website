import Link from 'next/link';

const HeroSection: React.FC = () => {
  return (
    <section id='about' className="bg-gray-900 text-white min-h-screen flex items-center">
      <div className="container mx-auto px-6 sm:px-12 text-center sm:text-left">
        {/* Introduction */}
        <h1 className="text-4xl sm:text-6xl font-bold mb-6">
          Hi, I am <span className="text-blue-500">Adwait Bhvathankar</span>
        </h1>
        <p className="text-lg sm:text-xl text-gray-300 mb-8">
          I am a passionate <span className="text-blue-500">Web Developer</span> dedicated to creating beautiful, functional, and responsive web experiences. Let's build something amazing together.
        </p>

        {/* Call-to-Actions */}
        <div className="flex justify-center sm:justify-start space-x-4">
          {/* View My Work Button */}
          <Link
            href="#projects"
            className="bg-blue-500 px-6 py-3 rounded-md text-lg font-semibold hover:bg-blue-600 transition duration-300"
          >
            View My Work
          </Link>

          {/* Get in Touch Button */}
          <Link
            href="#contact"
            className="border border-blue-500 px-6 py-3 rounded-md text-lg font-semibold hover:bg-blue-500 hover:text-white transition duration-300"
          >
            Get in Touch
          </Link>

          {/* Download CV Button */}
          <a
            href="/Adwait_Bhavthankar_CV.pdf" // Place your CV in the public directory
            download="Adwait_Bhavthankar_CV.pdf" // Name of the downloaded file
            className="bg-gray-800 px-6 py-3 rounded-md text-lg font-semibold hover:bg-gray-700 transition duration-300"
          >
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
