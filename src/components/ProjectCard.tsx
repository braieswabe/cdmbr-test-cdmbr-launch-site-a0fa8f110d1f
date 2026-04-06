import { FC } from 'react';

interface ProjectCardProps {
  title: string;
  description: string;
}

const ProjectCard: FC<ProjectCardProps> = ({ title, description }) => {
  return (
    <div className="border rounded-lg p-6 shadow-lg hover:shadow-xl transition">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default ProjectCard;
export { ProjectCard };
export { ProjectCard };
export { ProjectCard };
export { ProjectCard };
