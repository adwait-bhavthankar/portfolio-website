const SkillsSection: React.FC = () => {
    const skills = [
      { name: 'HTML', icon: '/html.svg' },
      { name: 'Tailwind CSS', icon: '/tailwind.svg' },
      { name: 'MongoDB', icon: '/mongodb.svg' },
      { name: 'PostgreSQL', icon: 'sql.svg' },
      { name: 'JavaScript', icon: '/javascript.svg' },
      { name: 'Node.js', icon: '/node.svg' },
      { name: 'Next.js', icon: 'next.svg' },
      { name: 'React.js', icon: '/react.svg' },
    ];
  
    return (
      <section id="skills" className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-6 sm:px-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-12">
            My Skills
          </h2>
  
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center space-y-4"
              >
                <img
                  src={skill.icon}
                  alt={`${skill.name} icon`}
                  className="w-16 h-16"
                />
                <span className="text-lg font-semibold">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default SkillsSection;
  