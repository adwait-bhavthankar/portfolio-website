import Image from 'next/image';
import Link from 'next/link';

const ProjectsSection: React.FC = () => {
  // Sample project data (replace with your projects)
  const projects = [
    {
      title: 'Portfolio Website',
      description:
        'A personal portfolio website built using React and Tailwind CSS to showcase my skills and projects.',
      image: '/portfolio.png', // Replace with your image path
      liveLink: 'https://your-portfolio-link.com',
      githubLink: 'https://github.com/adwait-bhavthankar/portfolio-website',
    },
    {
      title: 'Mern Food Ordering App',
      description:
        'A web application that allows to order food online. ',
      image: '/mern-app.png', // Replace with your image path
      liveLink: 'https://mern-food-ordering-app-frontend-005t.onrender.com', // Replace with your live project link
      githubLink: 'https://github.com/adwait-bhavthankar/mern-food-ordering-app-frontend', // Replace with your GitHub repository link
    },
   
  ];

  return (
    <section id='projects' className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-6 sm:px-12">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-12">
          My Projects
        </h2>

        {projects.map((project, index) => (
          <div
            key={index}
            className="mb-16 bg-gray-800 rounded-lg shadow-lg overflow-hidden"
          >
            {/* Project Image */}
            <div className="flex justify-center items-center bg-gray-700 p-8">
              <Image
                src={project.image}
                alt={project.title}
                className="w-auto h-70 object-contain"
              />
            </div>

            {/* Project Content */}
            <div className="p-8">
              <h3 className="text-3xl font-semibold mb-4">{project.title}</h3>
              <p className="text-gray-300 text-lg mb-6">{project.description}</p>

              {/* Links */}
              <div className="flex justify-start space-x-6">
                <Link
                  href={project.liveLink}
                  className="px-6 py-2 bg-blue-600 rounded-lg hover:bg-blue-500 transition duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Live
                </Link>
                <Link
                  href={project.githubLink}
                  className="px-6 py-2 bg-gray-700 rounded-lg hover:bg-gray-600 transition duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub Repo
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
