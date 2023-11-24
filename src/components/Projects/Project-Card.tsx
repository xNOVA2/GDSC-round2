import { ProjectCardProps } from '@/Types/Type';

const ProjectCard: React.FC<ProjectCardProps> = ({ Image, description, icon, title }) => {
  return (
    <div className="overflow-hidden transition-transform duration-300 bg-white rounded group hover:scale-y-105">
      <img src={Image} className="object-cover w-full h-64 rounded" alt="" />

      <div className="py-5">
        <a
          href="/"
          className="inline-block mb-3 text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
        >
          <p className="text-2xl font-bold leading-5">{title}</p>
        </a>
        <p className="mb-4 text-gray-700">{description}</p>
        <div className="flex space-x-4">
          <a
            href="/"
            className="flex items-start text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700 group"
          >
            <div className="mr-2">{icon}</div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
