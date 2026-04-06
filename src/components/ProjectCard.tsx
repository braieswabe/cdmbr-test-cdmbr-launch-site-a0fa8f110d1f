import { FC } from 'react';

interface ProjectCardProps {
  title: string;
  description: string;
  link: string;
}

const ProjectCard: FC<ProjectCardProps> = ({ title, description, link }) => {
  return (
    <div className="border rounded-lg p-4 shadow-lg hover:shadow-xl transition">
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="mt-2">{description}</p>
      <a href={link} className="mt-4 inline-block text-accent hover:underline">
        View Project
      </a>
    </div>
  );
};

export { ProjectCard };

export function ProjectCard() {
  return <div>ProjectCard</div>;
}

export default ProjectCard;
